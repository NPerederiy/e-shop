import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Select from '../select';
import SearchBar from '../search-bar';
import './header-panel.scss';

const handleProfileOpen = () => {
    console.log('profile');
}

const handleBasketOpen = () => {
    console.log('basket');
}

const HeaderPanel = ({
    text,
    user,
    categories,
    brands,
    categorySelection,
    brandSelection,
    searchAction,
}) => {
    return (
        <AppBar position="static" className='app-header-panel stick-to-top'>
            <Toolbar className='app-header-tools'>
                <Typography className='app-header-text' variant="h6" color="inherit">
                    {text}
                </Typography>

                <Select name='Categories' options={categories} optionSelection={categorySelection} />
                <Select name='Brands' options={brands} optionSelection={brandSelection}/>

                <SearchBar searchAction={searchAction} />

                <IconButton className='app-header-button' onClick={handleBasketOpen} aria-label="Basket">
                    <ShoppingCartIcon />
                </IconButton>
                {user ?? (
                    <IconButton className='app-header-button' onClick={handleProfileOpen} aria-label="Basket">
                        <AccountCircleIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderPanel;