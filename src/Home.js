import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            <h1>Welcome to the home page</h1>
            <div>
                <span>Login : </span>
                <Link to='/login'>Login</Link>
                <br />
                <span>Register : </span>
                <Link to='/register'>Register</Link>
            </div>
        </React.Fragment>
    )
}