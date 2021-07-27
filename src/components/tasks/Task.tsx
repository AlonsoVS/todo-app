import { FC } from "hoist-non-react-statics/node_modules/@types/react"
import styled from "styled-components"
import { DeleteButtonStyled, TagsContainerStyled, TagStyled, TaskContainerStyled, TaskDescriptionStyled } from "../../styles/TaskStyles"
import { Task as TaskType } from "../types"

const TaskContainer = styled(TaskContainerStyled)``
const TaskDescription = styled(TaskDescriptionStyled)``
const TagsContainer = styled(TagsContainerStyled)``
const Tag = styled(TagStyled)``
const DeleteButton = styled(DeleteButtonStyled)``

type Props = {
  task:TaskType
  handlerDelete:Function
}

const Task:FC<Props> = ({ handlerDelete, task }) => {
  const onDelete = () => {
    handlerDelete(task);
  }
  return (
    <TaskContainer>
      <DeleteButton onClick={onDelete}>x</DeleteButton>
      <TaskDescription>
        {task.description}
      </TaskDescription>
      <TagsContainer>
        {task.tags.map((tag, index) => 
          <Tag key={index} background='blue'>
            {tag}
          </Tag>)}
      </TagsContainer>
    </TaskContainer>
  )
}

export default Task
