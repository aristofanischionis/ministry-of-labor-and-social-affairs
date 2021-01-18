import React from 'react';
import {Button} from 'semantic-ui-react';
import Calendar from './Calendar';

const PersonalDetails = props => {
  return (
    <React.Fragment>
      <h1 className="ui centered">Επιλογή ημερομηνίας</h1>
      <Calendar />
      <br />
      <Button onClick={props.prev}>Back</Button>
      <Button color="blue" type="submit">
        Submit
      </Button>
    </React.Fragment>
  );
};

export {PersonalDetails};
