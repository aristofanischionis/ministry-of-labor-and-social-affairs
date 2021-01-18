import React from 'react';
import {Link} from 'react-router-dom';
import {removeUserSession} from '../../utils/Common';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {removeUserFromStore} from '../../redux-store/actions';

const Logout = ({removeUser}) => {
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    removeUser();
  };

  return (
    <div onClick={handleLogout}>
      <Link to="/">
        <h4>Έξοδος</h4>
      </Link>
    </div>
  );
};

Logout.propTypes = {
  removeUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    removeUser: () => dispatch(removeUserFromStore()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
