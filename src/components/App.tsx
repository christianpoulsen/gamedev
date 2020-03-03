import React, { useState } from 'react';

import { Dialog, Divider } from '@material-ui/core';

import { Option, Stats, Task, tasks } from '../data';
import InstrumentBoard from './InstrumentBoard';
import TaskBoard from './TaskBoard';
import MainCard from './TaskCard';
import TheStartupGame from './TheStartupGame';

const App: React.FC = () => {
	const [log, setLog] = useState([] as Task[]);
	const [stats, setStats] = useState({ money: 1000000, cd: 0, pr: 0, time: 1 } as Stats);
	const [activeTask, setActiveTask] = useState<Task>(undefined);

	const handleClose = () => setActiveTask(undefined);
	const handleTaskChange = (option?: Option) => {
		setLog([activeTask, ...log]);
		if (option) {
			const newTask = tasks.find(t => t.id === option?.next);
			if (newTask) {
				setActiveTask(newTask);
			} else {
				setActiveTask(undefined);
			}
		} else {
			setActiveTask(undefined);
		}
		const { money = 0, cd = 0, time = 0, pr = 0 } = option?.consequence ?? {};
		const newStats = {
			money: stats.money + money,
			cd: stats.cd + cd,
			time: stats.time + time,
			pr: stats.pr + pr,
		};
		setStats(newStats);
	};

	return (
		<>
			{/* <DecisionList log={log} /> */}
			<TheStartupGame />
			<InstrumentBoard stats={stats} onChange={setStats} />
			<Divider />
			<TaskBoard onSelectTask={setActiveTask} log={log.map(task => task.id)} />
			<Dialog open={!!activeTask} onClose={handleClose}>
				<MainCard task={activeTask} onTaskChange={handleTaskChange} />
			</Dialog>
		</>
	);
};

export default App;
