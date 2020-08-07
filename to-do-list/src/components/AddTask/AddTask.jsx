import React, { Component } from 'react';
import s from "./AddTask.css"

export default class AddTask extends Component {
  
  render() {

    const { onTaskAdd } = this.props;

    return (
      <div >
        <form action="getTask" className="addTaskWrapper">
          <input type="text" placeholder='... add new task' />
          <button onClick = {()=> onTaskAdd('hi')} type="button" className="btn btn-primary">Add your task</button>
        </form>
      </div>
    )
  }
}