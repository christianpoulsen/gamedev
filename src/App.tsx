import * as React from 'react';

import { Card, Grid, Paper } from '@material-ui/core'

import DecisionList from './DecisionList';
import ParameterPaper from './ParameterPaper';
import TaskBoard from './TaskBoard';

const App: React.FC = () => {

  return (
    <Grid container alignItems="center" justify="center" style={{ height: '100vh' }}>
      {/* <Grid item xs={10} style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <ParameterPaper />
        </Grid>
        <Grid item xs={12}>
          <TaskBoard />
        </Grid>
      </Grid>
      <Grid item xs={2} style={{ height: '100vh' }}>
        <DecisionList />
      </Grid> */}
      <Card elevation={2} style={{ width: 512, height: 512, backgroundColor: 'lightgrey' }} />
    </Grid>
  );
}

export default App;
