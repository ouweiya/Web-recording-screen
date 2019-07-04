import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
// import clsx from 'clsx';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';
import Play from '@material-ui/icons/PlayCircleFilledWhite';
import MdFileDownload from '@material-ui/icons/GetApp';
// import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';

import V from './video';

import v1 from './a.mp4';
import v2 from './b.mp4';
import bg from './a.png';

import Zhishi from './Zhishi';
import { liu } from './liu';

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
    height: 380,
    textAlign: 'center',
    position: 'relative',
    background: `url(${bg})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    width: 300
  },
  icon: {
    fontSize: 60,
    color: '#ffffffc4'
  },
  downicon: {
    fontSize: 35,
    color: '#ffffffc4'
  },
  down: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  '@keyframes one': {
    to: {
      boxShadow: '0 0 0px 5px #f51d1d94'
    }
  },
  radio: {
    color: 'red',
    position: 'absolute',
    right: 10,
    top: 10,
    boxShadow: '0 0 0 #f51d1d94',
    borderRadius: '50%',
    textShadow: '0 0 10px red',
    animation: '$one 1s ease-in-out infinite alternate'
  },
  radio1: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  video: {
    width: '100%',
    height: 'auto'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [start, setStart] = useState(false);
  const [videoArr, setvideoArr] = useState([]);

  const ref = useRef(null);

  const fun = src => {
    setSrc(src);
    setOpen(true);
  };

  const down = src => {
    const a = document.createElement('a');
    const i = src.lastIndexOf('/');
    const name = src.substr(i + 1);
    a.href = src;
    a.download = name;
    a.click();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={classes.root}>
        <Grid container justify='center' spacing={3}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              disabled={start}
              className={classes.button}
              onClick={_ => {
                setStart(true);
                liu();
              }}
            >
              开始
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={_ => {
                setStart(false);
              }}
            >
              停止
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='column' alignItems='center' spacing={3}>
          <Grid item>
            <Paper className={classes.paper}>
              <ButtonBase onClick={fun.bind(null, v1)}>
                <Play className={classes.icon} />
              </ButtonBase>
              <ButtonBase className={classes.down} onClick={down.bind(null, v1)}>
                <MdFileDownload className={classes.downicon} />
              </ButtonBase>
              <Zhishi />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <video ref={ref} autoPlay className={classes.video} />
              <Zhishi />
            </Paper>
          </Grid>
        </Grid>

        <V open={open} setOpen={setOpen} src={src} />
      </div>
    </ThemeProvider>
  );
}
