import React from 'react';
import { ToDoCard } from '../../Components/ToDoCard/ToDoCard';
import { InputForm } from '../../Components/InputForm/InputForm';


export const TodoPage: React.FunctionComponent = () => {
  return(
    <>
    <InputForm />
    <ToDoCard/>
    </>
  )
};