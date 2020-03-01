import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { LeafTask, Option, ResultSum } from '../data';

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
							{takeAway}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<List>
					<ListItem button alignItems="center" onClick={handleClick(undefined)} className={classes.button}>
						<ListItemText primary={sum === ResultSum.POSITIVE ? 'Great!' : 'Great...'} />
					</ListItem>
				</List>
			</Grid>
		</Grid>
	);
};

export default LeafCardContent;
