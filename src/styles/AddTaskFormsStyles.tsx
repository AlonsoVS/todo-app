import styled from "styled-components";

export const AddFormStyled = styled.form`
  height: fit-content;
  margin: 0.4em 0;
  width: 100%;
`

export const SubmitInputStyled = styled.input`
  background: blue;
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
`

export const InputStyled = styled.input`
  background: ${props => props.theme.primary};
  border: 1px solid;
  border-radius: 4px;
`

export const DoneButtonStyled = styled.button`
  align-self: center;
  background: blue;
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.secondaryText};
  cursor: pointer;
  height: fit-content;
  margin: 0.4em 0;
  width: 50%;
`