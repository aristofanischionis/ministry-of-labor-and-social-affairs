import React from "react"
import './App.css';
import Footer from './components/Footer'
import Navigation from './components/Navigation'

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
