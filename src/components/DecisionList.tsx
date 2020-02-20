import * as React from 'react';

import { Grid, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
    },
    list: {
        width: 256,
        backgroundColor: 'red'
    }
})


const DecisionList: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container justify="flex-end" className={classes.container} >
            <List className={classes.list} />
        </Grid>
    );
}

export default DecisionList;
