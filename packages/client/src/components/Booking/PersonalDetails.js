import React from 'react'
import { Form, Button, Input, Select, Radio, Grid } from 'semantic-ui-react';
import Calendar from './Calendar'
const genderOptions = [
  { key: 'm', label: 'Male', value: 'male' },
  { key: 'f', label: 'Female', value: 'female' }
]


const PersonalDetails = (props) => {
  const { gender, age, country } = props.values;

  let ageOptions = []
  for (var i = 18; i < 30; i++) {
    ageOptions.push({ text: i, value: i })
  }

  return (

    <React.Fragment>
      <h1 className="ui centered">Personal Details</h1>


      <Calendar></Calendar>
      <br/>

      <Button onClick={props.prev}>Back</Button>
      <Button onClick={props.next}>Next</Button>
    </React.Fragment>


  );
}


export { PersonalDetails };