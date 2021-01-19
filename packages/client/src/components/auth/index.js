// import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Icon, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Logout from './Logout';
import {getUserFromStore} from '../../redux-store/selector';

function Auth({user}) {
  const trigger = (
    <span>
      <Icon name="user circle" />
      {user.first_name}
    </span>
  );

  return (
    <div>
      {user.email !== '' ? (
        <Dropdown trigger={trigger}>
          <Dropdown.Menu>
            <Dropdown.Item disabled>
              Συνδεδεμένος ως{' '}
              <strong>
                {user.first_name} {user.last_name}
              </strong>
            </Dropdown.Item>
            <Link to="/dashboard" style={{color: 'black'}}>
              <Dropdown.Item>Το προφίλ μου</Dropdown.Item>
            </Link>
            <Link to="/help" style={{color: 'black'}}>
              <Dropdown.Item>Βοήθεια</Dropdown.Item>
            </Link>
            <Dropdown.Item>
              <Logout />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Link to="/login">
          <h4 style={{color: '#4d5bc9'}}>Είσοδος</h4>
        </Link>
      )}
    </div>
  );
}

Auth.propTypes = {
  user: PropTypes.object,
};

export default connect(
  state => ({
    user: getUserFromStore(state),
  }),
  null
)(Auth);
