import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';

function UserDetails ({ values, handleChange, next }) {
  const { firstName, lastName, email, speciality, date, time } = values;
  let specOptions = [];
  specOptions.push({text: 'Εργοδότης', value: 'Εργοδότης'});
  specOptions.push({text: 'Εργαζόμενος', value: 'Εργαζόμενος'});

  const handleClickFirstName = (e) => {
    handleChange('firstName', e.target.value)
  }
  const handleClickLastName = (e) => {
    handleChange('lastName', e.target.value)
  } 
  const handleClickEmail = (e) => {
    handleChange('email', e.target.value)
  } 
  const handleClickSpeciality = (e) => {
    handleChange('speciality', e.target.value)
  } 

  return (
    <React.Fragment>
      <h1 className="ui centered">Στοιχεία χρήστη</h1>
        <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            defaultValue={firstName}
            name="firstName"
            onChange={handleClickFirstName}
          />
          <Form.Input
            label="Last Name"
            defaultValue={lastName}
            name="lastName"
            onChange={handleClickLastName}
          />
        </Form.Group>
        <Form.Input label="Email" defaultValue={email} name="email" onChange={handleClickEmail} />
        <Form.Select
          label="Ειδικότητα"
          name="speciality"
          defaultValue={speciality}
          options={specOptions}
          placeholder="Επιλογή ειδικότητας"
          onChange={handleClickSpeciality}
        />
      <Button onClick={next}>Next</Button>
    </React.Fragment>
  );
};

UserDetails.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  next: PropTypes.func
};

export{UserDetails}