import React from 'react';
import { Nav } from './Nav';
import { storiesOf } from '@storybook/react';


storiesOf('Nav', module).add
('nav', ()=> <Nav doc='Docs' tutorial='Tutorial' blog='Blog' community='Community'/>)