import React from "react";
import NavStyle from './NavBar.module.css';

interface NavBarProps {
    headerMenuItems: string[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav className={NavStyle.Nav}>
          <ul className={NavStyle.NavUl}>
            {props.headerMenuItems.map(headerMenuItem => (
                <li className={NavStyle.NavList}>
                  <a href="https://fff" className={NavStyle.NavAtag}>{headerMenuItem}</a>
                </li>
            ))}
          </ul>
        </nav>
    );
};

export default NavBar;