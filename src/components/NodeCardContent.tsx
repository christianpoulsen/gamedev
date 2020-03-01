import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { NodeTask, Option } from '../data';

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
		marginBottom: (theme: Theme) => theme.spacing(3),
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
		<Grid container direction="column" alignItems="stretch" justify="space-between" className={classes.container}>
			<Grid item>
				<Card>
					<CardContent>
						<Typography variant="body1" component="p">
							{task.question}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<List>
					{task.options.map(option => (
						<ListItem key={option?.decision?.trim()} button alignItems="center" onClick={handleClick(option)} className={classes.button}>
							<ListItemText primary={option?.decision} />
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

export default NodeCardContent;
