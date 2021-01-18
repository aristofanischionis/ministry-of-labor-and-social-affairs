import React from 'react';
import Booking from '../Booking';
import {Container} from 'semantic-ui-react';

export default function Reservation() {
  return (
    <Container textAlign="center">
      <h1>Κάντε Κράτηση</h1>
      <Booking />
    </Container>
  );
}
