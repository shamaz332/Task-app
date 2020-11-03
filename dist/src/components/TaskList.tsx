// Import dependencies
import * as React from 'react'

// Import TodoItem
import {TaskItem} from '@bit/shamaz332.task.task-items'

// Import interfaces
import { TodoListInterface } from '../typing/task'

// TodoList component
export const TaskList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TaskItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}


