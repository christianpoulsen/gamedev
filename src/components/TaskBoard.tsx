import React, { useState } from 'react';

import { Card, Dialog, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Option, RootTask, Stats, Task, tasks, TaskType } from '../data';
import BoardCard from './BoardCard';
import MainCard from './TaskCard';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		padding: 16,
	},
	column: {
		textAlign: 'center',
	},
	title: {
		textAlign: 'center',
		padding: 16,
	},
	card: {
		width: 288,
		height: 384,
	},
});

interface TaskBoardProps {
	log: number[];
	onSelectTask: (task: Task) => void;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ onSelectTask, log }) => {
	const classes = useStyles();

	const rootTasks: RootTask[] = tasks.filter((task: RootTask): task is RootTask => task?.text !== undefined && !log.includes(task.id));
	const pdTasks: Array<RootTask | undefined> = rootTasks.filter(task => task.type === TaskType.PRODUCT_DEVELOPMENT);
	pdTasks.push(...Array(Math.max(6 - pdTasks.length, 0)));
	const cdTasks: Array<RootTask | undefined> = rootTasks.filter(task => task.type === TaskType.CUSTOMER_DEVELOPMENT && !log.includes(task.id));
	cdTasks.push(...Array(Math.max(6 - cdTasks.length, 0)));

	return (
		<>
			<Grid container className={classes.root}>
				<Grid item xs={6}>
					<Grid item xs={12} className={classes.title}>
						<Typography variant="h4" component="h4">
							PRODUCT DEVELOPMENT
						</Typography>
					</Grid>
					<Grid container justify="center" spacing={4}>
						{pdTasks.map((task, index) => (
							<Grid item key={task?.id ?? index}>
								<BoardCard task={task} onClick={onSelectTask} />
							</Grid>
						))}
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid item xs={12} className={classes.title}>
						<Typography variant="h4" component="h4">
							CUSTOMER DEVELOPMENT
						</Typography>
					</Grid>
					<Grid container justify="center" spacing={4}>
						{cdTasks.map((task, index) => (
							<Grid item key={task?.id ?? index}>
								<BoardCard task={task} onClick={onSelectTask} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default TaskBoard;
