import { useRecoilState } from "recoil"
import { Todo } from "./interfaces"
import { todoListState } from "./state/todoListState"
import { FC } from "react"

type TodoProps = {
  item: Todo
}

export const TodoItem: FC<TodoProps> = ( {item} ) => {
  // const [todoList, setTodoList] = useRecoilState(todoListState)
  // const index = todoList.findIndex( (listItem) => listItem == item )

  return(
    <div>
      {item.text}
    </div>
  )
} 