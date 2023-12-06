import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase'; // Adjust the path based on your project structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"; // Adjust the path based on your project structure


// const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const signUp = (e) => {
//         e.preventDefault();
//         signUpWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 console.log(userCredential);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };


const SignUp = () => {
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


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <form onSubmit={signUp}>
                    <div className='title'>Create New Account. </div>
                    <label htmlFor="email" className='text'>Email or Username</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email or username"
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

                    <button
                        className={email && password ? "active" : ""}
                        disabled={email && password ? false : true}
                    >SignUp</button>

                    <div className='back' onClick={handleGoBack}>
                        <FontAwesomeIcon icon={faBackward} /> Go Back
                    </div>

                </form>
            </div>
        </>
    );
}

export default SignUp;
