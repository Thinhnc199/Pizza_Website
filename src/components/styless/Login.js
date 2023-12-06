import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import the necessary functions
import { faBackward, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleGoBack = () => {
        // Use history.goBack() to go back to the previous page
        history.goBack();
    };

    const handleLogin = () => {
        // Use getAuth to get the authentication instance
        const auth = getAuth();

        // Use the signInWithEmailAndPassword function directly
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Login successful:', user);
                // Add your logic for successful login
            })
            .catch((error) => {
                console.error('Login error:', error.message);
                // Handle login error
            });
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <form onSubmit={handleLogin}>
                    <div className='title'>Login Pizza</div>
                    <label htmlFor="email" className='text'>Email </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email "
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <label htmlFor="password" className='text'>Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            className="toggle-password-icon"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className='button-container'>
                        <Link to="/authdetails">
                            <button onClick={handleLogin}
                                className={email && password ? "active" : ""}
                                disabled={email && password ? false : true}
                            >Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signup-button">Sign Up</button>
                        </Link>
                    </div>
                    <div className='back' onClick={handleGoBack}>
                        <FontAwesomeIcon icon={faBackward} /> Go Back
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
