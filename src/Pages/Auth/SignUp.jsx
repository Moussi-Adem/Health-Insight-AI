import React from 'react'
import { IoMail } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { googleProvider } from '../../Config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate,  Link } from 'react-router-dom';



const SignUp = () => {
    const [userN, setUserN] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // console.log(auth?.currentUser?.email);
    // console.log(auth?.currentUser?.name);
    const auth = getAuth();
    const navigate = useNavigate();


    const SignUP = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password).then((user) => {
                navigate('/LogIn');
            })
            .catch((error) => {
                aler(error.message);
            });
        
                    
        
    };

    const SignInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/Home');
        }
        catch (error) {
            console.error(error);
        }
    }


    return (
        
            <div className='bg-white flex shadow-xl m-auto my-10 max-md:m-0  rounded-2xl  p-5 max-w-3xl '>
                <div className='w-5/6 p-6 m-auto  '>
                    <h2 className='font-bold text-3xl text-center text-purple-600 '>Sign Up</h2>
                    <p className='text-sm mt-4 text-slate-500'>You Can Create an account Now!</p>
                    <form action="" className='flex flex-col gap-4'>
                        <input className='p-2 rounded-xl mt-2 border border-gray-400 outline-none focus:border-purple-600' type="text" placeholder='Your name'  onChange={(e) => setUserN(e.target.value)} />

                        <div className='relative'>
                            <IoMail className='absolute text-2xl top-2 left-2 text-purple-600 ' />
                            <input className='p-2 pl-10 rounded-xl border w-full border-gray-400 outline-none focus:border-purple-600' type="email"  placeholder='Your Email'  onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <input className='p-2 rounded-xl border border-gray-400 outline-none focus:border-purple-600 ' type="password"  placeholder='Password'  onChange={(e) => setPassword(e.target.value)} />
                        {/* <input className='p-2 rounded-xl border ' type="password"  placeholder='Rewrite your Password' /> */}
                        <button className='bg-purple-600  hover:bg-purple-500 rounded-xl text-white text-xl py-1  ' onClick={(e) => {SignUP(e)} } >Sign Up</button>
                        
                    </form>

                    <div className='mt-10 grid grid-cols-3 items-center text-gray-500 '>
                        <hr className='border-gray-500' />
                        <p className='text-center text-sm'>0R</p>
                        <hr className='border-gray-500' />
                    </div>
                    <button onClick={SignInWithGoogle} className='flex m-auto mt-4 justify-center items-center gap-2 w-fit border-2 rounded-lg shadow-xl bg-slate-100 p-2 '>
                        <FcGoogle className='text-2xl' /> Sign Up with Google
                    </button>
                    <Link  to='/LogIn' className=' text-xs border-b  text-blue-600 underline'>you have allready an account</Link>
                    {/* <hr className='border-gray-500' />
                    <div className='text-xs flex justify-center items-center gap-2 '>
                        <p >If you don't have an account!</p>
                        <button className='flex m-auto my-4 justify-center items-center w-fit border-2 rounded-lg shadow-xl font-semibold    bg-slate-100 p-2'>Register</button>
                    </div> */}
                </div>


            </div>
    )
}

export default SignUp