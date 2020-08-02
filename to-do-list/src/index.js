import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDoList from './components/ToDoList';
import AppHeader from './components/AppHeader';
import Search from './components/Search';

const App = ()=>{ 
return (
  <div>
    <AppHeader/>
    <Search />
    <ToDoList/>
  </div>
  )
}
    
  
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
