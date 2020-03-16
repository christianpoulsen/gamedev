import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

const GameMechanics: React.FC = () => {
	const classes = useStyles();
	return (
		<>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5">
					Game Mechanics
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1" component="p">
					You’ll be playing for 40 days and each day equals to 1 minute. The time is running continuously, so you’ll have to hurry up. It is possible to skip a day to
					progress even faster, but you can’t slow down time.
				</Typography>
				<Typography variant="body1" component="p">
					When a task is chosen, a detailed description and all options can be found on the back. The different options might cost time or/and money, or nothing. If an
					option cost time, you’ll have to assign it to a vacant founder. An option do often lead to a subtask, with new options, until the task is done.
				</Typography>
				<Typography>
					At the end of the game a score will be calculated to review how the player has been doing. The final score is an approximation of the company’s valuation.
				</Typography>
				<Typography>
					Product Readiness, Customer Development and Cash will be the variables by which your company will be evaluated by. And the you final score will then be the
					company evaluation times your Equity.
				</Typography>
			</Grid>
		</>
	);
};

export default GameMechanics;
