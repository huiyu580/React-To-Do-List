import React, { useState } from 'react'

import AddNewToDo from './addNewToDo'
import ToDoItems from './ToDoItems'
function TodoApp() {
  //todoItem={id: number, text:string, completet:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, edited: false },
    { id: 2, text: '學react', completed: false, edited: false },
  ])

  const [todoInput, setTodoInput] = useState('')
  const [editInput, setEditInput] = useState('')

  // check功能
  const handleCheck = (todo) => {
    const newTodos = [...todos]
    const foundIndex = newTodos.findIndex((v, i) => {
      return todo.id === v.id
    })
    if (foundIndex > -1) {
      newTodos[foundIndex].completed = !newTodos[foundIndex].completed
      setTodos(newTodos)
    }
  }

  // 雙擊後更新todo內容
  const handleUpdate = (todos, todo) => {
    // 複製陣列
    let newTodos = [...todos]
    // 找到要更新的項目的index
    let foundIndex = newTodos.findIndex((v, i) => {
      return todo.id === v.id
    })
    // 更改內容文字
    newTodos[foundIndex].text = editInput
    setTodos(newTodos)
    // 送出後關閉input樣式
    newTodos[foundIndex].edited = false
  }

  // 切換編輯樣式
  const toggleEditState = (todos, todo) => {
    let newTodos = [...todos]
    // 找出todos陣列中id相同的索引值
    let foundIndex = newTodos.findIndex((v, i) => {
      return v.id === todo.id
    })
    // 將該項目啟用編輯
    newTodos[foundIndex].edited = true
    // 關閉其他項目的編輯功能，回傳新陣列
    newTodos = newTodos.map((v, i) => {
      if (i !== foundIndex) {
        v.edited = false
      }
      return v
    })

    // 更新setTodos
    setTodos(newTodos)
  }

  return (
    <div className="container p-4 d-flex flex-column align-items-center">
      <div className="card p-3" style={{ width: '30vw' }}>
        <h1 className="text-center p-3">TO DO LIST</h1>
        <AddNewToDo
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          setTodos={setTodos}
          todos={todos}
        />
        <div>
          {todos.map((todo, i) => {
            return (
              <ToDoItems
                key={todo.id}
                todo={todo}
                todos={todos}
                handleCheck={handleCheck}
                setEditInput={setEditInput}
                handleUpdate={handleUpdate}
                toggleEditState={toggleEditState}
                editInput={editInput}
                setTodos={setTodos}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
