import React, { useState } from 'react';

import { Dialog, Divider } from '@material-ui/core';

import tasks from '@/data';
import InstrumentBoard from '@/InstrumentBoard';
import TaskBoard from '@/TaskBoard';
import MainCard from '@/TaskCard';
import TheStartupGame from '@/TheStartupGame';
import { Option, Stats, Task } from '../types';

interface GameBoardProps {
	log: Task[];
	stats: Stats;
	onChangeLog: (log: Task[]) => void;
	onChangeStats: (stats: Stats) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ log, stats, onChangeLog, onChangeStats }) => {
	const [activeTask, setActiveTask] = useState<Task>(undefined);

	const handleClose = () => setActiveTask(undefined);
	const handleTaskChange = (option?: Option) => {
		onChangeLog([activeTask, ...log]);
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
		onChangeStats(newStats);
	};

	return (
		<>
			{/* <DecisionList log={log} /> */}
			<TheStartupGame />
			<InstrumentBoard stats={stats} onChange={onChangeStats} />
			<Divider />
			<TaskBoard onSelectTask={setActiveTask} log={log.map(task => task.id)} />
			<Dialog open={!!activeTask} onClose={handleClose}>
				<MainCard task={activeTask} onTaskChange={handleTaskChange} />
			</Dialog>
		</>
	);
};

export default GameBoard;
