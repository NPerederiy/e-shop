import React from 'react';
import Box from '@material-ui/core/Box';

import image from '../../../assets/loading-100.png';
import './loader.scss';

const Loader = ({ message }) => (
    <Box id='loader-container'>
        <img src={image} className='loader-spinner' alt='loading...' />
        {message && (
            <p className='loader-message'>
                {message}
            </p>
        )}
    </Box>
);

export { Loader };