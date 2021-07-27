import styled from "styled-components";

export const Root = styled.div`
  align-items: center;
  align-content: center;
  background: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
  width: 100%
`

export const Title = styled.span`
  color: ${props => props.theme.primaryText};
  font-size: xx-large;
  font-weight: bold;
  padding: 2rem 0;
  height: fit-content;
  width: 100%
`



export const TaskMainContainerStyled = styled.div`
  align-items: center;
  background: ${props => props.theme.primary};
  display: grid;
  gap: 0.5rem 1rem;
  grid-auto-columns: 22rem;
  grid-template-columns: repeat(auto-fit,minmax(min(100%,30rem),0fr));
  grid-template-rows: repeat(auto-fit,minmax(min(10%,30vh),1fr));
  height: fit-content;
  justify-items: center;
  justify-content: center;
  max-height: 88%;
  width: 95%;
`