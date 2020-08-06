import React, { Component } from 'react';
import style from './app.css'
import AppHeader from '../AppHeader/AppHeader';
import Search from '../Search/Search';
import ToDoList from '../ToDoList/ToDoList';
import AddTask from '../AddTask/AddTask';

export default class App extends Component {

  state = {
    todoData: [
      { label: " Drink Shnaps", important: true, id: 1 },
      { label: " Make App", important: false, id: 2 },
      { label: " I did It", important: false, id: 3 },
      { label: "Use the Tyzik, do the palka ", important: false, id: 4 },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      let idx =  todoData.findIndex((el)=> el.id === id);
      
      const newArray = [
          ...todoData.slice(0, idx ), 
          ...todoData.slice( idx + 1 ), 
        ]
      return {
        todoData : newArray,
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="todoWrapper">
          <AppHeader />
          <Search />
          <ToDoList onItemDelete={this.deleteItem} todos={this.state.todoData} />
          < AddTask />
        </div>
      </div>
    )
  }
}



