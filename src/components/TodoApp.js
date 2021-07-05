import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
function TodoApp() {
  //todoItem={id: number, text:string, completet:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, edited: false },
    { id: 2, text: '學react', completed: false, edited: false },
  ])
  const [todoInput, setTodoInput] = useState('')

  const [editInput, setEditInput] = useState('')

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
    // 送出後變更樣式
    newTodos[foundIndex].edited = false
  }

  // 切換編輯樣式
  const toggleEditState = (todos, todo) => {
    let newTodos = [...todos]
    let foundIndex = newTodos.findIndex((v, i) => {
      return v.id === todo.id
    })
    newTodos[foundIndex].edited = true
    newTodos = newTodos.map((v, i) => {
      if (i !== foundIndex) {
        v.edited = false
      }
      return v
    })
    setTodos(newTodos)
  }

  return (
    <div className="container p-4 d-flex flex-column align-items-center">
      <div className="card p-3" style={{ width: '30vw' }}>
        <h1 className="text-center p-3">TO DO LIST</h1>
        <input
          className="input-group input-group-lg p-1"
          type="text"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value)
          }}
          // 抓enter事件
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              //  建立新的todo物件
              const newTodoItem = {
                id: +new Date(),
                text: e.target.value,
                completed: false,
                edited: false,
              }
              // 用展開運算子把目前輸入的加入todo陣列
              const newTodos = [newTodoItem, ...todos]
              setTodos(newTodos)
              setTodoInput('')
            }
          }}
        />
        <div>
          {todos.map((todo, i) => {
            return (
              <div
                className="w-100 d-flex py-3 align-items-center justify-content-between"
                key={i}
                onDoubleClick={() => {
                  // 切換編輯模式
                  toggleEditState(todos, todo)
                  // 編輯時保留原本文字
                  setEditInput(todo.text)
                }}
              >
                <div>
                  <input
                    className="mr-3"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                      handleCheck(todo)
                    }}
                  />
                  {todo.edited ? (
                    <input
                      style={{ fontSize: '16px' }}
                      className="input"
                      value={editInput}
                      onChange={(e) => {
                        setEditInput(e.target.value)
                      }}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleUpdate(todos, todo)
                        }
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '16px' }}>
                      {todo.completed ? <del>{todo.text}</del> : todo.text}
                    </span>
                  )}
                </div>
                {/* <span>{todo.completed ? <del>{todo.text}</del> : todo.text}</span> */}
                <a
                  onClick={() => {
                    let newTodos = todos.filter((v, i) => {
                      return todo.id !== v.id
                    })
                    setTodos(newTodos)
                  }}
                >
                  <TiDelete size="30px"/>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TodoApp
