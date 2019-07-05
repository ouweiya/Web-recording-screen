import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Zhishi from './Zhishi';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    height: 500,
    position: 'relative',
    background: '#eee',
    backgroundClip: 'content-box'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    background: '#eee'
  }
}));

export const Video = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} id='box'>
      <video
        className={classes.video}
        ref={ref}
        {...props}
        style={{ display: props.autoPlay ? 'block' : 'none' }}
      />
      {props.autoPlay && <Zhishi />}
    </Paper>
  );
});
