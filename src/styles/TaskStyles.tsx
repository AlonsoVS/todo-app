import styled from "styled-components";

export const TaskContainerStyled = styled.div`
  background: ${props => props.theme.primaryCard};
  border-radius: 12px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  height: fit-content;
  margin: 0.5rem 0;
  width: 100%
`
export const TaskDescriptionStyled = styled.div`
  font-size: medium;
  margin: 0.5em 0;
  width: 80%
`

export const TagsContainerStyled = styled.div`
  display: flex;
  height: fit-content;
  width: 100%
`

type TagProps = {
  background:string
}

export const TagStyled = styled.a<TagProps>`
  background: ${props => props.background};
  border-radius: 10px;
  font-size: small;
  margin: 0.5em;
  padding: 0.2em 0.6em;
`