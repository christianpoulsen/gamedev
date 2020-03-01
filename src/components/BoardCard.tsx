import React, { useState } from 'react';

import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { lightBlue, orange } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as Businessman from '../assets/businessman.png';
import * as Engineer from '../assets/engineer.png';
import { RootTask, TaskType } from '../data';

const useStyles = makeStyles<Theme, { standard: string; hover: string }>({
	card: {
		width: 288,
		height: 384,
		backgroundColor: ({ standard }) => standard,
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
			backgroundColor: ({ hover }) => hover,
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
	const classes = useStyles(getColor(task?.type));

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

const getColor = (type?: TaskType): { standard: string; hover: string } => {
	if (type === undefined) {
		return { standard: 'inherit', hover: 'inherit' };
	} else if (type === TaskType.PRODUCT_DEVELOPMENT) {
		return { standard: orange[200], hover: orange[700] };
	} else if (type === TaskType.CUSTOMER_DEVELOPMENT) {
		return { standard: lightBlue[200], hover: lightBlue[700] };
	}
	return { standard: 'inherit', hover: 'inherit' };
};

export default BoardCard;
