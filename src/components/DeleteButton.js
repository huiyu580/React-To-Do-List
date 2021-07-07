import React from 'react'
import { TiDelete } from 'react-icons/ti'

function DeleteButton(props) {
  const { todos, todo, setTodos } = props
  return (
    <a
      onClick={() => {
        let newTodos = todos.filter((v, i) => {
          return todo.id !== v.id
        })
        setTodos(newTodos)
      }}
      href="#/"
    >
      <TiDelete size="30px" />
    </a>
  )
}

export default DeleteButton
