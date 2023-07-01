import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';

const Navbar = () => {

  const navigate = useNavigate();
  const { state, changeTheme } = useContextGlobal();
  const { theme } = state;

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <nav className={theme}> 
      <Link onClick={() => navigate(-1)}><h5>Back</h5></Link>
      <Link to='/'><h5>Home</h5></Link>
      <Link to='/favs'><h5>Favs</h5></Link>
      <Link to='/detail'><h5>Detail</h5></Link>
      <Link to='/contact'><h5>Contact</h5></Link>
      <button className={`${theme}`} onClick={handleThemeChange}>Cambiar tema</button>
    </nav>
  )
}

export default Navbar;