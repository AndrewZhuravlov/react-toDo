import React from 'react';
import style from './app.css'
import AppHeader from '../AppHeader/AppHeader';
import Search from '../Search/Search';
import ToDoList from '../ToDoList/ToDoList';
const App = () => {

  const todoData = [
    { label: " Drink Shnaps", important: true, id: 1 },
    { label: " Make App", important: false, id: 2 },
    { label: " I did It", important: false, id: 3 },
  ]
  return (
    <div className="container">
      <div className="todoWrapper">
        <AppHeader />
        <Search />
        <ToDoList todos={todoData} />
      </div>
    </div>
  )
}
export default App;