import React, { Component } from 'react';
import st from './StatusFilter.css';

export default class StatusFilter extends Component {
  render() {
    return (
      <div className="searchFilter">
        <button type="button" className="btn btn-secondary butWidth">All</button>
        <button type="button" className="btn btn-light butWidth">Active</button>
        <button type="button" className="btn btn-light butWidth">Done</button>
      </div>
    );
  }
}


