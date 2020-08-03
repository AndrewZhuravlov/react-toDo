import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDoList from './components/ToDoList/ToDoList';
import AppHeader from './components/AppHeader';
import Search from './components/Search';
import style from './style.css'
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


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
