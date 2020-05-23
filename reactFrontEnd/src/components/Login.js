import React, {useState} from 'react';
import layout from '../layout.svg';

import { Redirect, withRouter, Link, useHistory } from "react-router-dom";
import firebase from "../firebase/config";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [routeRedirect, setRedirect] = useState("");

    const login = () => {
        console.log("login user");
    }
    return(
        <React.Fragment>
            <form onSubmit={login}>
                <p>Welcome Back</p>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange= {(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Email: </label>
                <input type="password" name="password" onChange= {(e) => setPassword(e.target.value)} />

                <input type="submit" value="login" />


            </form>
        </React.Fragment>
    )

}

export default withRouter(Login);