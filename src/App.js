import React from "react"

import './App.css';
import Footer from './Footer'


import Navigation from './Navigation'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
