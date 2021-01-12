import React, { useState, useEffect } from "react"
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import PublicRoute from "./utils/PublicRoute"
import PrivateRoute from "./utils/PrivateRoute"
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Contact from './components/Contact'
import CovidInfo from './components/CovidInfoTab'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Done from './components/auth/Done'
import NotFoundPage from './components/NotFoundPage'
import Reservation from './components/Reservation'
import Dashboard from "./components/Dashboard"
import Faq from "./components/Faq"
import { getToken, setUserSession, removeUserSession } from './utils/Common'

// https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api

export default function App() {
  const [authLoading, setAuthLoading] = useState(true);
  
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:3001/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
      }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
      });
    }, []);
 
  if (authLoading && getToken()) {
    // TODO: make better
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
    {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */} 
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/done" component={Done} />
          <Route exact path="/COVID-info" component={CovidInfo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/FAQ" component={Faq} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
