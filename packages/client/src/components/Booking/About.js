import React from 'react'
import { Form, Button, Checkbox, TextArea } from 'semantic-ui-react';


const interestOptions = [
  { key: '1', value: 'sailing', label: 'Sailing' },
  { key: '2', value: 'running', label: 'Running' },
  { key: '3', value: 'golf', label: 'Golf' },
  { key: '4', value: 'football', label: 'Football' },
  { key: '5', value: 'rugby', label: 'Rugby' }
];

const About = (props) => {
  const { interests, about } = props.values;
  return (

    <React.Fragment>
      <h1 className="ui centered">Your Interests</h1>
      <Form.Group inline >
        <label>Sports</label>
        {interestOptions.map((i) =>
          <Form.Field
            control={Checkbox}
            name='interests'
            value={i.value}
            label={i.label}
            onChange={props.handleChange}
            checked={interests.includes(i.value)}
            key={i.key}
          />

        )}
      </Form.Group>

      <Form.Field
        control={TextArea}
        name="about"
        value={about}
        label='About'
        placeholder='Tell us more about you...'
        onChange={props.handleChange}
      />


      <Button onClick={props.prev}>Back</Button>
      <Button color='blue' type='submit' >Submit</Button>

    </React.Fragment>

  );
}


export { About };