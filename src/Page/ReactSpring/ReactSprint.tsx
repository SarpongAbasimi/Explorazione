import React, { useState } from 'react';
import { ReactSpringComponent } from '../../Components/ReactSpring/ReactSpring';


export const ReactSpringPage: React.FunctionComponent = () => {
  const [initialNumber, setInitialNumber] = useState<number>(0);
  const [activeDiv, setActiveDiv ] = useState<boolean>(false);

  const handleClick = (): void => {
    setActiveDiv(!activeDiv)
  };
  console.log(activeDiv)
  return(
    <>
      <ReactSpringComponent numberValue={initialNumber} active={handleClick} />
    </>
  )
}