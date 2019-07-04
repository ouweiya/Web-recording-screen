import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';
import Play from '@material-ui/icons/PlayCircleFilled';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import V from './video';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 15
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: 600,
    justifyContent: 'center'
  },
  button: {
    width: 300
  },
  icon: {
    fontSize: 60
  },
  downicon: {
    fontSize: 35
  },
  down: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  btn: {
    textAlign: 'center',
    position: 'relative'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [start, setStart] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={classes.root}>
        <Grid container justify='center' spacing={3}>
          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={_ => setStart(true)}>
              开始
            </Button>
          </Grid>

          <Grid item>
            <Button variant='contained' color='primary' className={classes.button} onClick={_ => setStart(false)}>
              停止
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='column' alignItems='center' spacing={3}>
          <Grid item>
            <Paper className={classes.paper + ' ' + classes.btn}>
              <ButtonBase onClick={_ => setOpen(true)}>
                <Play className={classes.icon} />
              </ButtonBase>
              <ButtonBase className={classes.down}>
                <ArrowDownward className={classes.downicon} />
              </ButtonBase>
            </Paper>
          </Grid>

          <Grid item>
            <Paper className={classes.paper + ' ' + classes.btn}>
              <ButtonBase onClick={_ => setOpen(true)}>
                <Play className={classes.icon} />
              </ButtonBase>
              <ButtonBase className={classes.down}>
                <ArrowDownward className={classes.downicon} />
              </ButtonBase>
            </Paper>
          </Grid>
        </Grid>

        <V open={open} setOpen={setOpen} />
      </div>
    </ThemeProvider>
  );
}
