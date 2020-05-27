import React, { useState }  from 'react';
import { ToDoCard } from '../../Components/ToDoCard/ToDoCard';
import { InputForm } from '../../Components/InputForm/InputForm';
import { ChangeEvent } from 'react';
import { FormEvent } from 'react';
import styles from './ToDoPage.module.scss';

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
    <div className={styles['todo-page']}>
      <InputForm initialValue={initialTodo} onHandleHange={handleInputChange} onFormSubmit={handleFormSubmit}/>
      <ToDoCard listOfTodos={doDos}/>
    </div>
    </>
  )
};
