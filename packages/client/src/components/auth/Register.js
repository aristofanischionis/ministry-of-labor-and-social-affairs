import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Form, Message, Segment, Grid, Header} from 'semantic-ui-react';
import axios from 'axios';
import {setUserSession} from '../../utils/Common';
import {setUserInStore} from '../../redux-store/actions';
import {useHistory} from 'react-router-dom';

// send request to db to verify
// error message if something is wrong
const Register = ({setUser}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // check if these two are same
  const [confPassword, setConfPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  // handle button click of login form
  const handleLogin = () => {
    // check passwoards match
    // TODO: show an ERROR message
    if (password !== confPassword) {
      setError(true);
      return;
    }
    setError(null);
    setLoading(true);
    axios
      .post('http://localhost:3001/api/register', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      })
      .then(response => {
        setLoading(false);
        setUserSession(response.data.token);
        setUser(response.data.user);
        history.push('/');
      })
      .catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <Segment style={{padding: '3em'}} vertical>
      <Grid centered className="align-text">
        <Grid.Column width={5}>
          <Segment raised>
            {/* <img src={logo} alt="Logo" className="auth-logo" /> */}
            <Form loading={loading}>
              <Header as="h2" color="black" textAlign="center">
                Εγγραφείτε εδώ
              </Header>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Όνομα"
                onChange={e => setFirstName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Επώνυμο"
                onChange={e => setLastName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="Διεύθυνση e-mail"
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Κωδικός"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Επιβεβαιώστε τον κωδικό"
                type="password"
                onChange={e => setConfPassword(e.target.value)}
              />
              <Button color="blue" circular onClick={handleLogin} disabled={loading}>
                Εγγραφή
              </Button>
            </Form>
            <Message>
              <Link to="/login">Έχετε ήδη λογαριασμό;</Link>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

Register.propTypes = {
  setUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserInStore(user)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
