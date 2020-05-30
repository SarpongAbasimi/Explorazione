import React from 'react';
import style from './ToDoCard.module.scss';
import {useSprings, useTransition, animated} from 'react-spring';

type ToDoCardProps = {
    listOfTodos: string[]
}



export const ToDoCard: React.FunctionComponent<ToDoCardProps> = ({listOfTodos }) => {
    let list = [
        {id:0, name: 'chris'}, 
        {id:1, name: "ben"}
    ];

    const transition = useTransition(listOfTodos, null, {
        from: { opacity: 0, marginLeft: -100, marginRight: 100, transform: 'translateX(0%)' },
        enter: { opacity: 1, marginLeft: 0, marginRight: 0 , transform: 'translateX(30%)'},
    })

    // return (<div>{listOfTodos.map(e => <li className={style.card}>{e}</li>)}</div>);
return (
 <div>
     {transition.map(
         ({item, key, props}) => {
         return <animated.li style={props} className={style.list}>{item}</animated.li>
         }
     )}
</div>)

};


// export const ToDoCard: React.FunctionComponent<ToDoCardProps> = ({listOfTodos }) => {
//     let list = [
//         {id:0, name: 'chris'}, 
//         {id:1, name: "ben"}
//     ];

//     const transition = useTransition(list, list => list.id,{
//         from: { opacity: 0, marginLeft: -100, marginRight: 100, transform: 'translateX(0%)' },
//         enter: { opacity: 1, marginLeft: 0, marginRight: 0 , transform: 'translateX(30%)'},
//         leave: { opacity: 1 },
//     })

//     // return (<div>{listOfTodos.map(e => <li className={style.card}>{e}</li>)}</div>);
// return (
//  <div>
//      {transition.map(
//          ({item, key, props}) => {
//          return <animated.li key={key} style={props}>{item.name}</animated.li>
//          }
//      )}
// </div>)

// };



// useSprings
// export const ToDoCard: React.FunctionComponent<ToDoCardProps> = ({listOfTodos }) => {

//     const listOfStyles: {bgColour: string,transfromation: string, name: string }[] = [
//         {
//           bgColour: 'blue',
//           transfromation: 'scaleX(8%)',
//           name: 'Red munsell',
//         }
//     ]
//     const springs = useSprings(listOfStyles.length, listOfStyles.map((items, index)=> ({
//         background: items.bgColour,
//         opacity: 1,
//         margin: 5,
//         width: '50%',
//         listStyleType: 'none',
//         from: {
//             margin: 0,
//             opacity: 0
//         }
//     })));
//     // return (<div>{listOfTodos.map(e => <li className={style.card}>{e}</li>)}</div>);
// return (
//     <div className={style.container}>
//        { listOfTodos.map(e => springs.map(props => <animated.li style={props}>{e}</animated.li>))}
//     </div>);
// };
