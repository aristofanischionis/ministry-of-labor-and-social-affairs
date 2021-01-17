import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Button, Form, Message, Segment, Grid, Header} from 'semantic-ui-react';
import axios from 'axios';
import {setUserSession} from '../../utils/Common';
import {setUserInStore} from '../../redux-store/actions';
import {useHistory} from 'react-router-dom';
import fail from '../Alerts/fail';

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

  const isEmailValid = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // handle button click of register form
  const handleLogin = () => {
    if (password !== confPassword) {
      fail('Οι δύο κωδικοί δεν ταιριάζουν');
      setError(true);
      history.push('/register');
      return;
    }

    if (password === '') {
      fail('Ο κωδικός δεν μπορεί να είναι κενός');
      setError(true);
      history.push('/register');
      return;
    }

    if (first_name === '') {
      fail('Το όνομα δεν μπορεί να είναι κενό');
      setError(true);
      history.push('/register');
      return;
    }

    if (last_name === '') {
      fail('Το επίθετο δεν μπορεί να είναι κενό');
      setError(true);
      history.push('/register');
      return;
    }

    if (!isEmailValid()) {
      fail('Το email δεν έχει σωστή μορφή');
      setError(true);
      history.push('/register');
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
      .catch(err => {
        setLoading(false);
        if (err.response.status === 401) setError(err.response.data.message);
        else setError('Κάτι πήγε λάθος. Παρακαλώ προσπαθήστε ξανά αργότερα.');
        fail(error);
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
