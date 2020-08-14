import React, { Component } from 'react';
import st from './StatusFilter.css';

export default class StatusFilter extends Component {

  render() {
    const buttons = [

      { label: 'All', active: false },
      { label: 'Active', active: false },
      { label: 'Done', active: false },

    ]
    const {onFilterChanger} =this.props;
    const buttonComponent = buttons.map(item => {
    const activeButton = this.props.filter === item.label;

      return (
        <button type="button"
          className={`btn btn-light butWidth ${activeButton ? 'active' : ''}`}
          onClick = { ()=> onFilterChanger(item.label)}>
          {item.label}
           </button>
      )
    })

    return (
      <div className="searchFilter">

        {buttonComponent}

      </div>
    );
  }
}


