import React, { useState, useRef, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Start from './components/Start';
import Stop from './components/Stop';
import { Video } from './components/Content';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10
  }
}));

export default function App() {
  const classes = useStyles();
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const [stream, setStream] = useState(null);

  const start = () => {
    (async () => {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
      setStream(stream);
      ref.current.srcObject = stream;
      setToggle(true);
      stream.getVideoTracks()[0].onended = () => {
        setToggle(false);
      };
    })();
  };

  const stop = () => {
    console.log(stream);
    stream && stream.getTracks().forEach(track => track.stop());
    setToggle(false);
  };

  useEffect(() => {
    console.log('useEffect');
    // ref.current.autoplay = true;
    // ref.current.controls = true;
  });

  return (
    <>
      <Container maxWidth='md'>
        <Grid container spacing={1} className={classes.root}>
          <Grid item xs={6}>
            <Start onClick={start} disabled={toggle} />
          </Grid>
          <Grid item xs={6}>
            <Stop onClick={stop} />
          </Grid>

          <Grid item xs={12}>
            <Video ref={ref} autoPlay />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
