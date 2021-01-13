import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Form, Message, Header, Grid, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setUserInStore} from '../../redux-store/actions';
import {setUserSession} from '../../utils/Common';
import {useHistory} from 'react-router-dom';
import './index.css';
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
// login help

const Login = ({setUser}) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  // handle button click of login form
  const handleLogin = () => {
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
      .catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError('Something went wrong. Please try again later.');
      });
  };

  // take email and password from form
  return (
    <Segment style={{padding: '6em 4em'}} vertical>
      <Grid centered className="align-text">
        <Grid.Column width={4}>
          <Segment raised>
            {/* <img src={logo} alt="Logo" className="auth-logo" /> */}
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
