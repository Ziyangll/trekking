import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import Contact from './components/Contact';
import GoogleMapComplete from "./components/GoogleMap";
import Thanks from './components/Thanks';
import Login from './components/Login';
import Signin from './components/Signin';


const Routes = () => (

  <Switch>
        <Route exact path="/map" component={GoogleMapComplete} />

        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/map" component={GoogleMap} />
        <Route exact path="/thanks/:name" component={Thanks} />
        
       
    </Switch>

);

export default Routes;
// <Route exact path="/map" component={GoogleMap} /> waiting to be fixed