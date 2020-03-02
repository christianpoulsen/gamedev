import React from 'react';

import { Card, CardContent, Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		height: '100%',
		width: 384,
	},
	list: {
		marginBottom: theme.spacing(2),
		'& > div': {
			marginBottom: theme.spacing(1),
			backgroundColor: theme.palette.background.paper,
		},
	},
}));

interface CardBodyProps {
	children: [React.ReactChild, React.ReactNode];
}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
	const classes = useStyles();

	return (
		<Grid container direction="column" alignItems="stretch" justify="space-between" className={classes.container}>
			<Grid item>
				<Card variant="outlined" square>
					<CardContent>{children[0]}</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<List className={classes.list}>{children.slice(1)}</List>
			</Grid>
		</Grid>
	);
};

export default CardBody;
