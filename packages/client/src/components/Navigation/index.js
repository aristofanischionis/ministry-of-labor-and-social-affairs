import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo2.png';
import {Menu, Dropdown, Image} from 'semantic-ui-react';
import Auth from '../auth';
import SearchBar from '../SearchBar';
import './index.css';

const countryOptions = [
  {key: 'gr', value: 'gr', flag: 'gr'},
  {key: 'us', value: 'us', flag: 'us'},
];

export default function Navigation() {
  return (
    <div className="sticky-navbar">
      <Menu stackable>
        <Menu.Item>
          <Link to="/">
            <Image alt="εικονίδιο υπουργείου εργασίας" src={logo} size="medium" />
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Link style={{color: 'black'}} to="/employer">
              Εργοδότης
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link style={{color: 'black'}} to="/employee">
              Εργαζόμενος
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link style={{color: 'black'}} to="/ministry">
              Υπουργείο
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link style={{color: 'black'}} to="/contact">
              Επικοινωνία
            </Link>
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
