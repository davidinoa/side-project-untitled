import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// data
const data = require('./data/houseMembersRI.js');

// App components
import Home from './components/Home.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reps: this.props.reps
    };
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Route 
            exact path="/" 
            render={ () => <Home reps={this.state.reps} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App reps={data}/>, document.getElementById('app'));