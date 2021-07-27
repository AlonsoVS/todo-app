import { FC } from "hoist-non-react-statics/node_modules/@types/react"
import styled from "styled-components"
import { TagsContainerStyled, TagStyled, TaskContainerStyled, TaskDescriptionStyled } from "../../styles/TaskStyles"
import { Task as TaskType } from "../types"

const TaskContainer = styled(TaskContainerStyled)``
const TaskDescription = styled(TaskDescriptionStyled)``
const TagsContainer = styled(TagsContainerStyled)``
const Tag = styled(TagStyled)``

const Task:FC<TaskType> = ({ description, tags }) => {
  return (
    <TaskContainer>
      <TaskDescription>
        {description}
      </TaskDescription>
      <TagsContainer>
        {tags.map((tag, index) => 
          <Tag key={index} background='blue'>
            {tag}
          </Tag>)}
      </TagsContainer>
    </TaskContainer>
  )
}

export default Task
