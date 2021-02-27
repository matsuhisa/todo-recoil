import { atom } from 'recoil'
import { Todo } from '../interfaces'

const initialTodos: Todo[] = []

export const todoListState = atom({
  key: 'todoListState',
  default: initialTodos,
})