import React from 'react'
import SkillStyle from './Skill.module.css';
import SwiftImage from "../assets/swiftImage.jpeg";
import Typescript from "../assets/TypeScriptImage.png"
import { IoIosCheckmarkCircle } from "react-icons/io"

const Skill = () => {
  return (
    <div id="Skill">
      <h3 className='text-white  ml-5 mt-8 text-3xl'>Skill</h3>
      <div className='ml-5 w-14 h-1 bg-slate-300'></div>
      <div className='text-white ml-8 mt-4'>-Capabilities-</div>
      <div className='flex flex-wrap bg-slate-600 my-2 w-[calc(100%_-_50px)] rounded mx-auto px-4 py-4 border'>
        <span className='text-white flex'>
        <IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' />
        iOS developer
        </span>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>frontend developer</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>UI/UX design</p></div>
      </div>
      <div className='text-white ml-8 mt-6'>-Programming Languages-</div>
      <div className='flex flex-wrap bg-slate-600 my-2 w-[calc(100%_-_50px)] rounded mx-auto px-4 py-4 border'>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>HTML</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1 ml-3' /><p>CSS</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1 ml-3' /><p>Firebase</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>Typescript</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mx-5 mt-1 mr-1 ml-3' /><p>Docker</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mx-5 mt-1 mr-1 ml-3'/><p>Swift</p></div>
      </div>
      <div className='text-white ml-8 mt-6'>-Architectures-</div>
      <div className='flex flex-wrap bg-slate-600 my-2 w-[calc(100%_-_50px)] rounded mx-auto px-4 py-4 border'>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>Redux</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1 ' /><p>The Composable Architecture</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>MVVM</p></div>
      </div>
    </div>
  )
}

export default Skill;