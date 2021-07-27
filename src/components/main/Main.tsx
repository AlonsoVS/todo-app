import { FC } from "hoist-non-react-statics/node_modules/@types/react"
import { useState } from "react"
import styled from "styled-components"
import { Root, TaskMainContainerStyled, Title } from "../../styles/MainStyles"
import TaskList from "../tasks/TaskList"
import { Task } from "../types"

const MainRoot = styled(Root)``
const MainTitle = styled(Title)``

const TaskMainContainer = styled(TaskMainContainerStyled)``

const statusCodes = ['to do', 'in progress', 'completed'];

const Main:FC = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [todoTasks, setTodoTasks] = useState<Array<Task>>([]);
  const [inProgressTasks, setInProgressTasks] = useState<Array<Task>>([]);
  const [completedTasks, setCompletedTasks] = useState<Array<Task>>([]);

  const addTask = (task:Task) => {
    switch (task.status) {
      case 'to do':
        setTodoTasks(() => todoTasks.concat(task));
        break;
      case 'in progress':
        setInProgressTasks(() => inProgressTasks.concat(task));
        break;
      case 'completed':
        setCompletedTasks(() => completedTasks.concat(task));
        break;
      default:
        alert('Error: task status is unknow!')
    }
  }

  return (
    <MainRoot>
      <MainTitle>#ToDo</MainTitle>
      <TaskMainContainer>
      <TaskList 
        title={'to do'} 
        addTaskHandler={addTask}
        tasks={todoTasks} />
      <TaskList 
        title={'in progress'} 
        addTaskHandler={addTask}
        tasks={inProgressTasks} />
      <TaskList 
        title={'completed'} 
        addTaskHandler={addTask}
        tasks={completedTasks} />
      </TaskMainContainer>
    </MainRoot>
  )
}

export default Main
