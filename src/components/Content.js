import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import v from '../a.mp4';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    height: 450
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
    <Paper className={classes.paper}>
      <video className={classes.video} ref={ref} {...props} />
    </Paper>
  );
});
