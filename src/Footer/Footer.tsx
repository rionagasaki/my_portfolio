import React from "react";
import FooterStyle from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <div className={FooterStyle.main}>
            <div className={FooterStyle.rectangle1}><p className={FooterStyle.text}>Hello,World!</p></div>
        </div>
    )
}

export default Footer;