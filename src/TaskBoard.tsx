import * as React from 'react';

import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    }
})

const TaskBoard: React.FC = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} />
    );
}

export default TaskBoard;
