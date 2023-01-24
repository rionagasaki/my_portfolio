import React from "react";
import Hitokoma from "../assets/portfolio_one.png";

const Portfolio: React.FC = () => {
  return (
    <div>
      <h3 className='text-white  ml-8 text-3xl'>Portfolio</h3>
      <div className='ml-8 w-28 h-1 bg-slate-300'></div>
    <div className='flex mt-10'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mx-5 border-t border-l border-r border-b border-gray-100">
      <img src={Hitokoma} alt="Swift" className='h-40' />
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl">ひとこま</div>
        <p className='text-gray-200 text-base'>
        ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキス
        </p>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-600 mx-8">
    <img src={Hitokoma} alt="Swift" className='h-40' />
    <div className="px-6 py-4">
      <div className="text-white font-bold text-xl">ひとこま</div>
      <p className='text-gray-200 text-base'>
      ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキス
      </p>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Portfolio;