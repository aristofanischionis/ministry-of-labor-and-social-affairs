import React, {useState, useEffect} from 'react';
import {Button, Icon, Tab, Header, Grid, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './index.css';
import Pdf2 from '../../../Docs/2.pdf';
import Pdf1 from '../../../Docs/1.pdf';

// This open proxy is used in order to add 'Access-Control-Allow-Origin' header = *
// to our request and get covidInfo when Using Firefox
// https://github.com/Rob--W/cors-anywhere/#documentation
const openProxy = 'https://cors-anywhere.herokuapp.com/';

const panes = [
  {
    menuItem: 'Νέα - Ανακοινώσεις',
    render: () => (
      <Tab.Pane attached={true}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              30/07/2020
            </Grid.Column>
            <Grid.Column width={12}>
            <Header as='h5'>Η ΧΡΗΣΗ ΜΑΣΚΑΣ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΗ ΓΙΑ ΤΟ ΚΟΙΝΟ ΠΟΥ ΠΡΟΣΕΡΧΕΤΑΙ ΓΙΑ ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΧΩΡΟΥΣ ΓΡΑΦΕΙΩΝ ΔΗΜΟΣΙΩΝ ΥΠΗΡΕΣΙΩΝ</Header>
            <p>Στο πλαίσιο των έκτακτων μέτρων αντιμετώπισης του κινδύνου διασποράς του κορωνοϊου COVID-19 (Δ1α/ΓΠ.οικ.48002/28-7-2020 Κοινή Υπουργική Απόφαση, Β’ 3131) </p>
            <a href = {Pdf1} target = "_blank">Download<Icon name='file pdf outline'></Icon></a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              21/07/2020
            </Grid.Column>
            <Grid.Column width={12}>
            <Header as='h5'>ΥΠΟΒΟΛΗ ΔΗΛΩΣΕΩΝ ΤΗΣ Β’ ΦΑΣΗΣ ΓΙΑ ΤΟΝ ΜΗΧΑΝΙΣΜΟ ΣΥΝ-ΕΡΓΑΣΙΑ / ΟΡΘΕΣ ΕΠΑΝΑΛΗΨΕΙΣ (NA_2020-07-21)</Header>
            <p>για τον μήνα Ιούνιο 2020  </p>
            <a href = {Pdf2} target = "_blank">Download<Icon name='file pdf outline'></Icon></a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Δελτία Τύπου',
    render: () => (
      <Tab.Pane attached={true}>
                <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              30/07/2020
            </Grid.Column>
            <Grid.Column width={12}>
            <Header as='h5'>Η ΠΡΟΛΗΨΗ ΤΩΝ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΑΣΘΕΝΕΙΩΝ</Header>
            <p><b>Στόχος:</b> Η συλλογική προσπάθεια των κυβερνήσεων και των οργανώσεων των εργοδοτών και των εργαζομένων, 
            η καταπολέμηση αυτής της «κρυφής επιδημίας» θα πρέπει να έχει εξέχουσα θέση στα νέα παγκόσμια και εθνικά
            προγράμματα για την ασφάλεια και την υγεία στην εργασία.
            </p>
            <a href = 'https://osha.europa.eu/el/themes/work-related-diseases' target = "_blank">Περισσότερα</a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  }
];

export default function CovidInfoTab() {
  return (
    <Grid className="background-coloring-tabs">
      <Grid.Row className="move-down" centered>
        <Header>Νέα - Ανακοινώσεις</Header>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
