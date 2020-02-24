import React, { useState } from "react";

import {
  Button,
  ButtonProps,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

import { Option, RootTask } from "../tasks";
import NodeCardContent from "./NodeCardContent";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: 384
  },
  button: {
    textAlign: "center",
    marginBottom: (theme: Theme) => theme.spacing(3),
    backgroundColor: (theme: Theme) => theme.palette.background.paper
  }
});

interface RootCardContentProps {
  task: RootTask;
  onTaskChange: (option?: Option) => void;
}

export const RootCardContent: React.FC<RootCardContentProps> = ({
  task,
  onTaskChange
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(true);
  };

  if (flipped) {
    return <NodeCardContent task={task} onTaskChange={onTaskChange} />;
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justify="space-between"
      className={classes.container}
    >
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="body1" component="p">
              {task.text}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <List>
          <ListItem
            button
            alignItems="center"
            onClick={handleClick}
            className={classes.button}
          >
            <ListItemText primary="Nice" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default RootCardContent;
