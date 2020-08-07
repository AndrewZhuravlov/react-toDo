import React, { Component } from 'react';
import style from './app.css'
import AppHeader from '../AppHeader/AppHeader';
import Search from '../Search/Search';
import ToDoList from '../ToDoList/ToDoList';
import AddTask from '../AddTask/AddTask';

export default class App extends Component {

  idCounter = 50;

  state = {
    todoData: [
      this.toDoItemCreator('Drink Shnaps'),
      this.toDoItemCreator('Make App'),
      this.toDoItemCreator('I did It'),
      this.toDoItemCreator('Use the Tyzik, do the palka'),
    ],
  };

  deleteItem = (id) => {

    this.setState(({ todoData }) => {

      let idx = this.idxFinder(id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ]
      return {
        todoData: newArray,
      }
    })
  }

  idxFinder(id){

    let idx =this.state.todoData.findIndex((el) => el.id === id);
    return idx;

  }

  taskAdd = (text) => {

    const newItemObj = {
      label: text,
      important: false,
      id: this.idCounter++,
    }

    this.setState(({ todoData }) => {

      const newArr = todoData.concat(newItemObj);

      return {
        todoData: newArr,
      }
    })
  }

  toDoItemCreator (label)  {

    return {
      label: label,
      important: false,
      done: false, 
      id: this.idCounter++,
    }
  }

  onToggleImportant = (id) =>{

    this.setState(( { todoData }) => {


      return {
        todoData: this.toggleProperty(todoData, id , 'important'),
      }
    })
    
  }

  toggleProperty(arr, id , property){

    let idx = this.idxFinder(id)
      const oldObj = arr[idx];
      const newObj = {...oldObj, [property]: !oldObj[property]};
      const newArr = [
        ...arr.slice(0, idx),
        newObj,
        ...arr.slice(idx+1),
      ]

      return newArr;
  }

  onToggleDone = (id) =>{

    this.setState(( { todoData }) => {

      return {
        todoData: this.toggleProperty(todoData, id , 'done'),
      }
    })
  }

  render() {
    
    const { todoData } = this.state;
    const doneItems = todoData.filter(el=> el.done);
    const countedDoneItems = doneItems.length;
    const stillTodoItems = todoData.length - countedDoneItems;

    return (
      <div className="container">
        <div className="todoWrapper"> 
          <AppHeader />
          <Search todo = {stillTodoItems} done = {countedDoneItems} />
          <ToDoList
            onItemDelete={this.deleteItem}
            todos={this.state.todoData}
            onToggleDone = {this.onToggleDone}
            onToggleImportant = {this.onToggleImportant}
             />
          < AddTask onTaskAdd={this.taskAdd} />
        </div>
      </div>
    )
  }
}



