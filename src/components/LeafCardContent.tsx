import * as React from 'react';

import { Card, Grid, Paper } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { LeafTask, Option } from '../tasks';

const useStyles = makeStyles({
	card: {
		height: 200,
		width: 200,
		backgroundColor: 'green',
	},
});

interface LeafCardContentProps {
	task: LeafTask;
	onTaskChange: (option?: Option) => void;
}

export const LeafCardContent: React.FC<LeafCardContentProps> = ({ task }) => {
	const classes = useStyles();

	return <Card className={classes.card} />;
};

export default LeafCardContent;
