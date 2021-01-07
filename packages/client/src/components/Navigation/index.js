import React from "react";
import logo from "../../images/logo.png"
import { Menu, Dropdown, Image} from 'semantic-ui-react'
import Home from '../Home'
import Contact from '../Contact'
import CovidInfo from '../CovidInfo'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Done from '../auth/Done'
import NotFoundPage from '../NotFoundPage'

import './index.css'
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
  { key: 'general', text: 'Γενικές πληροφορίες', as: Link, to: '/COVID-info#general' },
  { key: 'employer', text: 'Για τον Εργοδότη', as: Link, to: '/COVID-info#employer' },
  { key: 'employee', text: 'Για τον Εργαζόμενο', as: Link, to: '/COVID-info#employee' },
]

export default function Navigation() {
    return (
      <Router>
        <div className="sticky-navbar">
          <Menu stackable>
            <Menu.Item>
              <Link to="/">
                <Image src={logo} size="medium" />
              </Link>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item className="colored">
                <Dropdown text='Πληροφορίες για τον COVID' options={options} />                
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
                {/* <Auth /> */}
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/done" component={Done} />
          <Route exact path="/COVID-info" component={CovidInfo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>

    )
  }