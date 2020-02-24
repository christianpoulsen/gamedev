import * as React from "react";

import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import { isLeaf, isRoot } from "../helpers";
import { Stats, Task } from "../tasks";
import LeafCardContent from "./LeafCardContent";
import NodeCardContent from "./NodeCardContent";
import RootCardContent from "./RootCardContent";

const useStyles = makeStyles({
  stats: {
    fontSize: 12,
    textAlign: "center"
  },
  text: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center"
  }
});

interface MainCardProps {
  stats: Stats;
}

export const MainCard: React.FC<MainCardProps> = ({
  stats: { money, cd, time }
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.stats} justify="space-between">
      <Grid item xs={3}>
        {money} DKK
      </Grid>
      <Grid item xs={3}>
        0
      </Grid>
      <Grid item xs={3}>
        {cd}
      </Grid>
      <Grid item xs={3}>
        {time}
      </Grid>

      <Grid item xs={3} className={classes.text}>
        Money
      </Grid>
      <Grid item xs={3} className={classes.text}>
        Product Readiness
      </Grid>
      <Grid item xs={3} className={classes.text}>
        Customer Development
      </Grid>
      <Grid item xs={3} className={classes.text}>
        {time === 1 ? "Day" : "Days"}
      </Grid>
    </Grid>
  );
};

export default MainCard;
