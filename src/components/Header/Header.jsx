import React, { use, useContext } from 'react';
import Menu from './Menu';
import Search from './Search/Search';
import { ThemeContext } from '../../contexsts/ThemeContext';

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={`flex justify-between items-center p-4`}>
            <Search />
            <Menu />
            <button onClick={toggleTheme}>{theme}</button>
        </header>
    );
}


export default Header;
