import React,{ useState } from 'react';
import styles from './App.module.scss';
import { PostPage } from './Page/Post/Post';
import { ReactSpringPage } from './Page/ReactSpring/ReactSprint';

function App() {
  return (
    <div>
      <ReactSpringPage/>
    </div>
  );
}

export default App;
