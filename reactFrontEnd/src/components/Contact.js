import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contactEmail, setContactEmail] = useState(""); 

    const sendEmail = async(e) =>{
        e.preventDefault();

        let email = {
            title,
            content,
            contactEmail
        }

        console.log("sending email", email);
    }


    return(
        <React.Fragment>
           <button className="back" onClick={goBack}> &larr; Go Back</button>

            <form className="contact" onSubmit={sendEmail}>
                <h2>Sign up today and get ready for a once-in-a-lifetime adventure!</h2>
                
                <label htmlFor="title">User name: </label>
                <input type="text" name="username" onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={(e) => setContactEmail(e.target.value)} />

                <label htmlFor="title">Password: </label>
                <input type="text" name="password" onChange={(e) => setTitle(e.target.value)} />
                
                <input type="submit" value="Sign up" />
            </form>

        </React.Fragment>
    )

}


export default Contact;