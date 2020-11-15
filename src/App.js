import React, { useState, useEffect } from "react";
import './App.css';

//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(
          todos.filter(todo => todo.completed === true)
        )
        break;
      
      case 'uncompleted':
        setFilteredTodos(
          todos.filter(todo => todo.completed === false)
        )
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>Willian's Todo List</header>
      <Form
        inputText = {inputText}
        todos = {todos}
        setTodos = {setTodos}
        setInputText = { setInputText }
        setStatus = { setStatus }
      />
      <TodoList todos={ todos } setTodos={ setTodos } filteredTodos={ filteredTodos }/>
    </div>
  );
}

export default App;