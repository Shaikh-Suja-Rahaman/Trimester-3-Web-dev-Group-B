import React from 'react'
// import Navbar from './components/Navbar'
import Header from './components/Header'
import InputField from './components/InputField'
import { useState, useEffect } from 'react'
import List from './components/List';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || []; //there's a chance that the task is null which will cause error
    setTodos(storedTasks); 
  }, [])

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Remove the task at the given index
    setTodos(updatedTodos); // Update the state
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save the updated array to localStorage
  };

  const addTodos = (newTodo) => {
    setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save immediately after updating state
        return updatedTodos;
    });
};


  return (
    <>    
    {/* // <Navbar></Navbar> */}
    <Header/> 
    <InputField addTodo={addTodos} />
    <List todos= {todos} removeTodo = {removeTodo}/>
    </>

  )
}

export default App