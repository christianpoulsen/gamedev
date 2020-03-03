import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import barometer from '../assets/barometer.png';
import moneyBag from '../assets/money.png';
import { Stats } from '../data';
import { formatMoney } from '../helpers';
import Clock from './Clock';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		padding: theme.spacing(3),
	},
	parameter: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		'& img': {
			width: theme.spacing(4),
			height: 'auto',
			padding: theme.spacing(1),
		},
		'&:3th-child': {
			padding: theme.spacing(2),
		},
	},
}));

interface InstrumentBoardProps {
	stats: Stats;
	onChange: (stats: Stats) => void;
}

const InstrumentBoard: React.FC<InstrumentBoardProps> = ({ stats: { cd, pr, time, money }, onChange }) => {
	const classes = useStyles();

	const handleTime = (newTime: number) => {
		onChange({ cd, pr, money, time: newTime });
	};

	return (
		<Grid container className={classes.root}>
			<Grid item xs={3} className={classes.parameter}>
				<img src={barometer} />
				<Typography variant="body1">PRODUCT READINESS</Typography>
				<Typography variant="h6">{pr} POINTS</Typography>
			</Grid>
			<Grid item xs={3} className={classes.parameter}>
				<img src={barometer} />
				<Typography variant="body1">MARKET VALIDATION</Typography>
				<Typography variant="h6">{cd} POINTS</Typography>
			</Grid>
			<Grid item xs={3} className={classes.parameter}>
				<Clock time={time} onChange={handleTime} />
				<Typography variant="body1">TIME</Typography>
				<Typography variant="h6">DAY {time}</Typography>
			</Grid>
			<Grid item xs={3} className={classes.parameter}>
				<img src={moneyBag} />
				<Typography variant="body1">FINANCE</Typography>
				<Typography variant="h6">{formatMoney(money)}</Typography>
			</Grid>
		</Grid>
	);
};

export default InstrumentBoard;
