import { useRecoilState } from "recoil"
import { Todo } from "./interfaces"
import { todoListState } from "./state/todoListState"
import { FC } from "react"

type TodoProps = {
  item: Todo
}

const replaceItemAtIndex = (list: Todo[], index: number, newValue: Todo) => {
  return [
    ...list.slice(0, index),
    newValue,
    ...list.slice(index+1)
  ]
}

const removeItemAtIndex = (list: Todo[], index: number) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ]
}

export const TodoItem: FC<TodoProps> = ( {item} ) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex( (listItem) => listItem == item )

  const toggleItemCompletion = () =>{
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    })
    setTodoList(newList)
  }

  const deleteItem = () =>{
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return(
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>削除</button>

    </div>
  )
} 