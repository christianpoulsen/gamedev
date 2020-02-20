import React, { useState } from 'react';

import DecisionList from './DecisionList';
import MainCard from './MainCard';

import * as DATA from '../tasks';

const App: React.FC = () => {

  const [task, setTask] = useState(DATA.tasks[0]);

  // tslint:disable-next-line:no-empty
  const handleTaskChange = () => {}

  return (
    <React.Fragment>
      <DecisionList />
      <MainCard task={task} onTaskChange={handleTaskChange} />
    </React.Fragment>
  );
}

export default App;
