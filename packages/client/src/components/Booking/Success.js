import React from 'react';

const Success = props => (
  <div>
    <h1 className="ui centered">Σας ευχαριστούμε για την κράτηση</h1>
    <div>
      <pre>{JSON.stringify(props.values, null, 2)}</pre>
    </div>
  </div>
);

export {Success};
