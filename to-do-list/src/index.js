import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
const AppHeader = ()=>{
  return(
    <h1>
      my Todo List
    </h1>
  );
}

const ToDoList = ()=>{
  return(
    <ul>
      <li>Learn React</li>
      <li>Build App</li>
    </ul>
  );
}

const Search = ()=>{
  return(
    <input placeholder = 'search' type="text"/> 
  );
}

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
