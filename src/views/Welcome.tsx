import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import YOU from '@/man.png';

const useStyles = makeStyles({
	img: {
		display: 'flex',
		justifyContent: 'center',
		'& img': {
			height: 256,
			width: 'auto',
		},
	},
	body: {},
});

const Welcome: React.FC = () => {
	const classes = useStyles();
	return (
		<>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5">
					Welcome to the STARTUP GAME
				</Typography>
				<Typography variant="h5" component="h5">
					This is you
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.img}>
				<img src={YOU} />
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1" component="p">
					You just graduated as an engineer from DTU. You are in your best age, mid twenties, and single. Besides, you just got the best idea ever.
				</Typography>
				<Typography variant="body1" component="p">
					You want to develop a SMARTWATCH FOR KIDS aged 5-9 years old. To do so, you wan’t to gather a founding team and start a company and that’s excatly the purpose
					of this game. To start, build and grow a business within the timeframe of 40 days. When the 40 days have passed the company will be valued and your score equals
					your share of the company. E.g. if you own 50% of a company valued 1.000.000 DKK, your points will equal 500.000 DKK.
				</Typography>
				<Typography variant="body1" component="p">
					Your main task is to manage your scarce resources, time and money. You have to assign tasks to yourselve, your co-founders or pay for its fullfillment. You have
					to guide your business forward by performing tasks.
				</Typography>
			</Grid>
		</>
	);
};

export default Welcome;
