import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
    className, 
    searchAction
}) => {

    return (
        <AppBar position="static" className={className}>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    {text}
                </Typography>

                <SearchBar searchAction={searchAction}/>

                <IconButton onClick={handleBasketOpen} aria-label="Basket">
                    <ShoppingCartIcon />
                </IconButton>
                {user ?? (
                    <IconButton onClick={handleProfileOpen} aria-label="Basket">
                        <AccountCircleIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default HeaderPanel;