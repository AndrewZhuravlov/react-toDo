import React, { Component } from 'react';
import style from './search.css';
import StatusFilter from '../statusFilter/StatusFilter';

export default class Search extends Component {

  render(){

    const {done, todo} =this.props;
    return (
      <div className="searchWrapper">
        <div>
          <input placeholder='... type to search' type="text" />
        </div>
        <StatusFilter/>
        <div className="counter">
          <span>to do: { todo }</span>
          <span>done: { done }</span>
          
  
        </div>
      </div>
    );
  }
  }
  


 