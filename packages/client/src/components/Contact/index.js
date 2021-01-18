import React, {useState} from 'react';
import Iframe from 'react-iframe';
import {Header, Segment, Form, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import success from '../Alerts/success';
import './index.css';
// TODO: IMPORTANT
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
// PERFECT LINK TO HELP US WRITE PAGES

export default function Contact() {
  const square = {width: 135, height: 135};
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  // It doesn't actually send anything anywhere
  // but I have all the info in the above variables so it's super easy to do something with them
  const handleClick = () => {
    success('Το μήνυμα σας εστάλη με επιτυχία');
    setName('');
    setSurname('');
    setEmail('');
    setText('');
  };

  return (
    <div className="contact-page">
      <Header as="h2" style={{padding: '1em 0em'}} textAlign="center">
        Επικοινωνήστε με το Υπουργείο
      </Header>
      <Segment style={{padding: '6em 0em'}} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={6}>
              <Header as="h3">Φόρμα επικοινωνίας</Header>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    placeholder="Όνομα"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                  <Form.Input
                    fluid
                    placeholder="Επίθετο"
                    onChange={e => setSurname(e.target.value)}
                    value={surname}
                  />
                </Form.Group>
                <Form.Input
                  fluid
                  placeholder="Email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                <Form.TextArea
                  placeholder="Μήνυμα"
                  onChange={e => setText(e.target.value)}
                  value={text}
                />
                <Form.Button circular floated="right" color="blue" onClick={handleClick}>
                  Αποστολή
                </Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={4}>
              <Grid.Row>
                <Header as="h3">Τηλέφωνο Επικοινωνίας:</Header>
                <Header.Subheader>213-1516649</Header.Subheader>
              </Grid.Row>
              <Grid.Row style={{padding: '2em 0em'}}>
                <Header as="h3">Ωράριο</Header>
                <Header.Subheader>Τρίτη-Παρασκευή</Header.Subheader>
                <Header.Subheader>Όλο το 24ωρο</Header.Subheader>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column floated="right" width={4}>
              <Segment circular style={square} className="reservation-button">
                <Link to="/reservation">
                  <Header as="h3" className="white-text">
                    Κράτηση
                  </Header>
                </Link>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Put the map */}
      <Segment style={{padding: '0em 0em'}} vertical>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.859105629966!2d23.72889101511922!3d37.9804172797225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3bad145a41%3A0x6db1fc0cbb58a00a!2sMinistry%20of%20Labour%20and%20Social%20Affairs!5e0!3m2!1sen!2sgr!4v1610143845123!5m2!1sen!2sgr"
          width="100%"
          height="350em"
          frameborder="0"
          style={{border: 0}}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          display="initial"
          position="relative"
        />
      </Segment>
    </div>
  );
}
