import React from 'react';
import {Grid, Segment, Label, Header, Icon, Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';

export default function HomeGrid() {
  return (
    <Container fluid className="bg-image">
      <Grid centered >
        <Grid.Row  className='move-down' >
          <Header>Γρήγορη πρόσβαση</Header>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label className="paint-yellow" size="large" attached="top">
                  Δικαιώματα και άδειες εργαζομενων.
                </Label>
                <Icon name="address card" size="huge" className="paint-blue" />
              </Segment>
            </Link>
          </Grid.Column>

          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label className="paint-yellow" size="large" attached="top">
                  <u>Κορωνοϊός</u>: &nbsp;Κατευθυντήριες οδηγίες.
                </Label>
                <Icon name="heart" size="huge" className="paint-blue" />
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label className="paint-yellow" size="large" attached="top">
                  <u>Τηλεργασία</u> &nbsp;: Οδηγίες για τις δηλώσεις.
                </Label>
                <Icon name="home" size="huge" className="paint-blue" />
              </Segment>
            </Link>
          </Grid.Column>
          <Grid.Column width={3}>
            <Link>
              <Segment raised>
                <Label className="paint-yellow" size="large" attached="top">
                  <u>Άδεια ειδικού σκοπού</u>
                </Label>
                <Icon name="home" size="huge" className="paint-blue" />
              </Segment>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
