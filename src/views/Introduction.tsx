import React, { useState } from 'react';

import { Button, Container, Divider, Grid, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import { Option, Stats, Task } from '@/types';

import YOU from '@/man.png';
import TheStartupGame from '@/TheStartupGame';
import Welcome from '@/Welcome';
import GameMechanics from './GameMechanics';
import PickCofounders from './PickCofounders';

const useStyles = makeStyles(theme => ({
	content: {
		padding: theme.spacing(5),
		'& p': {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(3),
		},
	},
}));

interface IntroductionProps {
	onNextStage: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onNextStage }) => {
	const [activeStep, setActiveStep] = useState(0);
	const handleNext = () => {
		if (activeStep === 4) {
			onNextStage();
		} else {
			setActiveStep(prevActiveStep => prevActiveStep + 1);
		}
	};
	const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

	const classes = useStyles();

	return (
		<>
			<TheStartupGame />
			<Container maxWidth="md">
				<Stepper activeStep={activeStep}>
					<Step completed={activeStep > 0}>
						<StepLabel>Welcome</StepLabel>
					</Step>
					<Step completed={activeStep > 1}>
						<StepLabel>Game Mechanics</StepLabel>
					</Step>
					<Step completed={activeStep > 2}>
						<StepLabel>Decide Value Proposition</StepLabel>
					</Step>
					<Step completed={activeStep > 3}>
						<StepLabel>Decide Co-Founders</StepLabel>
					</Step>
					<Step completed={activeStep > 4}>
						<StepLabel>Play</StepLabel>
					</Step>
				</Stepper>
				<Grid container className={classes.content}>
					{getStepContent(activeStep)}
					<Grid container item justify={activeStep !== 0 ? 'space-between' : 'flex-end'}>
						{activeStep !== 0 && (
							<Grid item>
								<Button variant="contained" color="secondary" onClick={handleBack}>
									Back
								</Button>
							</Grid>
						)}
						<Grid>
							<Button variant="contained" color="primary" onClick={handleNext}>
								Next
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

const getStepContent = (index: number) => {
	switch (index) {
		case 0:
			return <Welcome />;
		case 1:
			return <GameMechanics />;
		case 2:
			return <div />;
		case 3:
			return <PickCofounders />;
		case 4:
			return <div />;
	}
};

export default Introduction;
