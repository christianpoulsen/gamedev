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

	setInterval(() => setSeconds(new Date().getSeconds() - offset), 1000);
	setInterval(() => onChange(time + 1), 1000 * 60);

	return (
		<div className={classes.parent}>
			<img src={long} style={{ transform: `rotate(${(seconds * 6) % 360}deg)` }} />
			<img src={short} />
		</div>
	);
};

export default InstrumentBoard;
