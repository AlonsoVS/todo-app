import { FC } from "hoist-non-react-statics/node_modules/@types/react"
import { useReducer } from "react"
import styled from "styled-components"
import { Root, TaskMainContainerStyled, Title } from "../../styles/MainStyles"
import TaskList from "../tasks/TaskList"
import { Task } from "../types"
import { v4 as uuidv4 } from "uuid";


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
      return { ...state, todoTasks: state.todoTasks.filter(task => task.id != updateData.tasks[0].id) };
    case 'in progress':
      if (updateData.action === 'add') {
        return {  ...state, inProgressTasks: state.inProgressTasks.concat(updateData.tasks) };
      }
      return {  ...state, inProgressTasks: state.inProgressTasks.filter(task => task.id != updateData.tasks[0].id) };
    case 'completed':
      if (updateData.action === 'add') {
        return { ...state, completedTasks: state.completedTasks.concat(updateData.tasks) };
      }
      return { ...state, completedTasks: state.completedTasks.filter(task => task.id != updateData.tasks[0].id) };
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

  const deleteTask = (task:Task) => {
    const deleteData:UpdateAction = {
      tasks: [task],
      status: task.status,
      action: 'delete'
    }
    dispatch(deleteData);
  }

  return (
    <MainRoot>
      <MainTitle>#ToDo</MainTitle>
      <TaskMainContainer>
      <TaskList 
        title={'to do'} 
        addTaskHandler={addTask}
        deleteTaskHandler={deleteTask}
        tasks={state.todoTasks} />
      <TaskList 
        title={'in progress'} 
        addTaskHandler={addTask}
        deleteTaskHandler={deleteTask}
        tasks={state.inProgressTasks} />
      <TaskList 
        title={'completed'} 
        addTaskHandler={addTask}
        deleteTaskHandler={deleteTask}
        tasks={state.completedTasks} />
      </TaskMainContainer>
    </MainRoot>
  )
}

export default Main
