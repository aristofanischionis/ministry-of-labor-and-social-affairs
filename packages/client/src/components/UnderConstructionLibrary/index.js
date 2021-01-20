import React from 'react';
import {Image, Grid, Header } from 'semantic-ui-react';
import constructions from '../../images/construction2.gif';

export default function Elibrary(){
  
    return (
        <Grid centered style={{'padding-bottom':'15em','background-color': '#fefef0'}}>
                <Grid.Row style={{'padding-top':'3em'}}centered >
                    <Header  style={{'color': '#4d5bc9'}} as='h1'>SORRY!</Header>
                </Grid.Row>
                <Grid.Row centered >
                    <Image alt='υπο κατεσκευή σελίδα' style={{'background-color': '#4d5bc9'}} src={constructions} size='medium' />
                </Grid.Row>
                <Grid.Row centered >
                    <Header  style={{'color': '#4d5bc9'}} as='h2'>THIS PAGE IS UNDER CONSTRUCTION</Header>
                </Grid.Row>               
                <Grid.Row centered >
                    <Header as='h4'>Please bare with us we are updating the page content</Header>
                </Grid.Row>
        </Grid>
    );
}

