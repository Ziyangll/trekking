import React from 'react';
import Group_3 from '../Group 3.svg';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        results: {}
    }

    handleChange1 = event => {
        this.setState({ email: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/v1/Login', {
            email: this.state.email,
            password: this.state.password
         })
            .then(res => {
                this.results = res.data
                if (this.results.success == true) {
                alert((this.state.email) + ' you are logged in!');
                console.log(this.state.email);
                console.log(this.results);
                this.props.history.push('/Packing');
                } else {
                    alert(this.results.message);
                }
            })
    }
    render() {
        return (
            <div className="contact" >
                <h1>Trekker Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login User</h3>

                    <h3>Login Email</h3>
                    <input type="text" email="email" onChange={this.handleChange1} />
                    <h3>Login Password</h3>
                    <input type="text" password="password" onChange={this.handleChange2}/>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
                <button className="submit-btn" type="submit" >Sign Up?</button>
                <img src={Group_3} alt="" />
            </div>
        )
    }
}