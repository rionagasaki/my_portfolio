import React from "react";

interface PortfolioData {
    portfolio: {
        portfolioName: string
        portfolioDescription: string
        portfolioImageURLString: string
    }
    children?: React.ReactNode;
}

const OnePortfolio:React.FC<PortfolioData> = ({children, portfolio}) => { 
    return (
        <div className="md:w-1/4 rounded overflow-hidden shadow-lg bg-slate-600 border-t border-l border-r border-b border-gray-100">
        <img src={portfolio.portfolioImageURLString} alt="Swift" className='mx-auto' />
        <div className="px-6 py-4">
          <div className="flex justify-between">
          <div className="text-white font-bold text-xl mt-2">{portfolio.portfolioName}</div>
          <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-600 hover:border-blue-500 rounded"><p className="text-sm md:text-base">Detail</p></button>
          </div>
          <p className='text-gray-200 text-base mt-3'>
          {portfolio.portfolioDescription}
          </p>
        </div>
      </div>
    );
}

export default OnePortfolio;