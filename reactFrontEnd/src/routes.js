import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import Contact from './components/Contact';
import GoogleMapComplete from "./components/GoogleMap";
import Thanks from './components/Thanks';



const Routes = () => (

  <Switch>

    <Route exact path="/" component={Main} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/map" component={GoogleMapComplete} />
    <Route exact path="/thanks/:name" component={Thanks} />
    <Route exact path = "/packing" component = {Packer}/>
  </Switch>
);

export default Routes;
// <Route exact path="/map" component={GoogleMap} /> waiting to be fixed