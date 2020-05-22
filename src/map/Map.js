import React, { Component } from 'react';

require('dotenv').config()

const REACT_APP_API_KEY = process.env.REACT_APP_MAP_API_KEY;
console.log(REACT_APP_API_KEY);


class SimpleMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        
      </div>
    );
  }
}

export default SimpleMap;