import * as React from 'react';

import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import { lightBlue, orange } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { Option, Stats, Task, TaskType } from '../data';
import { isLeaf, isRoot } from '../helpers';
import LeafCardContent from './LeafCardContent';
import NodeCardContent from './NodeCardContent';
import RootCardContent from './RootCardContent';

const useStyles = makeStyles<Theme, TaskType>({
	card: {
		height: 576,
		width: 512,
		backgroundColor: type => (type === TaskType.PRODUCT_DEVELOPMENT ? orange[200] : lightBlue[200]),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	cardHeader: {
		fontSize: 12,
	},
});

interface TaskCardProps {
	task?: Task;
	onTaskChange: (option?: Option) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onTaskChange }) => {
	const classes = useStyles(task?.type);

	if (task === undefined) {
		return <Card />;
	}

	return (
		<Card elevation={2} className={classes.card}>
			<CardContent>{task?.title}</CardContent>
			{getCardContent(task, onTaskChange)}
		</Card>
	);
};

const getCardContent = (task: Task, onTaskChange: (option?: Option) => void) => {
	if (isRoot(task)) {
		return <RootCardContent task={task} onTaskChange={onTaskChange} />;
	} else if (isLeaf(task)) {
		return <LeafCardContent task={task} onTaskChange={onTaskChange} />;
	} else if (!!task) {
		return <NodeCardContent task={task} onTaskChange={onTaskChange} />;
	} else {
		return <Card>Error: Couldn't assert whether Task was a Root, Node or a Leaf</Card>;
	}
};

export default TaskCard;
