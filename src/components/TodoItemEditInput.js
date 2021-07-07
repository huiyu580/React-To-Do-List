import React from 'react'
function TodoItemEditInput(props) {
  const { editInput, setEditInput, handleUpdate, todos, todo } = props
  return (
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
  )
}
export default TodoItemEditInput
