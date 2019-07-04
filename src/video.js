import React, { useState, useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '@material-ui/core/Typography';

import v1 from './a.mp4';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='Close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  video: {
    maxWidth: '100%'
  }
}));

const Video = ({ setname, ...props }) => {
  const v = useRef(null);
  useEffect(() => {
    const src = v.current.src;
    const i = src.lastIndexOf('/');
    const name = src.substr(i + 1);
    console.log(name);
    setname(name);
  });
  return <video {...props} ref={v} />;
};

const CustomizedDialogs = props => {
  const { open, setOpen } = props;
  const [name, setname] = useState('a');
  const classes = useStyles();
  const v = useRef(null);

  useEffect(() => {
    console.log(v.current);
  });

  return (
    <Dialog maxWidth='md' fullWidth onClose={_ => setOpen(false)} open={open}>
      <DialogTitle onClose={_ => setOpen(false)}>{name}</DialogTitle>

      <MuiDialogContent dividers className={classes.root}>
        <Typography>
          <Video src={v1} controls className={classes.video} setname={setname} autoPlay />
        </Typography>
      </MuiDialogContent>
    </Dialog>
  );
};

export default CustomizedDialogs;
