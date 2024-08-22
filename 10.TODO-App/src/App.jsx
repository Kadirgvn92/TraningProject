import { useState } from 'react'
import './App.css'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <div className='App'>
        <div className='TodoApp' style={{ width: '500px' }}>
          <TodoCreate onCreateTodo={createTodo} />
          <TodoList todos={todos} onDeleteTodo={deleteTodo} />
        </div>

      </div>
    </>
  )
}

export default App
