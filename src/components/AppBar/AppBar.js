import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import './AppBar.css';



const AppBar = () => {
    return (
        <header className="header">
            <Navigation />
            <UserMenu />
        </header>
    );
}
 
export default AppBar;