import React from 'react';

// props.name
//      .value
//      .label
export default props => (
    <div className='form-group'>
        <label htmlFor={'input-' + props.name}>
            {props.label}    
        </label>
        <input
            className='form-control'
            type='text' name={props.name}
            id={'input-' + props.name}
            value={props.value}
            onChange={props.onChange} />
    </div>    
);