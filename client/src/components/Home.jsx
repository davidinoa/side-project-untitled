import React, { Component } from 'react';
import Search from './Search.jsx';

class Home extends Component {   
  render() {
    return (
      <div>
        <h1>Who is my rep?</h1>
        <Search />
      </div>
    );
  }
}

export default Home;