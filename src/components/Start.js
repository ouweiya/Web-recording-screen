import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { start1 } from '../reducers';

// const mapStateToProps = state => {
//   return { ...state };
// };

const Start = props => {
  return (
    <Button variant='contained' color='primary' fullWidth {...props}>
      开始
    </Button>
  );
};

export default Start;
// export default connect(
//   mapStateToProps,
//   { start1 }
// )(Start);

// console.log(toggle);
// let stream = null;
// const start = () => {
//   (async () => {
//     stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
//     await togglehandler(!!stream);
//     stream.getVideoTracks()[0].onended = () => {
//       togglehandler(false);
//     };
//   })();
// };
//
// const stop = () => stream.getTracks().forEach(track => track.stop())   ;
