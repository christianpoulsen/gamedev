import React, { useState } from 'react';

import DecisionList from './DecisionList';
import MainCard from './MainCard';
import TaskBoard from './TaskBoard';

import { Grid, Typography } from '@material-ui/core';
import * as DATA from '../tasks';

const App: React.FC = () => {
	const [task, setTask] = useState(DATA.tasks.find(t => t.id === 11317));
	const [log, setLog] = useState([] as DATA.Task[]);
	const [stats, setStats] = useState({
		money: 250,
		cd: 0,
		time: 1,
	} as DATA.Stats);

	const handleTaskChange = (option?: DATA.Option) => {
		setLog([task, ...log]);
		if (option) {
			console.log('option', option);
			const newTask = DATA.tasks.find(t => t.id === option?.next);
			console.log('task', task);
			console.log('new task', newTask);
			if (newTask) {
				setTask(newTask);
			} else {
				// Find new task somehow
				setTask(undefined);
			}
		}
		const { money = 0, cd = 0, time = 0 } = option?.consequence;
		const newStats = {
			money: stats.money + money,
			cd: stats.cd + cd,
			time: stats.time + time,
		};
		console.log('new stats', newStats);
		setStats(newStats);
	};

	return (
		<React.Fragment>
			{/* <DecisionList log={log} /> */}
			{/* <MainCard task={task} onTaskChange={handleTaskChange} stats={stats} /> */}
			<TaskBoard />
		</React.Fragment>
	);
};

export default App;
