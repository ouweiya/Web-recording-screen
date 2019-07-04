import { createAction, createReducer } from 'redux-starter-kit';
// import store from './store';

export const togglehandler = createAction('toggle');
export const start1 = createAction('start');
export const stop = createAction('stop');

let stream = null;
const starthandler = ({ ...props }) => {
  (async () => {
    stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    stream.getVideoTracks()[0].onended = () => {
      console.log('end');
      // store.dispatch(stop());
    };
  })();
};

export default createReducer(
  { start: false },
  {
    [start1]: (state, action) => {
      starthandler();
      return { start: true };
    },
    [stop]: (state, action) => {

      return false;
    }
  }
);
