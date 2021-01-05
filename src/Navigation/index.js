// import React from "react";
import logo from "../images/logo.png"
import { Menu, Dropdown, Image} from 'semantic-ui-react'
import Home from '../Home'
import Contact from '../Contact'
import Info from '../Info'
import Auth from '../Auth'
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

const options = [
  { key: 'general', text: 'Γενικές πληροφορίες', as: Link, to: '/Info#general' },
  { key: 'employer', text: 'Για τον Εργοδότη', as: Link, to: '/Info#employer' },
  { key: 'employee', text: 'Για τον Εργαζόμενο', as: Link, to: '/Info#employee' },
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
              <Dropdown text='Πληροφορίες για τον COVID' color="blue" options={options}/>                
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
            <Menu.Item>
              <Auth />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Info">
            <Info />
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