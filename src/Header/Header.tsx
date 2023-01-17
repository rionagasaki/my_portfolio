import React from "react";
import NavBar from "../NavBar/NavBar";


const Header = () => {
    const headerMenuItems = ["About me", "Skill", "Project", "Article", "Contact"]
    return (
        <header>
            <div className="container">
                <h5>Hello I'm</h5>
                <h1>Rio Nagasaki</h1>
                <h5>Developer of iOS, Web-frontend, metaverse</h5>
                <NavBar headerMenuItems={headerMenuItems} />
            </div>
        </header>
    )
}

export default Header;