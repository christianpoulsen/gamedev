import * as React from "react";

import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import { isLeaf, isRoot } from "../helpers";
import { Task } from "../tasks";
import LeafCardContent from "./LeafCardContent";
import NodeCardContent from "./NodeCardContent";
import RootCardContent from "./RootCardContent";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    height: "100vh",
    width: "100vw"
  },
  card: {
    height: 576,
    width: 512,
    backgroundColor: grey[500],
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

interface MainCardProps {
  task?: Task;
  onTaskChange: (next?: number) => void;
}

export const MainCard: React.FC<MainCardProps> = ({ task, onTaskChange }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.container}
    >
      <Card elevation={2} className={classes.card}>
        <CardHeader />
        <CardContent>{task?.title}</CardContent>
        {getCardContent(task, onTaskChange)}
      </Card>
    </Grid>
  );
};

const getCardContent = (task: Task, onTaskChange: (next?: number) => void) => {
  if (isRoot(task)) {
    return <RootCardContent task={task} onTaskChange={onTaskChange} />;
  } else if (isLeaf(task)) {
    return <LeafCardContent task={task} onTaskChange={onTaskChange} />;
  } else if (!!task) {
    return <NodeCardContent task={task} onTaskChange={onTaskChange} />;
  } else {
    return (
      <Card>
        Error: Couldn't assert whether Task was a Root, Node or a Leaf
      </Card>
    );
  }
};

export default MainCard;
