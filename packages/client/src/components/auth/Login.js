import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Form, Message, Header, Grid, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setUserInStore} from '../../redux-store/actions';
import {setUserSession} from '../../utils/Common';
import {useHistory} from 'react-router-dom';
import fail from '../Alerts/fail';
import './index.css';

const Login = ({setUser}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const isEmailValid = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // handle button click of login form
  const handleLogin = () => {
    if (!isEmailValid()) {
      fail('Το email δεν έχει σωστή μορφή');
      setError(true);
      history.push('/login');
      return;
    }

    setError(null);
    setLoading(true);
    axios
      .post('http://localhost:3001/api/login', {email: email, password: password})
      .then(response => {
        setLoading(false);
        setUserSession(response.data.token);
        setUser(response.data.user);
        history.push('/');
      })
      .catch(err => {
        setLoading(false);
        if (err.response.status === 401) fail('Ο κωδικός ή το email δεν είναι σωστό');
        else fail('Κάτι πήγε λάθος. Παρακαλώ προσπαθήστε ξανά αργότερα.');
        setError(true);
      });
  };

  return (
    <Segment style={{padding: '6em 4em'}} vertical>
      <Grid centered className="align-text">
        <Grid.Column width={4}>
          <Segment raised>
            <Form loading={loading}>
              <Header as="h2" color="black" textAlign="center">
                Είσοδος
              </Header>
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
              <Button color="blue" circular onClick={handleLogin} disabled={loading}>
                Είσοδος
              </Button>
            </Form>
            <Message>
              <Link to="/register">Δεν έχετε λογαριασμό;</Link>
            </Message>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

Login.propTypes = {
  setUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserInStore(user)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
