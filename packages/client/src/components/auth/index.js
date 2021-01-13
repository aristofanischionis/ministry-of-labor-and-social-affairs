// import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {Icon, Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Logout from './Logout';
import {getUserFromStore} from '../../redux-store/selector';

// error message sto login register, gmail na einai swsths morfhs

function Auth({user}) {
  const trigger = (
    <span>
      <Icon name="user circle" />
      {user.first_name}
    </span>
  );

  const options = [
    {
      key: 'user',
      text: (
        <span>
          Συνδεδεμένος ως{' '}
          <strong>
            {user.first_name} {user.last_name}
          </strong>
        </span>
      ),
      disabled: true,
    },
    {key: 'profile', text: 'Your Profile'},
    {key: 'help', text: 'Help'},
    // { key: 'settings', text: 'Settings' },
    {key: 'sign-out', text: 'Sign Out'},
  ];

  return (
    <div>
      {user.email !== '' ? (
        <Dropdown trigger={trigger} options={options} />
      ) : (
        // <Logout />
        <Link to="/login">
          <h4>Είσοδος</h4>
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
