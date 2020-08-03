import React from 'react';
import ToDOListItem from './Item/ToDoListItem';
import style from './ToDoList.css';


 const ToDoList = ({ todos })=>{

    const elements = todos.map((item)=>{

      const {id, ...itemProps} = item;
      
      return(
      <li key = {id}>
        <ToDOListItem {...itemProps} />
      </li>
    )})  

    return(
      <ul className="list-group list-unstyled list-ul">
        { elements }
      </ul>
    );
  }

  export default ToDoList;