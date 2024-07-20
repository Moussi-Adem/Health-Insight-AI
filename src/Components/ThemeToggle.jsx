"use Client"
import React from 'react'
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { BsSunFill  } from 'react-icons/bs';




function ThemeToggle() {
   //if you want to use light mode as default theme and save it in localstorage.
    const [darkMode, setDarkMode] = useState(false); 
    
    //if you want to change to dark mode theme and save it in localstorage.
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
            document.body.classList.add('dark');
        }
    },[])

     // adding & removing the value of dark to the class of body element and save it in localstorage.

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem("theme","dark"); 
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem("theme","light");
    }
    },[darkMode]);

    return (
        <div className='relative w-12 h-6 flex items-center bg-gray-500 dark:bg-gray-900 rounded-full p-1 cursor-pointer'
        onClick={() => setDarkMode(!darkMode)}>
        
        <FaMoon className='text-white size={12} '/>
            <div className='absolute bg-white dark:bg-slate-600 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300'
            style={ darkMode ? {left :  "2px"} : {right : "2px"}}>                 
            </div>
            <BsSunFill className="ml-auto text-yellow-400 size={12} " />
        </div>
    )
}

export default ThemeToggle
