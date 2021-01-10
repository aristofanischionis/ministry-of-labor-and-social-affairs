import React, { useState, useEffect } from "react"
import axios from 'axios'
import './App.css';
import Footer from './components/Footer'
import Navigation from './components/Navigation'
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
      </div>
      <Footer />
    </div>
  );
}
