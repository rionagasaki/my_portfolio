import React from "react";
import myImage from "../assets/myImage.jpg";
import AboutStyle from "./About.module.css";


interface MyInformation {
    myItem: {name: string, imageURLString: string, description: string}
}

const About: React.FC<MyInformation> = (props) => {
return(
<div className={AboutStyle.container}>
    <div className={AboutStyle.title}>About Me</div>
    <div><img src={myImage} alt="myImage" className={AboutStyle.profileImage} /></div>
    <div className={AboutStyle.name}>{props.myItem.name}</div>
    <div className={AboutStyle.description}>{props.myItem.description}</div>
</div>
);
} 

export default About;

