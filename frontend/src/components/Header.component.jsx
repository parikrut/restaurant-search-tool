import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/theme';
import Switch from "react-switch";

const Header = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
    return (
      <nav className={`navbar ${isDark ?  `navbar-dark bg-dark` : `navbar-light bg-light`}`}>
        <a className="navbar-brand">Restaurant Demo</a>
        <form class="form-inline pr-5">
        <Switch onChange={toggleTheme} checked={isDark ? true : false} />
        </form>
      </nav>
    );
}

export default Header