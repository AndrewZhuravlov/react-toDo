import React from 'react';
import style from './search.css'
const Search = () => {
  return (
    <div className="searchWrapper">
      <div>
        <input placeholder='search' type="text" />
      </div>
      <div className="searchFilter">
        <button type="button" className="btn btn-secondary">Active</button>
        <button type="button" className="btn btn-light">Done</button>
        <button type="button" className="btn btn-light">Deleted</button>
      </div>
    </div>
  );
}
export default Search;