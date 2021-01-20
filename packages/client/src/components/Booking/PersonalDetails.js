import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
import {DateInput, TimeInput} from 'semantic-ui-calendar-react';

function PersonalDetails({handleChange, next, prev}) {
  const [cur_date, setCurDate] = useState('');
  const [cur_time, setCurTime] = useState('');

  const handleClick = (event, {name, value}) => {
    if (name === 'date') {
      setCurDate(value);
      handleChange('date', value);
    } else {
      setCurTime(value);
      handleChange('time', value);
    }
  };

  return (
    <React.Fragment>
      <h1 className="ui centered">Επιλογή ημερομηνίας</h1>
      <DateInput
        name="Ημερομηνία"
        placeholder="Ημερομηνία"
        iconPosition="left"
        value={cur_date}
        onChange={handleClick}
      />
      <TimeInput
        name="Ώρα"
        placeholder="Ώρα"
        iconPosition="left"
        value={cur_time}
        onChange={handleClick}
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
  handleChange: PropTypes.func,
  next: PropTypes.func,
  prev: PropTypes.func,
};

export {PersonalDetails};
