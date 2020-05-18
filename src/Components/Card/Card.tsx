import React from 'react';
import styles from './Card.module.scss';
import { ReactComponent as On } from '../../Icons/toggle-on-line.svg';
import { ReactComponent as Off } from '../../Icons/toggle-off.svg';

type CardData = {
  userId: number,
  id: number,
  title: string,
  body: string
  toggle: boolean,
  toggleClick: (event: React.MouseEvent<SVGSVGElement>) => void
}

interface Style {
  height:number;
  width: number;
  fill: string;
  padding: number;
  cursor: string;
}

const OnStyle:Style = {
  height: 25,
  width: 25,
  fill: '#40ff00',
  padding: 4,
  cursor: 'pointer'
}

const OffStyle: Style = {
  height: 25,
  width: 25,
  fill: '#ffff',
  padding: 4,
  cursor: 'pointer'
}

const cardColour = {
  color: '#ffff',
}

const cardColourWhenToggledClicked = {
  backgroundColor: '#CACFD2 ',
  color: 'black',
}

export const Card: React.FunctionComponent<CardData> = ({userId, id, title, body, toggle, toggleClick }) => {
  return (
    <div className={styles.card} style={toggle ? cardColour : cardColourWhenToggledClicked }>
      <h3><b>Post number {id} </b>| {title}.</h3>
      <p>{body}</p>
       <div className={styles['toggle-on-container']}>
         {toggle ?
         <On  style={OnStyle} onClick={(event)=> toggleClick(event)}/> : 
         <Off style={OffStyle} onClick={(event)=> toggleClick(event)}/>
         }
       </div>
    </div>
  );
}