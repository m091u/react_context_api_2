// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";

import { useContext } from "react"; // <== ADD
import { ThemeContext } from "./../context/theme.context"; // <== ADD

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // <== ADD

  return (
    <nav className={"Navbar " + theme }>
      {" "}
      {/* <== UPDATE  */}
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "dark " : "light "}
      </button>
    </nav>
  );
}

export default Navbar;
