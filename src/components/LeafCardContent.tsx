import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { LeafTask, Option, ResultSum } from '../data';
import CardBody from './CardBody';

const useStyles = makeStyles(theme => ({
	container: {
		height: '100%',
		width: 384,
	},
	card: {
		height: 200,
		width: 200,
		backgroundColor: 'yellow',
	},
	list: {
		marginBottom: theme.spacing(2),
	},
	button: {
		marginBottom: theme.spacing(1),
		backgroundColor: theme.palette.background.paper,
	},
}));

interface LeafCardContentProps {
	task: LeafTask;
	onTaskChange: (option?: Option) => void;
}

export const LeafCardContent: React.FC<LeafCardContentProps> = ({
	task: {
		result: { takeAway, sum },
	},
	onTaskChange,
}) => {
	const classes = useStyles();

	const handleClick = (option?: Option) => () => {
		onTaskChange(option);
	};

	return (
		<CardBody>
			<Typography variant="body1" component="p">
				{takeAway}
			</Typography>
			<ListItem button alignItems="center" onClick={handleClick(undefined)} className={classes.button}>
				<ListItemText primary={sum === ResultSum.POSITIVE ? 'Great!' : sum === ResultSum.NEGATIVE ? 'Great...' : 'Okay'} />
			</ListItem>
		</CardBody>
	);
};

export default LeafCardContent;
