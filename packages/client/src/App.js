import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import CovidInfo from './components/CovidInfoTab';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Done from './components/auth/Done';
import NotFoundPage from './components/NotFoundPage';
import Reservation from './components/Reservation';
import Dashboard from './components/Dashboard';
import Faq from './components/Faq';
import Employee from './components/Employee';
import Employer from './components/Employer';
import Ministry from './components/Ministry';
import RemoteWork from './components/Information/RemoteWork';
import ΑllowanceCovid from './components/Information/ΑllowanceCovid';
import Departments from './components/QuickAccessInfo/Departments';
import AnnualLeave from './components/QuickAccessInfo/AnnualLeave';
import {getToken, setUserSession, removeUserSession} from './utils/Common';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setUserInStore, removeUserFromStore} from './redux-store/actions';

// https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api

const App = ({setUser, removeUser}) => {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get('http://localhost:3001/verifyToken', {
        headers: {
          'x-access-token': `${token}`,
        },
      })
      .then(response => {
        setUserSession(response.data.token);
        setUser(response.data.user);
        setAuthLoading(false);
      })
      .catch(error => {
        removeUserSession();
        removeUser();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
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
          <Route exact path="/employee" component={Employee} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/tilergasia-odigies" component={RemoteWork} />
          <Route exact path="/epidoma-800-euro" component={ΑllowanceCovid} />
          <Route exact path="/employee-leave" component={AnnualLeave} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/employer" component={Employer} />
          <Route exact path="/ministry" component={Ministry} />
          <Route exact path="/FAQ" component={Faq} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  setUser: PropTypes.func,
  removeUser: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    setUser: user => dispatch(setUserInStore(user)),
    removeUser: () => dispatch(removeUserFromStore()),
  };
}

export default connect(null, mapDispatchToProps)(App);
