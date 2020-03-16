import * as React from 'react';

import { Card, CardContent, Grid, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import clock from '../assets/clock.png';
import moneyBag from '../assets/money.png';
import { Consequence, NodeTask, Option } from '../types';
import CardBody from './CardBody';

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
});

interface NodeCardContentProps {
	task: NodeTask;
	onTaskChange: (option?: Option) => void;
}

export const NodeCardContent: React.FC<NodeCardContentProps> = ({ task, onTaskChange }) => {
	const classes = useStyles();

	const handleClick = (option?: Option) => () => {
		onTaskChange(option);
	};

	return (
		<CardBody>
			<Typography variant="body1" component="p">
				{task.question}
			</Typography>
			{task.options.map(option => (
				<ListItem key={option?.decision?.trim()} button alignItems="center" onClick={handleClick(option)}>
					<ListItemText
						primary={option?.decision}
						secondary={<ViewConsequences consequence={option?.consequence} />}
						secondaryTypographyProps={{
							color: 'textPrimary',
							align: 'right',
						}}
					/>
				</ListItem>
			))}
		</CardBody>
	);
};

const ViewConsequences = ({ consequence }: { consequence?: Consequence }) => {
	if (!consequence) {
		return null;
	}

	const { time, money } = consequence;
	return (
		<span>
			{time !== undefined && (
				<>
					<img src={clock} />
					{time}
				</>
			)}
			{money !== undefined && (
				<>
					<img src={moneyBag} />
					{money}
				</>
			)}
		</span>
	);
};

export default NodeCardContent;
