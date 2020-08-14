import React, { Component } from 'react';
import style from './search.css';
import StatusFilter from '../statusFilter/StatusFilter';

export default class Search extends Component {

  render() {

    const onSearchText = (ev) => {

      const text =  ev.target.value
      this.props.onSearchStateChanger(text);
    }
    const { done, todo, onFilterChanger, filter } = this.props;

    return (
      <div className="searchWrapper">
        <div>
          <input onChange={onSearchText} 
          placeholder='... type to search' 
          type="search"
           />
        </div>
        <StatusFilter onFilterChanger={onFilterChanger}
        filter ={filter} />
        <div className="counter">
          <span>to do: {todo}</span>
          <span>done: {done}</span>


        </div>
      </div>
    );
  }
}



