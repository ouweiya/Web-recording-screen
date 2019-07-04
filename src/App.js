import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    width: '300px'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [state, setstate] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container direction='row' justify='center' alignItems='flex-start' spacing={3}>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={_ => setstate(true)}>
              开始
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={_ => setstate(false)}>
              停止
            </Button>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
