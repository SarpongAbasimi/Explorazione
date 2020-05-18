import React from 'react';
import styles from './ReactSpring.module.scss';
import {useSpring, animated } from 'react-spring';

type ReactSpringComponentProps = {
  numberValue: number,
  active: () => void
}



export const ReactSpringComponent: React.FunctionComponent<ReactSpringComponentProps> = ({numberValue, active}) =>  {
  const props = useSpring({
    opacity: 1,
    width: '100%',
    number: 100,
    from: {
      opacity: 0,
      width: '0%',
      number: 0
    }
  });

  return (<div onClick={active} className={styles['react-spring']}>
    <animated.div style={props} className={styles.innerDiv}>
      {props.width.interpolate(s => s)}
    </animated.div>
    </div>)
}