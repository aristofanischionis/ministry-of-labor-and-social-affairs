import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import history from "../../utils/history"
import { setUserSession } from '../../utils/Common';

// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js
// login help

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3001/api/login', { email: email, password: password }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      // when the user logs in goes to /Home, 
      // TODO: Try this again
      // history.push('/');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
  // take email and password from form
    return (
      <Layout header="Είσοδος">
        <Form loading={loading}>
        <Form.Input
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="Διεύθυνση e-mail"
          className="auth-input-field"
          onChange={e => setEmail(e.target.value)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="auth-input-field"
          onChange={e => setPassword(e.target.value)}
        />
        <Button color="teal" fluid size="huge" onClick={handleLogin} disabled={loading}>
          <Link to="/">Είσοδος</Link>
        </Button>
        </Form>
        <Message size="big">
          <Link to="/signup">Not Registered?</Link>
        </Message>
    </Layout>
    );
}
