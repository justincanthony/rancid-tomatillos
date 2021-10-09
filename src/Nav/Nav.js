import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <header className="navigation-bar">
      <h1 className="title">RANCID TOMATILLOS</h1>
      <NavLink to="/" className="home">
        <button>Home</button>
      </NavLink>
    </header>
  );
};

export default Nav;
