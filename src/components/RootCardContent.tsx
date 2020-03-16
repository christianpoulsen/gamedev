import React, { useState } from 'react';

import { Button, ButtonProps, Card, CardActions, CardContent, Grid, List, ListItem, ListItemProps, ListItemText, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { Option, RootTask } from '../types';
import CardBody from './CardBody';
import NodeCardContent from './NodeCardContent';

const useStyles = makeStyles(theme => ({}));

interface RootCardContentProps {
	task: RootTask;
	onTaskChange: (option?: Option) => void;
}

export const RootCardContent: React.FC<RootCardContentProps> = ({ task, onTaskChange }) => {
	const classes = useStyles();
	const [flipped, setFlipped] = useState(false);

	const handleClick = () => {
		setFlipped(true);
	};

	if (flipped) {
		return <NodeCardContent task={task} onTaskChange={onTaskChange} />;
	}

	return (
		<CardBody>
			<Typography variant="body1" component="p">
				{task.text}
			</Typography>
			<ListItem button alignItems="center" onClick={handleClick}>
				<ListItemText primary="Nice" />
			</ListItem>
		</CardBody>
	);
};

export default RootCardContent;
