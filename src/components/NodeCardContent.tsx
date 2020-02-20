import * as React from 'react';

import { Card, Grid, Paper } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { NodeTask } from '../tasks';

const useStyles = makeStyles({
    card: {
        height: 200,
        width: 200,
        backgroundColor: 'yellow',
    }
})

interface NodeCardContentProps {
    task: NodeTask,
}

export const NodeCardContent: React.FC<NodeCardContentProps> = ({ task }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} />
    );
}

export default NodeCardContent;
