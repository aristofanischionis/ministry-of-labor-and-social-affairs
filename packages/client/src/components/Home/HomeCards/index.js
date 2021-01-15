import React from 'react';
import {Card, Grid, Segment} from 'semantic-ui-react';
import covidWork from '../../../images/covid.jpg';
import WorkfromHome from '../../../images/covidWork.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function HomeCards() {
  return (
    <Grid centered>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Link to="/COVID-info">
            <Card
              image={covidWork}
              header="Κορωνοϊός: Κατευθυντήριες οδηγίες."
              meta="Υγεία"
              description="Οι κατευθυντήριες οδηγίες βασίζονται σε αντίστοιχες οδηγίες και συστάσεις του Εθνικού Οργανισμού Δημόσιας Υγείας (Ε.Ο.Δ.Υ.), 
              της Γενικής Γραμματείας Πολιτικής Προστασίας (ΓΓΠΠ) και του Παγκόσμιου Οργανισμού Υγείας (ΠΟΥ)."
            />
          </Link>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link to="/tilergasia-odigies">
            <Card
              image={WorkfromHome}
              header="Τηλεργασία: Οδηγίες για τις δηλώσεις."
              meta="Εργασιακά"
              description="Oι εργοδότες θα πρέπει μέσα στην ημέρα να δηλώσουν στο σύστημα, τους εργαζόμενους, που αναμένεται να απασχοληθούν με τηλεργασία."
            />
          </Link>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link to="/epidoma-800-euro">
            <Card
              image={WorkfromHome}
              header="Επίδομα 800€: Bήματα για αίτηση"
              meta="Εργασιακά"
              description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
            />
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
