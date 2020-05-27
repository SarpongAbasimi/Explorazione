import React from 'react';
import style from './ToDoCard.module.scss';
import {useSprings, animated} from 'react-spring';

type ToDoCardProps = {
    listOfTodos: string[]
}

export const ToDoCard: React.FunctionComponent<ToDoCardProps> = ({listOfTodos }) => {

    const listOfStyles: {bgColour: string,transfromation: string, name: string }[] = [
        {
          bgColour: 'blue',
          transfromation: 'scaleX(8%)',
          name: 'Red munsell',
        }
    ]
    const springs = useSprings(listOfStyles.length, listOfStyles.map((items, index)=> ({
        background: items.bgColour,
        opacity: 1,
        transfrom: 'translateX(5%)',
        from: {
            background: 'gold',
            opacity: 0,
            transfrom: 'translateX(0%)'
        }
    })));
    // return (<div>{listOfTodos.map(e => <li className={style.card}>{e}</li>)}</div>);
return (
    <div>
       { listOfTodos.map(e => springs.map(props => <animated.li style={props}>{e}</animated.li>))}
    </div>);
};
