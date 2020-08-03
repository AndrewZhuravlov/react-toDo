import React from 'react';

const StatusFilter =(props)=>{
    return(
      <div className="searchFilter">
          <button type="button" className="btn btn-secondary">All</button>
          <button type="button" className="btn btn-light">Active</button>
          <button type="button" className="btn btn-light">Done</button>
        </div>
    );
  }

  export default StatusFilter;