import React from 'react'
import SkillStyle from './Skill.module.css';
import SwiftImage from "../assets/swiftImage.jpeg";

const Skill = () => {
  return (
    <div>
         <div className={SkillStyle.title}>Skill</div>
             <div className={SkillStyle.glass}>
                 <img src={SwiftImage} alt="Swift" className={SkillStyle.img} />
             </div>
    </div>
  )
}

export default Skill;