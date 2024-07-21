import React from 'react'
import { IoMail } from "react-icons/io5";

const Newsletter = () => {
    return (
        <>
            <div className=' grid grid-cols-1 gap-2 max-sm:w-full max-sm:rounded-none max-md:w-5/6 max-sm:text-sm w-2/3 m-auto my-32  rounded-3xl  bg-purple-950  shadow-xl  dark:bg-gray-900 p-6'>
                <h1 className='text-center max-sm:text-2xl text-3xl text-white font-semibold'>Join <span className=' font-bold text-purple-500'>HealthInsight AI</span> newsletter !</h1>
                <p className='text-center text-gray-400 mt-5 pb-6'>Be among the first ones to receive our latest news and offers.</p>
                <form className='flex flex-wrap justify-center items-center  gap-5'>
                    <div className='relative'>
                        <IoMail className='absolute text-2xl top-3 left-2 text-purple-600' />
                        <input type='email' placeholder='Your email' className='  w-full px-6 py-3 rounded-lg pl-12 text-gray-800 focus:outline-none focus:border-gray-600' />
                    </div>

                    <button className='bg-blue-500  hover:bg-blue-700 text-white py-3 px-6 rounded-lg'>Subscribe</button>
                </form>

                <p className='text-center text-gray-400 mt-5'>We'll never share your email address.</p>

                <div className='flex justify-center mt-5'>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' id='subscribe-terms' className='w-6 h-6 ' />
                        <label htmlFor='subscribe-terms'></label>
                    </div>
                    <p className='text-gray-400'>I agree to receive newsletters and updates from HealthInsightAI.</p>

                </div>


            </div>
        </>

    )
}

export default Newsletter
