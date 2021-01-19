import React from 'react';
import {Grid, Segment, Label, Header, Icon, Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './index.css';

export default function HomeGrid() {
  return (
    <Container fluid className="bg-image-grid">
      <Grid centered>
        <Grid.Row className="move-down-grid">
          <p className="text-size-qa">Γρήγορη πρόσβαση</p>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <Link to="/employee-leave">
              <Container fluid>
                <Segment raised>
                  <p className="p-text-size-qa">
                    <Icon color="blue" name="address card" size="big" /> &#9; Δικαιώματα και άδειες
                    εργαζομενων
                  </p>
                </Segment>
              </Container>
            </Link>
          </Grid.Column>

          <Grid.Column width={4}>
            <Link to="/departments">
              <Container fluid>
                <Segment raised>
                  <p className="p-text-size-qa">
                    <Icon color="blue" name="building" size="big" /> &#9;Τμήματα - Ιδρύματα -
                    Υπηρεσίες
                  </p>
                </Segment>
              </Container>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={4}>
            <Link>
              <Container fluid>
                <Segment raised>
                  <p className="p-text-size-qa">
                    <Icon color="blue" name="book" size="big" /> &#9; e-βιβλιοθήκη
                  </p>
                </Segment>
              </Container>
            </Link>
          </Grid.Column>
          <Grid.Column width={4}>
            <a href="https://vontikakis.com/el/ypologismos-misthou" target="_blank">
              <Container fluid>
                <Segment raised>
                  <p className="p-text-size-qa">
                    <Icon color="blue" name="calculator" size="big" /> &#9; Υπολογισμός καθαρού
                    μισθού
                  </p>
                </Segment>
              </Container>
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
