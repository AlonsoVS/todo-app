import { FC } from "hoist-non-react-statics/node_modules/@types/react"
import { useState, useReducer } from "react"
import styled from "styled-components"
import { Root, TaskMainContainerStyled, Title } from "../../styles/MainStyles"
import TaskList from "../tasks/TaskList"
import { Task } from "../types"

const MainRoot = styled(Root)``
const MainTitle = styled(Title)``

const TaskMainContainer = styled(TaskMainContainerStyled)``

type State = {
  todoTasks: Array<Task>
  inProgressTasks: Array<Task>
  completedTasks: Array<Task>
}

const initialState:State = {
  todoTasks: [],
  inProgressTasks: [],
  completedTasks: []
}

type UpdateAction = {
  tasks: Array<Task>
  status: string
  action: string
}

const init = (initialState:State) => {
  return { ...initialState };
}

const reducer = ( state: State, updateData: UpdateAction ) => {
  switch (updateData.status) {
    case 'to do':
      if (updateData.action === 'add') {
        return { ...state, todoTasks: state.todoTasks.concat(updateData.tasks) };
      }
      return { ...state, todoTasks: updateData.tasks };
    case 'in progress':
      if (updateData.action === 'add') {
        return {  ...state, inProgressTasks: state.inProgressTasks.concat(updateData.tasks) };
      }
      return {  ...state, inProgressTasks: updateData.tasks };
    case 'completed':
      if (updateData.action === 'add') {
        return { ...state, completedTasks: state.completedTasks.concat(updateData.tasks) };
      }
      return { ...state, completedTasks: updateData.tasks };
    default:
      throw new Error(`Can't update state: status code unknow!`);
  }
}

const Main:FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState, init);

  const addTask = (task:Task) => {
    const updateData:UpdateAction = {
      tasks: [task],
      status: task.status,
      action: 'add'
    };
    dispatch(updateData);
  }

  return (
    <MainRoot>
      <MainTitle>#ToDo</MainTitle>
      <TaskMainContainer>
      <TaskList 
        title={'to do'} 
        addTaskHandler={addTask}
        tasks={state.todoTasks} />
      <TaskList 
        title={'in progress'} 
        addTaskHandler={addTask}
        tasks={state.inProgressTasks} />
      <TaskList 
        title={'completed'} 
        addTaskHandler={addTask}
        tasks={state.completedTasks} />
      </TaskMainContainer>
    </MainRoot>
  )
}

export default Main
