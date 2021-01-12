import React from 'react'
import { Button, Icon, Tab, Header, Grid } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css'
import superagent from "superagent"

const panes = [
  {
    menuItem: 'Γενικές πληροφορίες',
    render: () => <Tab.Pane attached={true}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
            23/12/2020
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              <Header as='h5'><Link>Η ΧΡΗΣΗ ΜΑΣΚΑΣ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΗ ΓΙΑ ΤΟ ΚΟΙΝΟ ΠΟΥ ΠΡΟΣΕΡΧΕΤΑΙ ΓΙΑ ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΧΩΡΟΥΣ ΓΡΑΦΕΙΩΝ ΔΗΜΟΣΙΩΝ ΥΠΗΡΕΣΙΩΝ</Link></Header>
              Στο πλαίσιο των έκτακτων μέτρων αντιμετώπισης του κινδύνου διασποράς του κορωνοϊου COVID-19 (Δ1α/ΓΠ.οικ.48002/28-7-2020 Κοινή Υπουργική Απόφαση, Β’ 3131) 
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
            23/12/2020
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              <Header as='h5'><Link>Η ΧΡΗΣΗ ΜΑΣΚΑΣ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΗ ΓΙΑ ΤΟ ΚΟΙΝΟ ΠΟΥ ΠΡΟΣΕΡΧΕΤΑΙ ΓΙΑ ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΧΩΡΟΥΣ ΓΡΑΦΕΙΩΝ ΔΗΜΟΣΙΩΝ ΥΠΗΡΕΣΙΩΝ</Link></Header>
              Στο πλαίσιο των έκτακτων μέτρων αντιμετώπισης του κινδύνου διασποράς του κορωνοϊου COVID-19 (Δ1α/ΓΠ.οικ.48002/28-7-2020 Κοινή Υπουργική Απόφαση, Β’ 3131) 
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={1}>
            23/12/2020
          </Grid.Column>
          <Grid.Column width={8}>
            <p>
              <Header as='h5'><Link>Η ΧΡΗΣΗ ΜΑΣΚΑΣ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΗ ΓΙΑ ΤΟ ΚΟΙΝΟ ΠΟΥ ΠΡΟΣΕΡΧΕΤΑΙ ΓΙΑ ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΧΩΡΟΥΣ ΓΡΑΦΕΙΩΝ ΔΗΜΟΣΙΩΝ ΥΠΗΡΕΣΙΩΝ</Link></Header>
              Στο πλαίσιο των έκτακτων μέτρων αντιμετώπισης του κινδύνου διασποράς του κορωνοϊου COVID-19 (Δ1α/ΓΠ.οικ.48002/28-7-2020 Κοινή Υπουργική Απόφαση, Β’ 3131) 
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  },
  {
    menuItem: 'Πληροφορίες εργαζομένων',
    render: () => <Tab.Pane attached={true}>
    </Tab.Pane>,
  },
]

export default function HomeTabs()
{
  return(<Tab panes={panes}/>)
} 
