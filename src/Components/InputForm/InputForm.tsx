import React,{ FormEvent } from 'react';
import { ChangeEvent } from 'react';

type InputProps ={
  initialValue: string,
  onHandleHange: (e: ChangeEvent<HTMLInputElement>) => void,
  onFormSubmit: (e: FormEvent) => void
}

export const InputForm: React.FunctionComponent<InputProps> = ({ initialValue, onHandleHange, onFormSubmit })=> {
  const inputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    onHandleHange(event)
  };

  return(
    <form onSubmit={onFormSubmit}>
      <input type='text' placeholder='Type in todo' value={initialValue} onChange={inputChange}></input>
      <input type='submit' value='Add to do'></input>
    </form>
  );
}