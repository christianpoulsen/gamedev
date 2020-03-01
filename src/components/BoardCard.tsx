import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as Businessman from '../assets/businessman.png';
import * as Engineer from '../assets/engineer.png';
import { RootTask, TaskType } from '../tasks';

const useStyles = makeStyles({
	card: {
		width: 288,
		height: 384,
		borderColor: 'orange',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& img': {
			width: 'auto',
			height: 'calc(384px/2)',
		},
	},
});

interface BoardCardProps {
	task?: RootTask;
}

const BoardCard: React.FC<BoardCardProps> = ({ task }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card} elevation={4}>
			{!!task && (
				<>
					<CardHeader title={task.title} />
					<CardContent>{task.text}</CardContent>
					{task.type === TaskType.PRODUCT_DEVELOPMENT ? <img src={Engineer} /> : <img src={Businessman} />}
				</>
			)}
		</Card>
	);
};

export default BoardCard;
