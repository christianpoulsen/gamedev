import React, { useState } from 'react';

import { Button, ButtonProps, Card, CardActions, CardContent, Grid, Paper, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { RootTask } from '../tasks';

const useStyles = makeStyles({
    card: {
        height: 320,
        width: 384,
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})

interface RootCardContentProps {
    task: RootTask,
}

export const RootCardContent: React.FC<RootCardContentProps> = ({ task }) => {

    const classes = useStyles();
    const [flipped, setFlipped] = useState(false);

    const handleClick: ButtonProps['onClick'] = () => {
        setFlipped(true);
    }

    return (
        <React.Fragment>
            <Card className={classes.card} >
                {flipped ? 
                    <CardContent />
                : 
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="body1" component="p">
                                {task.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleClick} variant="contained">
                                Nice
                            </Button>
                        </CardActions>
                    </React.Fragment>
                }
            </Card>
        </React.Fragment>
    );
}

export default RootCardContent;
