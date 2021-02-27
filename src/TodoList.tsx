import { useRecoilValue } from "recoil"
import { todoListState } from "./state/todoListState"
import { TodoItemCreator } from "./TodoItemCreator"
import { TodoItem } from './TodoItem'
import { filteredTodoListState } from './state/filteredTodoListState'
import { TodoListFilters } from './TodoListFilters'
import { TodoListStats } from './TodoListStats'

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <>
      <h1>ToDo List</h1>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map( (todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
      ))}
    </>
  )
}