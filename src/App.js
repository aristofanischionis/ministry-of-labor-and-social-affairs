import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import './App.css';
import logo from "./images/logo.png"
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
const countryOptions = [
  { key: 'gr', value: 'gr', flag: 'gr', text: 'Ελληνικά' },
  { key: 'us', value: 'us', flag: 'us', text: 'English' }
]

function App() {
  return (
    <Router>
        <div>
          <Menu stackable>
            <Menu.Item>
            <Link to="/">
              <Image src={logo} />
              </Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Link to="/about">About</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
              <Dropdown
                search
                selection
                options={countryOptions}
                placeholder='Language'
              />
            </Menu.Menu>
          </Menu>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
