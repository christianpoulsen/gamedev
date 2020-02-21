import React, { useState } from "react";

import DecisionList from "./DecisionList";
import MainCard from "./MainCard";

import * as DATA from "../tasks";

const App: React.FC = () => {
  const [task, setTask] = useState(DATA.tasks.find(t => t.id === 11317));
  const [log, setLog] = useState([] as DATA.Task[]);

  const handleTaskChange = (next?: number) => {
    if (next) {
      const newTask = DATA.tasks.find(t => t.id === next);
      if (newTask) {
        setLog([task, ...log]);
        setTask(newTask);
        return;
      }
    }
    // Find new task somehow
    setLog([task, ...log]);
    setTask(undefined);
  };

  return (
    <React.Fragment>
      <DecisionList log={log} />
      <MainCard task={task} onTaskChange={handleTaskChange} />
    </React.Fragment>
  );
};

export default App;
