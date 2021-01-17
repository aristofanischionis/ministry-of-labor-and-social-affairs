import React from 'react';

const Success = (props) =>
            <div>
                <h1 className="ui centered">Form Submitted</h1>
                <div>
                   <pre>{JSON.stringify(props.values, null, 2)}</pre>
                </div>
            </div>
    

export {Success}

