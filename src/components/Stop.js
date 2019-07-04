import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { stop } from '../reducers';

/* const mapStateToProps = state => {
  return { ...state };
}; */

const Stop = props => {
  return (
    <Button variant='contained' color='primary' fullWidth {...props}>
      结束
    </Button>
  );
};

export default Stop;

// export default connect(
//   mapStateToProps,
//   { stop }
// )(Stop);
