import React from "react";
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { Link as Scroll } from "react-scroll"

interface NavBarProps {
    headerMenuItems: string[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [open, setOpen] = useState(false)

  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
    console.log("aaa");  
  };

  const statesNavBar = (open: boolean) => {
    if (open) {
      return <div className="bg-gray-300 border transition duration-150 ease-out">
          <ul className="text-white text-center pt-10 pb-5">
            <li className="before:first-line:"><Scroll to="AboutMe" smooth={true}>About me</Scroll></li>
            <li><Scroll to="Skill" smooth={true}>Skill</Scroll></li>
            <li><Scroll to="Portfolio" smooth={true}>Portfolio</Scroll></li>
            <li><Scroll to="Contact" smooth={true}>Contact</Scroll></li>
          </ul>
        </div>
    }
  }

return (
        <nav className="">
          <ul className="md:flex justify-end hidden">
            {props.headerMenuItems.map(headerMenuItem => (
                <li className="mx-10 my-10">
                  <Scroll to={headerMenuItem} className="text-white">{headerMenuItem}</Scroll>
                </li>
            ))}
          </ul>
          <button 
          className="flex-initial text-white absolute right-5 top-8 text-3xl md:hidden"
          onClick={toggleFunction}
          >
            <AiOutlineMenu />
          </button>
          {statesNavBar(open)}
        </nav>
    );
};

export default NavBar;