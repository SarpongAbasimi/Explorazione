import React,{ FormEvent } from 'react';
import { ChangeEvent } from 'react';
import  { useSpring, animated } from 'react-spring';
import styles from './InputForm.module.scss';

type InputProps ={
  initialValue: string,
  onHandleHange: (e: ChangeEvent<HTMLInputElement>) => void,
  onFormSubmit: (e: FormEvent) => void
}

export const InputForm: React.FunctionComponent<InputProps> = ({ initialValue, onHandleHange, onFormSubmit })=> {
  const useSpringProps = useSpring({
    transform: 'translateX(30%)',
    from:{
      transform: 'translateX(-1%)',
    }
  });

  //  const {o, xyz, color}  = useSpring({
  //     o:1,
  //     xyz: [10, 20, 5],
  //     color: 'green'
  //   ,
  //   from: {
  //     o: 0,
  //     xyz: [0, 0, 0],
  //     color: 'red'
  //   }
  // })

  const inputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    onHandleHange(event)
  };

  return(
    <animated.form onSubmit={onFormSubmit} style={useSpringProps} className={styles.form}>
      <input type='text' placeholder='Type in todo' value={initialValue} onChange={inputChange}></input>
      <input type='submit' value='Add to do'></input>
    </animated.form>
  );
}