import React from 'react';
import style from './search.css';
import StatusFilter from '../statusFilter/StatusFilter';

const Search = () => {
  return (
    <div className="searchWrapper">
      <div>
        <input placeholder='... type to search' type="text" />
      </div>
      <StatusFilter/>
      <div className="counter">
        <span>active: 3</span>
        <span>deleted: 3</span>
        <span>important: 3</span>

      </div>
    </div>
  );
}


export default Search;