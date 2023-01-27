/* eslint-disable array-callback-return */
import React from "react";
import Hitokoma from "../assets/HITOKOMA_2D.png";
import RamenApp from "../assets/ramen2.png";
import MyPortfolio from "../assets/portfolio_site.png";
import OnePortfolio from "./OnePortfolio";
import { AiFillApple } from "react-icons/ai"

const Portfolio: React.FC = () => {
  const portfolioDatas = [
    {portfolio: {portfolioName: "ひとこま", portfolioDescription:"ひとこまです", portfolioImageURLString: Hitokoma}},
    {portfolio: {portfolioName: "ラーメンサブスク", portfolioDescription: "", portfolioImageURLString: RamenApp}},
    {portfolio: {portfolioName: "ポートフォリオサイト", portfolioDescription: "", portfolioImageURLString: MyPortfolio}},
  ]
  return (
    <div id="Portfolio">
      <h3 className='text-white ml-5 mt-8 text-3xl'>Portfolio</h3>
      <div className='ml-5 w-28 h-1 bg-slate-300'></div>
      <div className="text-white flex  mx-3 mt-3"><AiFillApple className="text-white mt-1"></AiFillApple><p>iOS Application</p></div>
    <div className='flex flex-wrap gap-5 mt-6 mx-5'>
      {portfolioDatas.map(portfolio=>{
       return <OnePortfolio portfolio={portfolio.portfolio} />
     })};
    </div>
  </div>
  )
}

export default Portfolio;