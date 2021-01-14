import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
import covidWork from '../../../images/covid.jpg';
import WorkfromHome from '../../../images/covidWork.jpg';

export default function HomeCards() {
  return (
    <Grid centered>
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <Card
            image={covidWork}
            header="Κορωνοϊός:&nbsp;Κατευθυντήριες οδηγίες."
            meta="Υγεία"
            description="Οι κατευθυντήριες οδηγίες βασίζονται σε αντίστοιχες οδηγίες και συστάσεις του Εθνικού Οργανισμού Δημόσιας Υγείας (Ε.Ο.Δ.Υ.), 
                    της Γενικής Γραμματείας Πολιτικής Προστασίας (ΓΓΠΠ) και του Παγκόσμιου Οργανισμού Υγείας (ΠΟΥ).
                    "
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Card
            image={WorkfromHome}
            header="Τηλεργασία:&nbsp;Οδηγίες για τις δηλώσεις."
            meta="Εργασιακά"
            description="Oι εργοδότες θα πρέπει μέσα στην ημέρα να δηλώσουν στο σύστημα, τους εργαζόμενους, που αναμένεται να απασχοληθούν με τηλεργασία."
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Card
            image={WorkfromHome}
            header="Επίδομα 800€:&nbsp;Bήματα για αίτηση"
            meta="Εργασιακά"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
