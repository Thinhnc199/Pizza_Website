// Import necessary dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Make sure to adjust the path based on your project structure

// ProtectedRoute component
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth(); // Use the authentication context to get the current user

    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        />
    );
};

export default ProtectedRoute;
