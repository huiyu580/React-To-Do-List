import React, { useState } from 'react'
function AddNewToDo(props) {
  const { todoInput, setTodoInput, setTodos, todos } = props
  return (
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
  )
}
export default AddNewToDo
