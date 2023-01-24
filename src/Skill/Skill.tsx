import React from 'react'
import SkillStyle from './Skill.module.css';
import SwiftImage from "../assets/swiftImage.jpeg";
import Typescript from "../assets/TypeScriptImage.png"
import { IoIosCheckmarkCircle } from "react-icons/io"

const Skill = () => {
  return (
    <div>
      <h3 className='text-white  ml-8 text-3xl'>Skill</h3>
      <div className='ml-8 w-14 h-1 bg-slate-300'></div>
      <div>Capa</div>
      <div className='flex flex-wrap bg-slate-600 my-10 w-3/4 rounded mx-auto px-4 py-4 border'>
      <div className='text-white'>Frontend</div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1' /><p>HTML</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1 ml-3' /><p>CSS</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mt-1 mr-1 ml-3' /><p>Firebase</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mx-5 mt-1 mr-1 ml-3' /><p>Typescript</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mx-5 mt-1 mr-1 ml-3' /><p>Docker</p></div>
        <div className='text-white flex'><IoIosCheckmarkCircle className='text-lime-400 mx-5 mt-1 mr-1 ml-3'/><p>Swift</p></div>
      </div>
    </div>
  )
}

export default Skill;