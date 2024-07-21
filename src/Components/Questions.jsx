import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"
import Quest from "../Components/Questions.json";



const Questions = () => {


    const [isOpen, setIsOpen] = useState(false);


    return (
        <footer className='bg-purple-900 w-full h-full my-12 '>
            <div class=" w-full overflow-hidden rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="fill-white dark:fill-[rgb(1,18,34)]"></path>
                </svg>
            </div>
            <div >
                <div className=' h-auto  w-full'>
                    <button onClick={() => setIsOpen((prev) => !prev)} className='flex m-auto text-white  text-2xl  gap-4 active:bg-purple-600  max-sm:text-lg  duration-300  w-fit px-8 py-4 cursor-pointer border-2  rounded-2xl hover:bg-purple-700 '>
                        {!isOpen ? (
                            <IoIosArrowDown className='text-white text-3xl' />
                        ) : (<IoIosArrowDown className='text-white text-3xl rotate-180' />

                        )}
                        Frequently Asked Questions
                    </button>

                    {isOpen &&
                        <p className=' w-4/6 max-sm:w-11/12 border-2 m-auto p-6 max-sm:p-0 border-purple-300 rounded-2xl'>
                            {Quest.map((item, index) => (
                                <div key={index} className=' grid m-auto w-full   duration-300 '>
                                    <h1 className='text-lg text-center mt-10 font-bold mb-4 text-white max-sm:text-xs'>{item.quet}</h1>
                                    <div className=' w-5/6  m-auto  my-0 bg-purple-400 shadow-2xl rounded-xl hover:scale-110 cursor-pointer p-6 text-xl duration-200  text-slate-700  max-sm:text-sm'>
                                        {item.content}
                                    </div>
                                </div>))
                            }
                        </p>
                    }
                </div>
            </div>
            <div class="w-full overflow-hidden mt-20 rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-white dark:fill-[rgb(1,18,34)]"></path>
                </svg>
            </div>
        </footer>



    )
}

export default Questions
