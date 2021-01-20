import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReservation} from '../../redux-store/actions';
import {Link} from 'react-router-dom';

// set These values in Redux Store
function Success({ values, addReservationFunc }) {
  addReservationFunc(values)
  return (
    <div>
      <h1>Σας ευχαριστούμε για την κράτηση!</h1>
      <p>Πατήστε <Link to="/dashboard">εδώ</Link> για να δείτε όλα τα ραντεβού σας.</p>
    </div>
  );
}

Success.propTypes = {
  values: PropTypes.object,
  addReservationFunc: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    addReservationFunc: reservation => dispatch(addReservation(reservation)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Success);
