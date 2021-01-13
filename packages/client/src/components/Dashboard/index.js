// import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUserFromStore} from '../../redux-store/selector';

const Dashboard = ({user}) => {
  return <div>I am a secured Dashboard, hello {user.first_name}</div>;
};

Dashboard.propTypes = {
  user: PropTypes.object,
};

export default connect(
  state => ({
    user: getUserFromStore(state),
  }),
  null
)(Dashboard);
