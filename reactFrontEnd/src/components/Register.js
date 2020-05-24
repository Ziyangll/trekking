import React from 'react';
import Group_3 from '../Group 3.svg';
import axios from 'axios';
import { withRouter, useHistory } from 'react-router';


export default class Register extends React.Component {
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

        axios.post('http://localhost:8080/api/v1/Register', {
            email: this.state.email,
            password: this.state.password
         })
            .then(res => {
                this.results = res.data
                console.log(this.results.success)
                if (this.results.success == true) {
                alert((this.state.email) + ' Thank you for signing up!');
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
                <h1>Trekker Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign up today and get ready for a once-in-a-lifetime adventure!</h3>

                    <h3>Input Email</h3>
                    <input type="text" email="email" onChange={this.handleChange1} />
                    <h3>Input Password</h3>
                    <input type="text" password="password" onChange={this.handleChange2}/>
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
                <img src={Group_3} alt="" />
            </div>
        )
    }
}