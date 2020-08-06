import React, {Component} from 'react';
import s from "./AddTask.css"

export default class AddTask extends Component{
    render(){
      return(
        <div className="addTaskWrapper">
          <input type="text" placeholder = '... add new task'/>
          <button type="button" class="btn btn-primary">Add your task</button>
        </div>
      )
    }
  }