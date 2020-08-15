import React from 'react';
import { useTrail, animated } from 'react-spring'


export const Trails: React.FunctionComponent = () => {
  const colors= ['red', 'gold', 'green', 'pink', 'black', 'purple', 'orange', 'blue', 'grey', 'yellow','blue', 'grey', 'yellow', 'red', 'gold']

  const trailimation = useTrail(colors.length, {
    from:{
      height: '0px',
      width: '0px'
    },
    to: {
      height: '900px',
      width: '100px'
    },
    config:{
      mass: 2,
      tension: 200
    }
  })

  return(
    <div style={{
      'display':'flex',
      'width': '100%',
      // 'flexDirection': 'column'
      }}>
        {trailimation.map((spring, index)=> {
          return(
            <animated.div key={index} style={{ 
              ...spring,
              // 'width': '100px',
              'backgroundColor':colors[index],
              'margin':'5px'
              }} >
            </animated.div>)
        })}
    </div>
  )
};