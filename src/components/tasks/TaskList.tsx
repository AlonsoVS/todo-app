import { FC, useEffect } from 'react'
import styled from 'styled-components'
import TaskListStyled, { AddTaskButtonStyled, TaskListTitleStyled, TasksContainerStyled } from '../../styles/TaskListStyles'
import { Task as TaskType } from '../types'
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

  const handleAdd = () => {
    const newTask:TaskType = {
      description: 'New Task',
      tag: 'any',
      status: title
    }
    addTaskHandler(newTask);
  }

  return (
    <TaskListContainer>
      <TaskListTitle>{title}</TaskListTitle>
      <TasksContainer>
        {tasks.map((task, index) => 
          <Task key={index} { ...task }/>
        )}
      </TasksContainer>
      <AddTaskButton onClick={handleAdd}>
        Add task
      </AddTaskButton>
    </TaskListContainer>
  )
}

export default TaskList
