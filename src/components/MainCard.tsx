import * as React from 'react';

import { Card, CardHeader, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { isLeaf, isNode, isRoot } from '../helpers';
import { Task } from '../tasks';
import LeafCardContent from './LeafCardContent';
import NodeCardContent from './NodeCardContent';
import RootCardContent from './RootCardContent';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
    },
    card: {
        height: 512,
        width: 512,
        backgroundColor: grey[500],
    }
})

interface MainCardProps {
    task: Task,
    onTaskChange: () => void;
}

export const MainCard: React.FC<MainCardProps> = ({ task, onTaskChange }) => {

    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center" className={classes.container}>
            <Card elevation={2} className={classes.card} >
                <CardHeader title={task.title} />
                <Grid container alignItems="center" justify="center">
                    {getCardContent(task)}
                </Grid>
            </Card>
        </Grid>
    );
}

const getCardContent = (task: Task) => {
    if (isRoot(task)) {
        return <RootCardContent task={task} />
    } else if (isNode(task)) {
        return <NodeCardContent task={task} />
    } else if (isLeaf(task)) {
        return <LeafCardContent task={task} />
    } else {
        return <Card>Error: Couldn't assert whether Task was a Root, Node or a Leaf</Card>
    }
}

export default MainCard;
