import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import PublicRoute from "../../utils/PublicRoute"
import PrivateRoute from "../../utils/PrivateRoute"
import logo from "../../images/logo.png"
import { Menu, Dropdown, Image, Button} from 'semantic-ui-react'
import Home from '../Home'
import Contact from '../Contact'
import CovidInfo from '../CovidInfo'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Done from '../auth/Done'
import NotFoundPage from '../NotFoundPage'
import SearchBar from '../SearchBar'
import Reservation from '../Reservation'
import Dashboard from "../Dashboard";
import Auth from '../auth'
import './index.css'

const countryOptions = [
  { key: 'gr', value: 'gr', flag: 'gr' },
  { key: 'us', value: 'us', flag: 'us' }
]

// const options = [
//   { key: 'general', text: 'Γενικές πληροφορίες', as: Link, to: '/COVID-info#general' },
//   { key: 'employer', text: 'Για τον Εργοδότη', as: Link, to: '/COVID-info#employer' },
//   { key: 'employee', text: 'Για τον Εργαζόμενο', as: Link, to: '/COVID-info#employee' },
// ]

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
              <Menu.Item>
                <Button content='Primary'><Link to="/COVID-info">Πληροφορίες COVID</Link></Button>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ergodotis">Εργοδότης</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ergazomenos">Εργαζόμενος</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/ministry">Υπουργείο</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/contact">Επικοινωνία</Link>
              </Menu.Item>
              <Menu.Item>
                <Dropdown
                  options={countryOptions}
                  defaultValue={countryOptions[0].value}
                />
              </Menu.Item>
              <Menu.Item>
                <SearchBar />
              </Menu.Item>
              <Menu.Item>
                <Auth />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */} 
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/done" component={Done} />
          <Route exact path="/COVID-info" component={CovidInfo} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }