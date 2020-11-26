import React from 'react';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './search-bar.scss';

const SearchBar = ({
    placeholder = 'Search…',
    searchAction
}) => (
    <Box className='search-box'>
        <Box className='search-icon'>
            <SearchIcon />
        </Box>
        <InputBase
            className='search-box-input'
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'search' }}
            onChange={searchAction}
        />
    </Box>
);

export default SearchBar;