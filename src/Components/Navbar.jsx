import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import profileImg from "../assets/user.png"
import Logo from "../assets/healthinsightai.png"
import { FaArrowRightFromBracket } from "react-icons/fa6";

import { IoSettingsSharp } from "react-icons/io5";
import ThemeToggle from './ThemeToggle'
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';





const Navbar = () => {


    const navigation = [
        { name: 'Home', href: '/Home', current: true },
        { name: 'Servives', href: '/Services', current: false },
        { name: 'AboutUs', href: '/AboutUs', current: false },
        { name: 'ContactUs', href: '/ContactUs', current: false },
    ]
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const auth = getAuth();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    if (auth?.currentUser?.photoURL == null) {
        var userImg = profileImg;
    } else {
        var userImg = auth?.currentUser?.photoURL;
    }

    const SignOut = async () => {
        try {
            await signOut(auth);
            navigate('/Presentation');
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Disclosure as="nav" className=" sticky top-0 w-full z-50 bg-whiteblur backdrop-blur-lg shadow-xl dark:bg-darkblur">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover: text-gray-950  hover:bg-gray-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-400   dark:hover:bg-gray-950  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo and Nav elements*/}

                    <div className="flex  flex-1 items-center  justify-center sm:items-stretch sm:justify-start">
                        <Link to="/Home" className='-ml-4'><div className="flex  flex-shrink-0 items-center">
                            <img
                                alt="HealthInsightAI"
                                src={Logo}
                                className="h-10 w-auto" />
                            <span className='font-semibold mr-1 sm:text-sm dark:text-slate-200'>HealthInsight</span><span className=' font-semibold text-purple-500'>AI</span>
                        </div></Link>

                        <div className="hidden sm:ml-6  sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? ' text-white bg-purple-800 ' : '  text-gray-950  hover:bg-[#925FF0] hover:text-white dark:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Light and Dark buttons Mode switcher */}

                    <div className=' flex max-sm:hidden mr-5 space-x-0 dark:text-white shadow-xl rounded-md py-1 px-1 border-gray-400'>
                        <ThemeToggle className=" py-3 dark:bg-dark   " />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            type="button"
                            className="relative rounded-full p-1 text-gray-950 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                        </button>


                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 ">
                            <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src={userImg}
                                        className="h-8 w-8 rounded-full bg-white"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition className="absolute right-0 z-10 mt-4 w-60 origin-top-right rounded-md  bg-white dark:bg-black  py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <a href="#" className="flex gap-2 justify-start items-center px-4 py-3  text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-300  dark:data-[focus]:bg-gray-700">
                                        {/* <MdAccountBox className='mr-2 text-xl  dark:text-white' />  */}
                                        <img
                                            alt=""
                                            src={userImg}
                                            className="h-8 w-8 bg-white rounded-full"
                                        />
                                        {auth?.currentUser?.email}
                                    </a>
                                </MenuItem>

                                <MenuItem>
                                    <a href="#" className="flex justify-start items-center px-4 py-3   text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-300 dark:data-[focus]:bg-gray-700">
                                        <IoSettingsSharp className="mr-2 text-lg  dark:text-white " /> Settings

                                    </a>
                                </MenuItem>
                                <hr className='w-5/6 m-auto h-1' />
                                <MenuItem onClick={() => setIsOpen((prev) => !prev)} >
                                    <a href="#" className="flex justify-start items-center   px-4 py-3  text-sm dark:text-white  text-gray-700 data-[focus]:bg-gray-300 dark:data-[focus]:bg-gray-700">
                                        <FaArrowRightFromBracket className='mr-2 text-lg dark:text-white' />Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        {isOpen &&
                                <div className='absolute top-0 max-sm:-right-2 max-md:-right-6 max-lg:-right-6 max-xl:-right-8 xl:-right-36 h-screen w-screen flex justify-center items-center  backdrop-blur-lg bg-black/90'>
                                    <div className=' absolute z-50  flex-row text-center space-y-4 bg-slate-100  max-sm:w-5/6 md:w-4/6 lg:w-1/3 blur-none p-4  m-auto rounded-xl shadow-xl '>
                                        <IoClose className='absolute cursor-pointer top-2 right-2 text-2xl text-purple-600 'onClick={() => setIsOpen((prev) => !prev)} />
                                        <FaArrowRightFromBracket  className='m-auto  text-purple-600  text-5xl' />
                                        <h1 className=' font-bold text-2xl'>Confirm Sign Out</h1>
                                        <p className='text-sm'>Are you sure you want to sign out?</p>
                                        <div className='flex justify-center gap-4 mt-4'>
                                            <button onClick={SignOut} className='bg-purple-600 text-white px-4 py-2 rounded-xl'>Sign Out</button>
                                            <button className='bg-purple-100 text-black px-4 py-2 rounded-xl border-2 border-purple-700' onClick={() => setIsOpen((prev) => !prev)}>Cancel</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                    }
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Navbar */}

            <DisclosurePanel className="sm:hidden">
                <div className=" relative space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-400   text-white dark:bg-gray-800' : 'dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-950 dark:hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium ',
                            )}
                        >
                            {item.name}

                        </DisclosureButton>

                    ))}
                    <hr className='w-full m-auto h-1' />
                    <div className=' p-3 flex  justify-start gap-4'>
                        <h1 className='text-lg dark:text-white '>Screen Mode</h1>   <ThemeToggle className="py-3 dark:bg-dark   " />
                    </div>

                </div>
            </DisclosurePanel>
        </Disclosure >
    );
}

export default Navbar;
