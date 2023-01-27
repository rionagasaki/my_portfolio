import React from "react";
import myImage from "../assets/myImage2.jpg";
import { AiFillGithub } from "react-icons/ai"
import { SiQiita } from "react-icons/si"
import { BsMusicNoteList } from "react-icons/bs"
import { TbLego } from "react-icons/tb"
import { FaHotel }from "react-icons/fa"
import { BiCameraMovie } from "react-icons/bi"

interface MyInformation {
    myItem: {name: string, imageURLString: string, description: string}
}

const About: React.FC<MyInformation> = (props) => {
return(
<div className="mw-80%" id="AboutMe">
    <h3 className="text-white text-3xl ml-5">About Me</h3>
    <div className="ml-5 w-32 h-1 bg-slate-400"></div>
    <div className="flex">
    <img src={myImage} alt="myImage" className="rounded object-cover object-top w-40 h-40 border ml-5 my-10" />
    <div>
    <div className="text-white font-medium text-xl ml-5 mt-10">{props.myItem.name}</div>
    <div className="text-white font-normal mx-5 my-2">{props.myItem.description}</div>
    <div className="text-white font-medium text-xl ml-5 mt-4">-Hobbies</div>
    <div className='flex flex-wrap bg-slate-600 my-2 w-[calc(100%_-_50px)] rounded mx-auto px-4 py-4 gap-3 border'>
        <div className='text-white flex'><BsMusicNoteList className="text-red-400 mt-1 mx-1" /><p>音楽を聴くこと(特にback number)</p></div>
        <div className='text-white flex'><TbLego className='text-yellow-400 mt-1 mx-1' /><p>LEGO</p></div>
        <div className='text-white flex'><FaHotel className='text-green-400 mt-1 mx-1' /><p>ホテル生活</p></div>
        <div className='text-white flex'><BiCameraMovie className='text-blue-400 mt-1 mx-1' /><p>映画鑑賞</p></div>
    </div>
    <div className="text-white font-medium text-xl ml-5 mt-4">-External Link</div>
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

