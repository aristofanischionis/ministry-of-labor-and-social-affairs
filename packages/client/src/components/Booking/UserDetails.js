import React from 'react';
import {Form, Button, Input, Select} from 'semantic-ui-react';

const UserDetails = props => {
  const {firstName, lastName, email, speciality} = props.values;
  let specOptions = [];
  specOptions.push({text: 'Εργοδότης', value: 'Εργοδότης'});
  specOptions.push({text: 'Εργαζόμενος', value: 'Εργαζόμενος'});

  return (
    <React.Fragment>
      <h1 className="ui centered">User Details</h1>
      <Form.Group widths="equal">
        <Form.Input
          label="First Name"
          value={firstName}
          name="firstName"
          onChange={props.handleChange}
        />

        <Form.Input
          label="Last Name"
          value={lastName}
          name="lastName"
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Input label="Email" value={email} name="email" onChange={props.handleChange} />
      <Form.Select
        label="Ειδικότητα"
        name="speciality"
        value={speciality}
        options={specOptions}
        placeholder="Επιλογή ειδικότητας"
        onChange={props.handleChange}
      />
      <Button onClick={props.next}>Next</Button>
    </React.Fragment>
  );
};

export {UserDetails};
