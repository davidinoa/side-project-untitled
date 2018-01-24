import React from 'react';
import SearchResult from './SearchResult.jsx';

class Search extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="enter zipcode"/>
        <button>Find</button>
        <SearchResult />
      </div>
    );
  }
}

export default Search;