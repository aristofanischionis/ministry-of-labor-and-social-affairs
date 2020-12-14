// import React from "react";
import logo from "../images/logo.png"
import { Menu, Dropdown, Image} from 'semantic-ui-react'
import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const countryOptions = [
  { key: 'gr', value: 'gr', flag: 'gr' },
  { key: 'us', value: 'us', flag: 'us' }
]

export default function Navigation() {
    return (
      <Router>
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
            <Menu.Item>
              <Dropdown
                options={countryOptions}
                defaultValue={countryOptions[0].value}
              />
            </Menu.Item>
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
      </Router>

    )
  }