import React from 'react';
import MainFormContainer from '../Booking'
import { Container } from 'semantic-ui-react';

export default function Reservation() {
  return(
    <Container textAlign='center'>
    <h1>Multi Step Form with Semantic UI</h1>
    <MainFormContainer />
    </Container>
  )
}
