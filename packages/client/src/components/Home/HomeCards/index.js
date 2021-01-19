import React from 'react';
import {Card, Grid, Header, Segment, Image, Icon} from 'semantic-ui-react';
import covidWork from '../../../images/covid.jpg';
import WorkfromHome from '../../../images/covidWork.jpg';
import covidmoney from '../../../images/covidmoney.jpg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';

export default function HomeCards() {
  return (
    <Grid centered className="background-coloring">
      <Grid.Row />
      <Grid.Row centered>
        <p className="text-size-cards"> Επικαιρότητα </p>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Link to="/COVID-info">
          <Card>
            <Image alt='οδηγίες κορονοιού' src={covidWork} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Κορωνοϊός: Κατευθυντήριες οδηγίες</Card.Header>
              <Card.Meta>
                <span className='date'>Υγεία</span>
              </Card.Meta>
              <Card.Description>
                Οι κατευθυντήριες οδηγίες βασίζονται σε αντίστοιχες οδηγίες και συστάσεις του Εθνικού Οργανισμού Δημόσιας Υγείας (Ε.Ο.Δ.Υ.), 
                της Γενικής Γραμματείας Πολιτικής Προστασίας (ΓΓΠΠ) και του Παγκόσμιου Οργανισμού Υγείας (ΠΟΥ).
              </Card.Description>
            </Card.Content>
          </Card>
          </Link>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link to="/tilergasia-odigies">
          <Card>
            <Image alt='Τηλεργασία Οδηγίες' src={WorkfromHome} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Τηλεργασία: Οδηγίες για τις δηλώσεις</Card.Header>
              <Card.Meta>
                <span className='date'>Εργασιακά</span>
              </Card.Meta>
              <Card.Description>
                Oι εργοδότες θα πρέπει μέσα στην ημέρα να δηλώσουν στο σύστημα, τους εργαζόμενους, που αναμένεται να απασχοληθούν με τηλεργασία.
              </Card.Description>
            </Card.Content>
          </Card>
          </Link>
        </Grid.Column>
        <Grid.Column width={3}>
          <Link to="/epidoma-800-euro">
          <Card>
            <Image alt='Επίδομα 800€. Αίτηση' src={covidmoney} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Επίδομα 800€: Bήματα για αίτηση</Card.Header>
              <Card.Meta>
                <span className='date'>Εργασιακά</span>
              </Card.Meta>
              <Card.Description>
                Πάνω από 33.000 εργαζόμενοι δεν κατέστη εφικτό να εισπράξουν την ειδική 
                αποζημίωση Νοεμβρίου με βάση τα 800 ευρώ. Που πρέπει να υποβάλλουν δήλωση για να τα λάβουν
              </Card.Description>
            </Card.Content>
          </Card>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
