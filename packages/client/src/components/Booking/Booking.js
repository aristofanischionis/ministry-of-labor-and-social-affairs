import React from 'react';
import {Container} from 'semantic-ui-react';
import {UserDetails} from './UserDetails';
import {PersonalDetails} from './PersonalDetails';
import {Success} from './Success';
import {Form} from 'semantic-ui-react';

// TODO: Needs work
export class Booking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      speciality: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    //just show the success page (step 4 )
    this.setState(prevState => {
      return {
        ...prevState,
        step: 3,
      };
    });
  };

  handleChange = ({name, value}) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  next = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  prev = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  render() {
    const {step} = this.state;
    const {firstName, lastName, email, speciality} = this.state;
    const values = {firstName, lastName, email, speciality};

    return (
      <Container textAlign="left">
        <Form onSubmit={this.handleSubmit}>
          <Step
            step={step}
            values={values}
            handleChange={this.handleChange}
            next={this.next}
            prev={this.prev}
          />
        </Form>
      </Container>
    );
  }
}

const Step = ({step, values, handleChange, next, prev}) => {
  switch (step) {
    case 1:
      return <UserDetails values={values} handleChange={handleChange} next={next} />;
    case 2:
      return (
        <PersonalDetails values={values} handleChange={handleChange} next={next} prev={prev} />
      );
    case 3:
      return <Success values={values} />;
    default:
      return null;
  }
};
