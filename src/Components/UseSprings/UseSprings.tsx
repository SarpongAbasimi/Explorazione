import React from 'react';
import {useSprings, animated} from 'react-spring';

const data = [
  {
    id: 1,
    from: {
      backgroundColor: '#E6E6FA',
      width: '10px',
    },
    to : {
      backgroundColor: '#EE82EE',
      width: '200px'
    },
    config:{
      mass: 10,
      tension: 10
    },
    delay: '1000'
  },
  {
    id: 2,
    from: {
      backgroundColor: '#DA70D6',
      width: '20px',
    },
    to : {
      backgroundColor: '#87CEEB',
      width: '250px'
    },
    config: {
      friction: 40,
      mass: 20
    }
  },
  {
    id: 3,
    from: {
      backgroundColor: '#BC8F8F',
      width: '20px',
    },
    to : {
      backgroundColor: '#B8860B',
      width: '80px'
    },
    config: {
      mass: 40
    }
  },
]


export const Cm = () => {
  const springs = useSprings(
    data.length,
    data.map(({id, ...config}) => config)
  )

  return(
     <> 
     { springs.map((spring, index)=> <animated.div key={data[index].id} 
     style={{
       ...spring,
       'height':'50px',
       'margin': '10px',
       }}></animated.div>) }
     </>
  );
}