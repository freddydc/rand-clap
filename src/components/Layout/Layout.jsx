import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoView } from '../TodoView'
import { TodoCreator } from '../TodoCreator'
import { TodoContext } from '../context'
import { useContext } from 'react'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

export const Layout = () => {
  const {
    todoList,
    filteredTodo,
    consumeTodo,
    removeTodo,
    loading,
    showModal
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading ? (
          <p>Loading todo...</p>
        ) : filteredTodo.length > 0 ? (
          filteredTodo.map(item => (
            <TodoView
              key={item.id}
              text={item.text}
              completed={item.completed}
              completeTodo={() => consumeTodo(item.id)}
              deleteTodo={() => removeTodo(item.id)}
            />
          ))
        ) : (
          todoList.map(item => (
            <TodoView
              key={item.id}
              text={item.text}
              completed={item.completed}
              completeTodo={() => consumeTodo(item.id)}
              deleteTodo={() => removeTodo(item.id)}
            />
          ))
        )}
      </TodoList>
      {!!showModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoCreator />
    </>
  )
}
