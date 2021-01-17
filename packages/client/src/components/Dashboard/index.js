import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, Grid, Segment, Menu, activeItem} from 'semantic-ui-react';
import {getUserFromStore} from '../../redux-store/selector';

const Dashboard = ({user}) => {
    
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
