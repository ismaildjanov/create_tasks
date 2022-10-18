import React, { useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as PlusIcon} from "../assets/plus.svg"
import Form from './Form'

function Task({task, saveTodo}) {

   const [showForm, setShowForm] = useState(false)

   const onDragEnterFunc = (event) => {
    if(event.target.id !== "dropTarget") return;
    event.target.style.border = "2px solid red"
   }
   
   const onDragLeaveFunc = (event) => {
    event.target.style.border = "none"
   }

   const onDragStartFunc = (event, id) => {
    event.dataTransfer.setData("drag-target", id)
   }

   const onDropFunc = (event) => {
    const dragElementId = event.dataTransfer.getData("drag-target");
    event.target.children[1].appendChild(document.getElementById(dragElementId));
    event.target.style.border = "none"
   }

   const onDragOverFunc = (event) => {
    event.preventDefault();
   }



   return (
    <Wrapper id='dropTarget' onDragEnter={onDragEnterFunc} onDragLeave={onDragLeaveFunc} onDrop={onDropFunc} onDragOver={onDragOverFunc}>
    
        <Title data-taskLength={task.todos.length} color={task.color}>{task.title}</Title>
        <Todos id={`task-${task.id}`}>
            {task.todos?.map(todo => {
                return (
                    <Todo id={`todo-${todo.id}`} onDragStart={(event) => onDragStartFunc(event, `todo-${todo.id}`)} draggable="true" key={todo.id}>
                        <p>{todo.text}</p>
                    </Todo>
                )
            })}
        </Todos>

        {showForm ? <Form 
                        cancelForm={()=> setShowForm(false)} 
                        saveForm={(inputValue) => {
                            saveTodo(inputValue, task.id)
                            setShowForm(false)
                        }}
                        /> : (
            <PlusIconBox onClick={() => setShowForm(true)}>
                <PlusIcon />
            </PlusIconBox>
        )}
                    
    </Wrapper>
  )
}

export default Task

const Wrapper = styled.div`
    width: 100%;
    max-width: 264px;
`;

const Title = styled.h4`
    text-align: center;
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #1F2633;

    &::after{
        content: attr(data-taskLength);
        margin-left: 12px;
        color: ${props => props.color};
        background-color: ${props => props.color + "33"};
        width: 24px;
        height: 24px;
        padding: 4px 8px;
        border-radius: 50%;
    }
`;

const Todos = styled.div``;

const Todo = styled.div`
    background: #fff;
    box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
    border-radius: 8px;
    
    margin-bottom: 16px;
    

    p{
        font-weight: 600;
        font-size: 12px;
        line-height: 20px;
        color: #1f2633;
        padding: 20px 20px 40px 20px;
    }
`;

const PlusIconBox = styled.div`
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #F2F4F7;
    box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
`;