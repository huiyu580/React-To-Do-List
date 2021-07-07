import React from 'react'
import TodoItemEditInput from './TodoItemEditInput'
import ToDoItemText from './TodoItemText'
import DeleteButton from './DeleteButton'
function ToDoItems(props) {
  const {
    todo,
    todos,
    handleCheck,
    setEditInput,
    handleUpdate,
    toggleEditState,
    editInput,
    setTodos,
  } = props
  return (
    <div
      className="w-100 d-flex py-3 align-items-center justify-content-between"
      key={todo.id}
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
          <TodoItemEditInput
            editInput={editInput}
            setEditInput={setEditInput}
            handleUpdate={handleUpdate}
            todos={todos}
            todo={todo}
          />
        ) : (
          <ToDoItemText
            todos={todos}
            todo={todo}
            toggleEditState={toggleEditState}
            setEditInput={setEditInput}
          />
        )}
      </div>
      <DeleteButton todo={todo} todos={todos} setTodos={setTodos} />
    </div>
  )
}
export default ToDoItems
