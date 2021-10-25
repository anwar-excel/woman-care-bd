import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div id="login">
            <h2>Please Register</h2>
            <Button className="btn btn-primary">Register</Button>

            <h2>Already, You have a account, Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>


        </div>
    );
};

export default Login;