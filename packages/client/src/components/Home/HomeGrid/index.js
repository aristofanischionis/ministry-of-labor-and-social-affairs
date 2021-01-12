import React from 'react'
import { Grid, Segment, Label, Header, Icon} from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css'


export default function GridExampleCelledInternally(){

return(
<Segment>
    <Grid centered >
        <Grid.Row>
            <Header color='blue'>Γρήγορη πρόσβαση</Header>
        </Grid.Row>
        <Grid.Row columns={2} >
        <Grid.Column width={2}>
            <Link>
                <Segment padded>
                    <Label className='paint-yellow' size='large' attached='top'>Υγεία και εργασία</Label>
                    <Icon name='address card' size='huge' color='orange' />
                </Segment> 
            </Link>
        </Grid.Column>
        
        <Grid.Column width={2}>
            <Link to="/COVID-info">
                <Segment padded>
                    <Label className='paint-red' size='large' attached='top'>Υγεία και εργασία</Label>
                    <Icon name='heart' size='huge' color='pink' />
                </Segment> 
            </Link>
        </Grid.Column>
        
        </Grid.Row>

        <Grid.Row columns={2}>
        <Grid.Column width={2}>
            <Link>
                <Segment padded>
                    <Label className='paint-green' size='large' attached='top'>Υγεία και εργασία</Label>
                    <Icon name='home' size='huge' color='green'/>
                </Segment> 
            </Link>
        </Grid.Column>
        <Grid.Column width={2}>
            <Link>
                <Segment padded>
                    <Label className='paint-blue' size='large' attached='top'>Υγεία και εργασία</Label>
                    <Icon name='home' size='huge' color='blue'/>
                </Segment> 
            </Link>
        </Grid.Column>
        </Grid.Row>
  </Grid>
  </Segment>
)
} 