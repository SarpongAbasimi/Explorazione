import React,{ useState } from 'react';
import { DivAnimationPage } from './Page/DivAnimationPage/DivAnimation';
import { TodoPage } from './Page/ToDoPage/ToDoPage';
import { Cm } from './Components/UseSprings/UseSprings';
import { MyComponent } from './Components/Springs/Springs'
import { TrailsAnimationPage } from './Page/TrailsAnimation/TrailsAnimation'

function App() {
  return (
    <div>
      {/* <MyComponent/> */}
      < TrailsAnimationPage />
    </div>
  );
}

export default App;
