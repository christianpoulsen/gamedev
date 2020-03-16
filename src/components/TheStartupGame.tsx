import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey, lightBlue } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { LeafTask, Option, ResultSum } from '../types';

const useStyles = makeStyles(theme => ({
	root: {
		width: '45vw',
		padding: theme.spacing(1),
		paddingLeft: '5vw',
		marginLeft: '-3vw',
		backgroundColor: lightBlue[300],
		color: theme.palette.common.white,
		fontWeight: 'bold',
		transform: 'skew(-30deg)',
		'& h4': {
			transform: 'skew(30deg)',
		},
	},
}));

export const TheStartupGame: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Typography variant="h4">THE STARTUP GAME</Typography>
		</Grid>
	);
};

export default TheStartupGame;
