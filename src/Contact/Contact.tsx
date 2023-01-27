import React, { useState } from "react";

const Contact: React.FC = () => {
    const [text, setText] = useState("");

    return (
        <div id="Contact">
            <h3 className="text-white text-3xl ml-5 mt-10" >Contact</h3>
            <div className="ml-5 w-28 h-1 bg-slate-400"></div>
             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
             <div className="w-72 mx-auto">
                 <textarea className="mb-20 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
             </div>  
        </div>
    )
}

export default Contact;