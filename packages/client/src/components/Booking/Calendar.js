import React from 'react';
import PropTypes from 'prop-types';

function Calendar({ handleChange, values }) {

  

  return (
    <React.Fragment>
        
      </React.Fragment>
    );
  }

  Calendar.propTypes = {
    handleChange: PropTypes.func,
    values: PropTypes.object,
  };
  
  export {Calendar};
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     date: '',
  //     time: '',
  //     dateTime: '',
  //     datesRange: '',
  //   };
  // }

  // handleChange = (event, {name, value}) => {
  //   if (this.state.hasOwnProperty(name)) {
  //     this.setState({[name]: value});
  //   }
  // };