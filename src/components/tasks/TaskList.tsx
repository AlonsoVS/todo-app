import { FC, useState } from 'react'
import styled from 'styled-components'
import TaskListStyled, { AddTaskButtonStyled, TaskListTitleStyled, TasksContainerStyled } from '../../styles/TaskListStyles'
import { Task as TaskType } from '../types'
import AddTaskForm from './AddTaskForm'
import Task from './Task'

const TaskListContainer = styled(TaskListStyled)``
const TaskListTitle = styled(TaskListTitleStyled)``
const TasksContainer = styled(TasksContainerStyled)``
const AddTaskButton = styled(AddTaskButtonStyled)``

type Props = {
  addTaskHandler:Function
  tasks:Array<TaskType>
  title:string
}

const TaskList:FC<Props> = ({ title, addTaskHandler, tasks }) => {

  const [showingAdd, showAdd] = useState<boolean>(false);

  const handleButtonClick = () => {
    showAdd(() => true);
  }

  const handlerAdd = (newTask:TaskType) => {
    addTaskHandler(newTask);
    showAdd(() => false);
  }

  return (
    <TaskListContainer>
      <TaskListTitle>{title}</TaskListTitle>
      <TasksContainer>
        {tasks.map((task, index) => 
          <Task key={index} { ...task }/>
        )}
      </TasksContainer>
      {(showingAdd 
        && 
        <AddTaskForm taskStatus={title}  handlerDone={handlerAdd} />)
        || 
        <AddTaskButton onClick={handleButtonClick} >
          Add task
        </AddTaskButton>}
    </TaskListContainer>
  )
}

export default TaskList
