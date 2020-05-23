import React, {useState} from 'react';
import layout from '../layout.svg';

import { Redirect, withRouter, Link, useHistory } from "react-router-dom";
import firebase from "../firebase/config";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [routeRedirect, setRedirect] = useState("");

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const login = () => {
        console.log("login user");
    }
    return(
        <React.Fragment>
            <button className="back" onClick={goBack}> &larr; Go Back</button>
            <form className="contact" onSubmit={login}>
                <h3>Welcome Back</h3>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange= {(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange= {(e) => setPassword(e.target.value)} />

                <input type="submit" value="login" />


            </form>
        </React.Fragment>
    )

}

export default withRouter(Login);