import React, { useState } from 'react';

import DecisionList from './DecisionList';
import MainCard from './MainCard';
import TaskBoard from './TaskBoard';

import { Dialog, Grid, Typography } from '@material-ui/core';
import { Option, Stats, Task, tasks } from '../tasks';

const App: React.FC = () => {
	const [log, setLog] = useState([] as Task[]);
	const [stats, setStats] = useState({ money: 250, cd: 0, time: 1 } as Stats);
	const [activeTask, setActiveTask] = useState<Task>(undefined);

	const handleClose = () => setActiveTask(undefined);
	const handleTaskChange = (option?: Option) => {
		setLog([activeTask, ...log]);
		console.log('option', option);
		console.log('active task', activeTask);
		if (option) {
			const newTask = tasks.find(t => t.id === option?.next);
			console.log('new task', newTask);
			if (newTask) {
				setActiveTask(newTask);
			} else {
				setActiveTask(undefined);
			}
		}
		console.log('newly set task', activeTask);
		console.log('consequence', option?.consequence);
		const { money = 0, cd = 0, time = 0 } = option?.consequence ?? {};
		console.log({ money, cd, time });
		const newStats = {
			money: stats.money + money,
			cd: stats.cd + cd,
			time: stats.time + time,
		};
		setStats(newStats);
	};

	return (
		<>
			{/* <DecisionList log={log} /> */}
			<TaskBoard onSelectTask={setActiveTask} />

			<Dialog open={!!activeTask} onClose={handleClose}>
				<MainCard task={activeTask} onTaskChange={handleTaskChange} stats={stats} />
			</Dialog>
		</>
	);
};

export default App;
