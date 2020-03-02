import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { NodeTask, Option } from '../data';
import CardBody from './CardBody';

const useStyles = makeStyles({
	container: {
		height: '100%',
		width: 384,
	},
	card: {
		height: 200,
		width: 200,
		backgroundColor: 'yellow',
	},
	button: {
		marginBottom: (theme: Theme) => theme.spacing(1),
		backgroundColor: (theme: Theme) => theme.palette.background.paper,
	},
});

interface NodeCardContentProps {
	task: NodeTask;
	onTaskChange: (option?: Option) => void;
}

export const NodeCardContent: React.FC<NodeCardContentProps> = ({ task, onTaskChange }) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const handleClick = (option?: Option) => () => {
		onTaskChange(option);
	};

	return (
		<CardBody>
			<Typography variant="body1" component="p">
				{task.question}
			</Typography>
			{task.options.map(option => (
				<ListItem key={option?.decision?.trim()} button alignItems="center" onClick={handleClick(option)} className={classes.button}>
					<ListItemText primary={option?.decision} />
				</ListItem>
			))}
		</CardBody>
	);
};

export default NodeCardContent;
