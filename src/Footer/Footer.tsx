import React from "react";
import { useState } from "react";
import FooterStyle from "./Footer.module.css";

const Footer: React.FC = () => {
    
    return (
        <footer className="mx-auto" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>

  <div className="mx-auto px-4 py-12 sm:px-6 lg:px-16">
    <div className="flex flex-wrap items-baseline lg:justify-center">
      <span className="mt-2 text-sm font-light text-gray-500">
        Copyright © 2023 - 
        <a href="https://wickedlabs.dev" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">Rio Nagasaki</a>
      </span>
    </div>
  </div>
</footer>
    )
}

export default Footer;