import React from 'react';
import ToDOListItem from './Item/ToDoListItem';
import style from './ToDoList.css';


const ToDoList = ({ todos, onItemDelete, onToggleDone, onToggleImportant }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <ToDOListItem {...itemProps} 
        onItemDelete={ () => onItemDelete(id)}
        onToggleDone = {()=>{onToggleDone(id)}}
        onToggleImportant = {()=>{onToggleImportant(id)}}
        />
      </li>
    )
  })

  return (
    <ul className="list-group list-unstyled list-ul">
      {elements}
    </ul>
  );
}

export default ToDoList;