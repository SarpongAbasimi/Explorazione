import React from 'react';
import styles from './div.module.scss';
import { useSpring, animated } from 'react-spring';

export const DivAnimation: React.FunctionComponent = () => {
  const styleProps = useSpring({
    vector: [0, 10, 30],
    display: 'block',
    padding: 20,
    background: 'linear-gradient(to right, #009fff, #ec2f4b)',
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
  })

  return <div className={styles.hello}>
    <div>
      <animated.h1 style={styleProps }>Hello</animated.h1>
    </div>
  </div>
}