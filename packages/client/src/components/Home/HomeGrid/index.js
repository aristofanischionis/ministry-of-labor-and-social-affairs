import React from 'react';
import {Grid, Segment, Label, Header, Icon, Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';

export default function HomeGrid() {
  return (
    <Container fluid className="bg-image">
      <Grid centered>
        <Grid.Row className="move-down">
          <Header>Γρήγορη πρόσβαση</Header>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Link to='/employee-leave'>
              <Segment raised>
                <Label size="large" attached="top">
                  <Header as='h4'>Δικαιώματα και άδειες εργαζομενων</Header>
                </Label>
                <Icon name="address card outline" size="big"/>
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column width={3}>
            <Link to='/departments'>
              <Segment raised>
                <Label size="large" attached="top">
                 <Header as='h4'>Τμήματα - Ιδρύματα - Υπηρεσίες</Header>
                </Label>
                <Icon name="building outline" size="big"/>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label size="large" attached="top">
                  <Header as='h4'>e-βιβλιοθήκη</Header>
                </Label>
                <Icon name="address book outline" size="big"/>
              </Segment>
            </Link>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label size="large" attached="top">
                  <Header as='h4'>Eκστρατεια ενημέρωσης</Header>
                </Label>
                <Icon name="newspaper outline" size="big"/>
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
