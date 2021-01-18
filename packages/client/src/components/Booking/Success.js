// import React from 'react';
import PropTypes from 'prop-types';

function Success({values}) {
  return (
    <div>
      <h1 className="ui centered">Σας ευχαριστούμε για την κράτηση!</h1>
      <div>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
}

Success.propTypes = {
  values: PropTypes.object,
};

export {Success};
