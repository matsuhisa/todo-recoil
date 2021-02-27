import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListState } from "./state/todoListState"

let id = 0
const getId = () => {
  return id++
}

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    // setTodoList((oldTodoList) => [
    //   ...oldTodoList,
    //   {
    //     id: getId(),
    //     text: inputValue,
    //     isComplete: false,
    //   }
    // ])

    setTodoList( oldTodoList => {
      return [...oldTodoList, { id: getId(), text: inputValue, isComplete: false }]
    })
    setInputValue('')
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}