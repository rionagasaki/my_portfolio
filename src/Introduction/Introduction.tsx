import React from "react";
import HeaderImage from "../assets/header2.png"
import { SiQiita } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"


const Introduction: React.FC = () => {
    return (
        <header className="flex mb-10">
            <div className="w-1/2 ml-10 mt-20 animation-tracking-in-contract-bck-top">
                <h5 className="text-white font-medium text-xl md:text-2xl">Hello I'm</h5>
                <h1 className="text-white font-bold text-6xl md:text-8xl py-5">Rio Nagasaki</h1>
                <h5 className="text-white font-medium text-xl md:text-2xl">Developer of iOS, <br /> web-frontend, <br /> metaverse</h5>
                <div className="flex justify-between w-56 my-10">
                <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded"><p className="text-sm md:text-base">Contact me</p></button>
      <div><a href="https://github.com/rionagasaki"><AiFillGithub className="bg-white rounded-full w-10 h-10" /></a></div>
      <div><a href="https://qiita.com/rionagasaki"><SiQiita className="bg-white rounded-full w-10 h-10 p-1"  /></a></div>
    </div>
                <div className="w-full mx-auto md:hidden">
                <img src={HeaderImage} alt="ヘッダー" />
                </div>
                
            </div>
                <img src={HeaderImage} alt="ヘッダー" className="md:flex md:w-1/2 mx-auto hidden" />
        </header>
    )
}
export default Introduction;