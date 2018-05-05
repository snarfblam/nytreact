import React from 'react';
import './Card.css';

export default props => (
    <div className='card-header nyt-card-title'>
        <strong>
            {props.children}
        </strong>
    </div>
);