import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import {Menu, Dropdown, Image, Button} from 'semantic-ui-react';
import Auth from '../auth';
import SearchBar from '../SearchBar';
import './index.css';

const countryOptions = [
  {key: 'gr', value: 'gr', flag: 'gr'},
  {key: 'us', value: 'us', flag: 'us'},
];

// const options = [
//   { key: 'general', text: 'Γενικές πληροφορίες', as: Link, to: '/COVID-info#general' },
//   { key: 'employer', text: 'Για τον Εργοδότη', as: Link, to: '/COVID-info#employer' },
//   { key: 'employee', text: 'Για τον Εργαζόμενο', as: Link, to: '/COVID-info#employee' },
// ]

export default function Navigation() {
  return (
    <div className="sticky-navbar">
      <Menu stackable>
        <Menu.Item>
          <Link to="/">
            <Image src={logo} size="medium" />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link to="/employer">Εργοδότης</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/employee">Εργαζόμενος</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/ministry">Υπουργείο</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact">Επικοινωνία</Link>
          </Menu.Item>
          <Menu.Item>
            <Dropdown options={countryOptions} defaultValue={countryOptions[0].value} />
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
  );
}
