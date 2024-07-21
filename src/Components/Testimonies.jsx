import React, { useEffect } from 'react'
import { useState } from 'react';
import img1 from "../assets/SW.png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/father.png"
import img4 from "../assets/Image3.jpg"
import { FaQuoteLeft } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";



const Testimonies = () => {

    const [current, setCurrent] = useState(0);

    const Tdata = [
        {

            img: img1,
            name: "Maria Santos",
            content: "Using this web application has been a game-changer for my health. The AI quickly analyzes my symptoms and provides accurate advice. It has helped me understand when to seek professional medical help and when to rest at home. Highly recommend!",
            job: "Project Manager @Microsoft"


        },

        {
            img: img2,
            name: "Willson Smith",
            content: "This app has been an essential tool for managing my family's health. The AI's ability to provide preliminary diagnoses and actionable advice has saved us countless trips to the doctor. It's user-friendly and highly accurate.",
            job: "Foundern, Inc."
        },

        {
            img: img3, 
            name: "John Doe",
            content: "As a busy professional, I don't always have time to visit the doctor for minor issues. This app has been invaluable in providing me with quick and reliable health advice based on my symptoms. It's like having a healthcare assistant in my pocket",
            job: " Owner of @Nislab"
        },

        {
            img: img4,
            name: "Sarah Jacob",
            content: "I was initially skeptical about an AI-based diagnosis app, but this tool has exceeded my expectations. The recommendations are spot-on, and it's like having a mini-doctor available 24/7. It's especially helpful for late-night health concerns",
            job: "IBM Developer"
        }
    ];

    const length = Tdata.length;

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }


    return (
        <section className='flex max-sm:w-full m-auto w-5/6 rounded-3xl shadow-xl  bg-slate-300 dark:bg-slate-800 px-6 py-10 justify-center items-center'>
            <div>
                {
                    Tdata.map((item, index) => index === current &&
                        <div key={index}>
                            <div className=''>
                                <div className='pb-[20px] flex  items-start gap-8'>
                                    <FaQuoteLeft className='text-gray-600 dark:text-white size-28' />
                                    <h2 className='text-purple-500 text-3xl font-bold max-sm:text-sm'>{item.content} </h2>
                                </div>
                                <div className='flex grap-4 items-center '>
                                    <div className=' flex max-sm:justify-center  '>
                                        <img src={item.img} alt="" className='rounded-full h-28 max-sm:h-16 max-sm:border-1 m-4 border-4 p-1 border-purple-500' />
                                    </div>
                                    <div className='flex font-semibold flex-col gap-2'>
                                        <h6 className='text-slate-700 dark:text-slate-300'>{item.name}</h6>
                                        <span className='text-slate-700 dark:text-slate-300'> {item.job}</span>
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <MdKeyboardDoubleArrowLeft onClick={prev} className='text-purple-700 dark:text-white size-28 max-sm:size-14 cursor-pointer' />
                                    <MdKeyboardDoubleArrowLeft onClick={next} className='text-purple-700 dark:text-white size-28 max-sm:size-14 cursor-pointer rotate-180' />
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </section>
    )
}

export default Testimonies
