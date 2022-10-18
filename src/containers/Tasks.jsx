import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from "uuid"
import Task from '../components/Task'

function Tasks() {

    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Backlog Tasks",
            color: "#CA8A04",
            todos: []
        },
        {
            id: uuidv4(),
            title: "Backlog Tasks",
            color: "#DB2777",
            todos: []
        },
        {
            id: uuidv4(),
            title: "Backlog Tasks",
            color: "#9333EA",
            todos: []
        },
        {
            id: uuidv4(),
            title: "Backlog Tasks",
            color: "#16A34A",
            todos: []
        },
        
    ])


    const saveTodoFunc = (inputValue, taskId) => {
        const stringifiedTasks = JSON.stringify(tasks);
        const copyTasks = JSON.parse(stringifiedTasks);
        const index = copyTasks.findIndex((task) => task.id === taskId);
        copyTasks[index].todos.push({id: uuidv4(), text: inputValue});
        setTasks(copyTasks);
    }

  return (
    <Wrapper>
        <TasksRow>
            {tasks.map(task => <Task key={tasks.id} task={task} saveTodo={saveTodoFunc} />)}
        </TasksRow>
        
    </Wrapper>
  )
}

export default Tasks

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e3e3e3;
`;

const TasksRow = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    padding-top: 72px;
    gap: 24px;
`;