import * as React from "react";

import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Task } from "../tasks";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    height: "100vh",
    width: "100vw"
  },
  list: {
    width: 256,
    borderLeft: (theme: Theme) => `solid 2px ${theme.palette.divider}`
  }
});

interface DecisionListProps {
  log: Task[];
}

const DecisionList: React.FC<DecisionListProps> = ({ log }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid container justify="flex-end" className={classes.container}>
      <List className={classes.list}>
        {log.map(task => (
          <ListItem>
            <ListItemText primary={task.id} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default DecisionList;
