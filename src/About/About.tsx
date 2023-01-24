import React from "react";
import myImage from "../assets/myImage2.jpg";
import { AiFillGithub } from "react-icons/ai"
import { SiQiita }from "react-icons/si"

interface MyInformation {
    myItem: {name: string, imageURLString: string, description: string}
}

const About: React.FC<MyInformation> = (props) => {
return(
<div className="mw-80%">
    <h3 className="text-white text-3xl ml-8">About Me</h3>
    <div className="ml-8 w-32 h-1 bg-slate-400"></div>
    <div className="flex">
    <img src={myImage} alt="myImage" className="rounded object-cover object-top w-40 h-40 border ml-10 my-10" />
    <div>
    <div className="text-white font-medium text-xl ml-5 mt-10">{props.myItem.name}</div>
    <div className="text-white font-normal ml-5">{props.myItem.description}</div>
    <div className="flex justify-between w-24 ml-10 mt-3">
      <div><a href="https://github.com/rionagasaki"><AiFillGithub className="bg-white rounded-full w-10 h-10" /></a></div>
      <div><a href="#"><SiQiita className="bg-white rounded-full w-10 h-10 p-1"  /></a></div>
    </div>
    </div>
    </div>
</div>
);
} 

export default About;

