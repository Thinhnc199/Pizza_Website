// AuthDetails.js

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import "./AuthDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons"; // Ensure correct import

import { Link } from 'react-router-dom';
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="auth-details-container">
            {authUser ? (
                <>
                    <p className="auth-details-signed-in">{`Hi !!! Wellcome back ${authUser.email}`}</p>
                    <Link to="/">
                        <button className="auth-details-sign-out-btn" onClick={userSignOut}>
                            Sign Out
                        </button>
                    </Link>
                </>
            ) : (
                <h2>
                    Hava a good dayyyy <FontAwesomeIcon icon={faLaptop} />
                </h2>
            )}
        </div>
    );
};

export default AuthDetails;