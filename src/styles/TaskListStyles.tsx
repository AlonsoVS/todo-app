import styled from "styled-components"

export const TaskListTitleStyled = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: large;
  font-weight: bold;
  height: fit-content;
  padding: 0  0 1rem 0;
  text-transform: capitalize;
  width: 100%
`

const TaskListStyled = styled.div`
  background: ${props => props.theme.primary};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 100%;
  padding: 1rem;
  overflow: auto;
  width: 100%;
`

export const TasksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  width: 100%;
`

export const AddTaskButtonStyled = styled.button`
  background: blue;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
  height: fit-content;
  font-size: medium;
  margin: 2em 0 0;
  padding: 0.5em;
  width: 100%;
`

export default TaskListStyled