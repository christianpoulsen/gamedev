import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import long from '../assets/clock-long.png';
import short from '../assets/clock-short.png';

const useStyles = makeStyles(() => ({
	parent: {
		position: 'relative',
		top: 0,
		left: 0,
		'& img:first-child': {
			position: 'relative',
			top: 0,
			left: 0,
		},
		'& img:last-child': {
			position: 'absolute',
			top: 0,
			left: 0,
		},
	},
}));

interface InstrumentBoardProps {
	time: number;
	onChange: (time: number) => void;
}

const InstrumentBoard: React.FC<InstrumentBoardProps> = ({ time, onChange }) => {
	const classes = useStyles();
	const [offset, setOffset] = useState(new Date().getSeconds());
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		console.log('new interval', time + 1);
		const interval = setInterval(() => onChange(time + 1), 1000 * 60);
		setOffset(new Date().getSeconds());
		return () => clearInterval(interval);
	}, [time]);

	useEffect(() => {
		const interval = setInterval(() => setSeconds(new Date().getSeconds() - offset), 1000);
		return () => clearInterval(interval);
	}, [offset]);

	return (
		<div className={classes.parent}>
			<img src={long} style={{ transform: `rotate(${(seconds * 6) % 360}deg)` }} />
			<img src={short} />
		</div>
	);
};

export default InstrumentBoard;
