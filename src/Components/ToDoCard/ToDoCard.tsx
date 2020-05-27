import React from 'react';
import style from './ToDoCard.module.scss';


type ToDoCardProps = {
    listOfTodos: string[]
}

export const ToDoCard: React.FunctionComponent<ToDoCardProps> = ({listOfTodos }) => {
    console.log(listOfTodos)
return (<div className={style.card}>{listOfTodos.map(e => <li>{e}</li>)}</div>);
};
