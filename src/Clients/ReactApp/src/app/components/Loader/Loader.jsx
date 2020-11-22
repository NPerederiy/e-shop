import React from 'react';

import image from '../../../assets/loading-100.png';
import './loader.scss';

const Loader = ({ message }) => (
    <div id='loader-container'>
        <img src={image} className='loader-spinner' alt='loading...' />
        {message && (
            <p className='loader-message'>
                {message}
            </p>
        )}
    </div>
);

export { Loader };