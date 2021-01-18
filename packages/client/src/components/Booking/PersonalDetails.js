import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
import {DateInput, TimeInput} from 'semantic-ui-calendar-react';

function PersonalDetails({values, handleChange, next, prev}) {
  const {firstName, lastName, email, speciality, date, time} = values;
  const handleClickDate = e => {
    console.log('mpainw date!');
    handleChange('date', e.target.value);
  };
  const handleClickTime = e => {
    handleChange('time', e.target.value);
  };
  console.log('dateeeeeeeeeeee', date);
  return (
    <React.Fragment>
      <h1 className="ui centered">Επιλογή ημερομηνίας</h1>
      <DateInput
        name="date"
        placeholder="Date"
        iconPosition="left"
        value={date}
        onChange={handleClickDate}
      />
      <TimeInput
        name="time"
        placeholder="Time"
        iconPosition="left"
        value={time}
        onChange={handleClickTime}
      />
      <br />
      <Button onClick={prev}>Back</Button>
      <Button color="blue" type="submit" onClick={next}>
        Submit
      </Button>
    </React.Fragment>
  );
}

PersonalDetails.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  next: PropTypes.func,
  prev: PropTypes.func,
};

export {PersonalDetails};
