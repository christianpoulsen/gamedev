import clsx from 'clsx';
import React, { useState } from 'react';

import { cofounders } from '@/constants';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import YOU from '@/man.png';

const useStyles = makeStyles(theme => ({
	item: {
		'& div': {
			display: 'flex',
			justifyContent: 'center',
			'& img': {
				height: 128,
				width: 'auto',
				padding: 24,
			},
		},
		'&:hover': {
			cursor: 'pointer',
		},
	},
	hover: {
		backgroundColor: theme.palette.action.selected,
	},
	selected: {
		backgroundColor: theme.palette.action.active,
	},
}));

const PickCofounders: React.FC = () => {
	const classes = useStyles();
	const [numOfCofounders, setNumOfCofounders] = useState(0);
	const [hoverNum, setHoverNum] = useState(0);

	const handleHover = (num: number) => () => setHoverNum(num);
	const handleClick = (num: number) => () => setNumOfCofounders(num === numOfCofounders ? 0 : num);

	return (
		<>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5">
					Pick number of cofounders if any
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1" component="p">
					Each new cofounder will be able to help you help by taking tasks concurrent with yourself. But the Equity will be shared equaly between all you all.
				</Typography>
				<Grid container item xs={12} spacing={4} onMouseOut={handleHover(0)}>
					{cofounders.map((cofounder, index) => (
						<Grid
							item
							xs={3}
							key={cofounder.name}
							className={clsx(classes.item, { [classes.hover]: hoverNum >= index + 1, [classes.selected]: numOfCofounders >= index + 1 })}
							onMouseOver={handleHover(index + 1)}
							onClick={handleClick(index + 1)}
						>
							<Grid item xs={12}>
								<img src={cofounder.img} />
							</Grid>
							<Typography variant="h6" align="center">
								{index + 1}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default PickCofounders;
