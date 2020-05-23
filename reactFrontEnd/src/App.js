import React, { useEffect, useState} from 'react';
import nature from './nature.jpg';
import trek from './trek.png';
//import './App.css';
import Routes from "./routes";
import { Link, useHistory } from 'react-router-dom';
import Nav from "./components/Nav";
import firebase from "./firebase/config";

function App(){
  const history = useHistory();
  const [path, setPath] = useState("");
  const [userState, setuserState] = useState(null);

  
  const logout = () =>{
    //logout the user
    firebase.logout();
    setuserState(null);
    
}

  window.addEventListener("load", () => {

    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.name);
    });
  }

  useEffect(() => {
    checkPath();
  }, []);

  const showContact = path;
  let buttons;
  if(userState != null){
    buttons = (
        <React.Fragment>
         <li><button className="logout" onClick={logout}>LogOut</button></li>
        </React.Fragment>
    )
}else{
    buttons = (    
        <React.Fragment>
            <li><Link to="/signin">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>              
        </React.Fragment>
        )
}
  //if(showContact !== "/contact"){
    //buttons = (<li><Link to = '/contact'>Contact Me</Link></li>)

  //}

  return (
    <div className="App">
      <div className="container">
        
        <nav>
          <ul>
            <li><Link to ="/">Trekker</Link></li>
          </ul>
          <ul>
            {buttons}
          </ul>
        </nav>
        <Routes />
      </div>
    </div>
  );
}

export default App;
