import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import Contact from './components/Contact';
import GoogleMapComplete from "./components/GoogleMap";
import Thanks from './components/Thanks';
import Packer from './components/packing';
import Login from './components/Login';
import Register from './components/Register';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/map" component={GoogleMapComplete} />
    <Route exact path="/thanks/:name" component={Thanks} />
    <Route exact path = "/packing" component = {Packer}/>
    <Route exact path = "/Login" component = {Login}/>
    <Route exact path = "/Register" component = {Register}/>
  </Switch>
);

export default Routes;