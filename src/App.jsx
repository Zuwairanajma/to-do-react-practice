// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import { useEffect, useState } from 'react'
// import './index.css'
// import { NewTodoForm } from './NewTodoForm'
// import { TodoList } from './TodoList'
// export default function App() {
//   const [todos, setTodos] = useState(() => {
//     const localValue = localStorage.getItem("ITEMS")
//     if(localValue == null) return []
//     return JSON.parse(localValue)
//   })
//   useEffect (() => {
//     localStorage.setItem("ITEM",JSON.stringify(todos))
//   }, [todos])
//   function addTodo(title) {
//     setTodos((currentTodos) => {
//       return [
//         ...currentTodos, 
//         { id: crypto.randomUUID(), title, completed: false },
//       ]
//     })
//   }
//   function toggleTodo(id, completed) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed }
//         }

//         return todo
//       })
//     })
//   }
//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id !== id)
//     })
//   }
//   console.log(todos)
//   return (
//   <>
//   <NewTodoForm  onSubmit={addTodo} />
//   <h1 className='header'>Todo List</h1>
//   < TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
//   </>
//   )
// }

import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./index.css"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}