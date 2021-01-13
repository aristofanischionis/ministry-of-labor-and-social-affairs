import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Path({sections}) {
  return (
    <Breadcrumb>
      <Breadcrumb.Section link>
        <Link to="/">Home</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section link>
        <Link to="/about">About</Link>
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>
        <Link to="/contact">Contact</Link>
      </Breadcrumb.Section>
    </Breadcrumb>
  );
}

Path.propTypes = {
  sections: PropTypes.array,
};
