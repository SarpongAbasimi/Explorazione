import React, { useState }  from 'react';
import { ToDoCard } from '../../Components/ToDoCard/ToDoCard';
import { InputForm } from '../../Components/InputForm/InputForm';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';

export const TodoPage: React.FunctionComponent = () => {
  const [initialTodo, setIntitialTodo] = useState<string>('')
  const [doDos, setDotos] = useState<string[]>([])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIntitialTodo(e.currentTarget.value)
  }

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault()
    setDotos(doDos.concat(initialTodo))
    setIntitialTodo('')
  };

  return(
    <>
    <InputForm initialValue={initialTodo} onHandleHange={handleInputChange} onFormSubmit={handleFormSubmit}/>
    <ToDoCard listOfTodos={doDos}/>
    </>
  )
};
