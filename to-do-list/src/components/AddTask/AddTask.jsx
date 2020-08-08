import React, { Component } from 'react';
import s from "./AddTask.css"

export default class AddTask extends Component {

  state = {
    label : '',
  }

  onLabelChange = (e)=>{

    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e)=>{
    if(this.state.label ===""){
      e.preventDefault();
      return false;
    } 

    e.preventDefault();
    this.props.onTaskAdd(this.state.label);
  }
  render() {

    
    return (
      <div >
        <form
          action="submit"
          className="addTaskWrapper"
          onSubmit={this.onSubmit}
        >
          <input type="text"
            placeholder='... add new task'
            onChange={this.onLabelChange} />
          <button type="submit" className="btn btn-primary">Add your task</button>
        </form>
      </div>
    )
  }
}