import React from "react";
import HeaderImage from "../assets/header2.png"

const Introduction: React.FC = () => {
    return (
        <header className="flex mb-10">
            <div className="w-1/2 ml-10 mt-20">
                <h5 className="text-white font-medium text-2xl">Hello I'm</h5>
                <h1 className="text-white font-bold text-8xl py-5">Rio Nagasaki</h1>
                <h5 className="text-white font-medium text-2xl">Developer of iOS, <br /> web-frontend, <br /> metaverse</h5>
                <button className="my-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded">Contact me</button>
                <img src={HeaderImage} alt="ヘッダー" className="w-full mx-auto bg-slate-100 md:hidden" />
            </div>
                <img src={HeaderImage} alt="ヘッダー" className="md:w-1/2 hidden mx-auto bg-slate-100" />
        </header>
    )
}

export default Introduction;