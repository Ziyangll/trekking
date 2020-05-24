import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import Packer from './components/packing'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thanks/:name" component={Thanks} />
        <Route exact path = "/packer" component = {Packer}/>
    </Switch>
);

export default Routes;