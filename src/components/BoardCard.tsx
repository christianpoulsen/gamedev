import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as Businessman from '../assets/businessman.png';
import * as Engineer from '../assets/engineer.png';
import { RootTask, TaskType } from '../tasks';

const useStyles = makeStyles<Theme, { color: string }>({
	card: {
		width: 288,
		height: 384,
		borderWidth: 2,
	},
	withContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& img': {
			width: 'auto',
			height: 192,
		},
		'&:hover': {
			cursor: 'pointer',
			borderColor: ({ color }) => color,
		},
	},
	text: {
		textAlign: 'center',
	},
});

interface BoardCardProps {
	task?: RootTask;
	onClick: (task: RootTask) => void;
}

const BoardCard: React.FC<BoardCardProps> = ({ task, onClick }) => {
	const classes = useStyles({ color: task?.type === TaskType.PRODUCT_DEVELOPMENT ? 'orange' : 'lightblue' });

	if (task === undefined) {
		return <Card className={classes.card} variant="outlined" />;
	}

	const handleClick = () => {
		onClick(task);
	};

	return (
		<Card className={`${classes.card} ${classes.withContent}`} variant="outlined" onClick={handleClick}>
			<div className={classes.text}>
				<CardHeader title={task.title} />
				<CardContent>{task.text}</CardContent>
			</div>
			{task.type === TaskType.PRODUCT_DEVELOPMENT ? <img src={Engineer} /> : <img src={Businessman} />}
		</Card>
	);
};

export default BoardCard;
