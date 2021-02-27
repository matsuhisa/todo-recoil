import { useRecoilValue } from "recoil"
import { todoListState } from "./state/todoListState"
import { TodoItemCreator } from "./TodoItemCreator"
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  return (
    <>
      <h1>ToDo リスト</h1>
      <TodoItemCreator />
      {todoList.map( (todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}></TodoItem>
      ))}
    </>
  )
}