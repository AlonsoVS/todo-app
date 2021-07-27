import { FC, useReducer, useState } from 'react'
import { Task } from '../types';
import NewTagForm from './NewTagForm';
import AddDescriptionForm from './AddkDescriptionForm';
import { DoneButtonStyled } from '../../styles/AddTaskFormsStyles';

const init = (task:Task) => {
  return { ...task };
}

const reducer = (prevTask:Task, newTask:Task) => {
  return { ...newTask };
}

type Props = {
  taskStatus:string
  handlerDone:Function
}

const AddTaskForm:FC<Props> = ({ taskStatus, handlerDone }) => {
  const initialTask:Task = {
    description: '',
    tags: [],
    status: taskStatus
  };

  const [newTask, setNewTask] = useReducer(reducer, initialTask, init);
  const [showingAddTag, showAddTag] = useState<boolean>(false);
  const [showingAddDescription, showAddDescription] = useState<boolean>(true);

  const handleTaskDone = () => {
    handlerDone(newTask);
  }

  const handleAddDescription = (description:string) => {
    const taskToUpdate:Task = {
      ...newTask,
      description: description
    }
    showAddDescription(() => false);
    setNewTask(taskToUpdate);
  }

  const handleAddTag = (tag:string) => {
    const taskToUpdate:Task = {
      ...newTask,
      tags: newTask.tags.concat(tag)
    }
    setNewTask(taskToUpdate);
    showAddTag(() => false);
  }  

  return (
    <>
      {showingAddDescription && <AddDescriptionForm handleDone={handleAddDescription} />
      || <DoneButtonStyled onClick={handleTaskDone} >Save</DoneButtonStyled>}
      {showingAddTag 
        && <NewTagForm onTagDone={handleAddTag} />
        || <DoneButtonStyled onClick={() => showAddTag(() => true)}>Add tag</DoneButtonStyled>}
    </>
  )
}

export default AddTaskForm
