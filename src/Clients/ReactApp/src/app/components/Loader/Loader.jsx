import React from 'react';
import image from '../../../assets/loading-100.png';
import './loader.css';

const Loader = () => (
    <img src={image} className="spinner" alt="loading..." />
);

export { Loader };