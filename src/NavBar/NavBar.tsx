import React from "react";
import { AiOutlineMenu } from "react-icons/ai"
interface NavBarProps {
    headerMenuItems: string[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav className="">
          <ul className="md:flex justify-end hidden">
            
            {props.headerMenuItems.map(headerMenuItem => (
                <li className="mx-10 my-10">
                  <a href="https://fff" className="text-white">{headerMenuItem}</a>
                </li>
            ))}
          </ul>
          <button className="flex-initial text-white absolute right-5 top-8 text-3xl md:hidden">
            <AiOutlineMenu />
          </button>
        </nav>
    );
};

export default NavBar;