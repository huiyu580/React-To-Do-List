import React from 'react'
function ToDoItemText(props) {
  const { todos, todo, toggleEditState, setEditInput } = props

  return (
    <span
      style={{ fontSize: '16px' }}
      onDoubleClick={() => {
        // 切換編輯模式
        toggleEditState(todos, todo)
        // 編輯時保留原本文字
        // 使用useEffect是更佳的解法,只要內容有更動就會更新
        setEditInput(todo.text)
      }}
    >
      {todo.completed ? <del>{todo.text}</del> : todo.text}
    </span>
  )
}
export default ToDoItemText
