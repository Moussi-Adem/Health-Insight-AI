import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../Config/firebase'
import { getDocs, collection, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import { getAuth, deleteUser, signOut } from 'firebase/auth'
import edit from "../assets/edit.png"
import ThemeToggle from "../Components/ThemeToggle"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { IoReturnUpBack } from "react-icons/io5";
import profileImg from "../assets/user.png";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";



const Profile = () => {

    const auth = getAuth();
    if (auth?.currentUser?.photoURL == null) {
        var userImg = profileImg;
    } else {
        var userImg = auth?.currentUser?.photoURL;
    }


    // Set The Patient Collection
    const [patient, setPatient] = useState([]);
    const patientCollectionRef = collection(db, "patient");

    // State For The Delete Account PopUp
    const [isOpenToDelete, setIsOpenToDelete] = useState(false);

    // State for The Sign Out popup
    const [isOpen, setIsOpen] = useState(false);

    // // Create A New Patient
    // const [newName, setNewName] = useState("");
    // const [newLastName, setNewLastName] = useState("");
    // const [newEmail, setNewEmail] = useState("");
    // const [newPassword, setNewPassword] = useState("");
    // const [newAge, setNewAge] = useState(0);
    // const [newPhoneNum, setNewPhoneNum] = useState(0);


    // Get Patient Data From Firebase
    const getPatient = async () => {
        try {
            const data = await getDocs(patientCollectionRef);
            const filteredData = data.docs.map((profile) => ({ ...profile.data(), id: profile.id }))
            setPatient(filteredData);
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getPatient();
    }, []);


    // Submiting The New Patient
    // const onSubmitPatient = async () => {
    //     try {
    //         await addDoc(patientCollectionRef, {
    //             Name: newName,
    //             LastName: newLastName,
    //             Age: newAge,
    //             Email: newEmail,
    //             Password: newPassword,
    //             PhoneNum: newPhoneNum,
    //             userId: auth?.currentUser?.uid,
    //         });
    //         toast.success("Patient Added Successfully");
    //         location.reload();
    //         getPatient()
    //     }
    //     catch (error) {
    //         toast.error( error.message);
    //     }
    // }

    // Delete User Account
    const deleteAcc = async (id) => {
        try {
            const patientDoc = doc(db, "patient", id);
            await deleteDoc(patientDoc);
            await deleteUser(auth?.currentUser);
            location.reload();
            navigate('/Presentation');
        }
        catch (error) {
            toast.error(error.message)
        }
    }


    // Update User Credentials
    const updateUserData = async (id) => {
        try {
            const patientDoc = doc(db, "patient", id);
            await updateDoc(patientDoc,{
                Name: newName,
                LastName: newLastName,
                Age: newAge,
                Email: newEmail,
                PhoneNum: newPhoneNum,
            });
            await deleteUser(auth?.currentUser);
            navigate('/Presentation');
            location.reload();
        }
        catch (error) {
            // toast.error(error.message)
        }
    }


    const SignOut = async () => {
        try {
            await signOut(auth);
            navigate('/Presentation');
            location.reload();
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className=' relative w-5/6   max-sm:h-screen max-sm:w-full bg-purple-200 dark:bg-purple-950 rounded-xl shadow-xl p-4 max-sm:p-1  max-sm:m-0  m-auto '>
            <div className='flex justify-between mx-10 mt-4 '>
                <Link to="/home"><IoReturnUpBack className='dark:text-purple-200 text-3xl cursor-pointer' /></Link>
                <div className='flex lg:text-xl'>
                    <h1 className='mx-2 dark:text-slate-300'>Theme</h1><ThemeToggle />
                </div>
            </div>
            <div className='w-fit m-auto p-4 my-2'>
                <img className='w-40 h-auto max-sm:w-20 max-md:w-32 border-8 p-1 max-sm:border-4 border-purple-600 rounded-full ' src={userImg} alt="" />
                <div className='relative bottom-9 max-md:left-24 max-md:bottom-11 max-sm:bottom-7 left-28 max-sm:left-14 '>
                    <div className='absolute top-0 bg-white p-1 max-sm:p-1 rounded-full '>
                        <img className='w-8 h-auto max-sm:w-5 border-2 border-purple-600 rounded-full  cursor-pointer ' src={edit} alt="" />
                    </div>
                </div>
            </div>
             {/* Display the user Data */}
            {patient.map((profile) => (
                <div key={profile.id}>
                    {auth?.currentUser?.uid == profile.userId &&
                        <>
                            <div>
                                <div className=' m-auto w-10/12 grid grid-cols-2 my-2 space-y-1 key={profile.id}'>
                                    <label className='text-purple-500 font-bold' htmlFor="Name">Name </label>
                                    <label className='text-purple-500 font-bold' htmlFor="LastName">LastName </label>
                                    <input className='p-2 w-11/12 px-3  text-xl max-sm:text-lg  border-b-4 outline-none border-purple-500 ' type="text" id="Name" defaultValue={profile.FirstName} />
                                    <input className='p-2 w-11/12 px-3  text-xl max-sm:text-lg border-b-4 outline-none border-purple-500' type="text" id="LastName" defaultValue={profile.LastName} />
                                </div>
                                <div className=' m-auto w-5/6 grid grid-cols-1 space-y-2 max-sm:space-y-1 '>
                                    <label className='text-purple-500  font-bold' htmlFor="Email">Email </label>
                                    <input className='p-2 w-full px-3  text-xl max-sm:text-lg border-b-4 outline-none border-purple-500' type="text" id="Email" defaultValue={profile.Email} />
                                    <label className='text-purple-500  font-bold' htmlFor="Password">Password </label>
                                    <input className=' p-2 w-full px-3  text-xl max-sm:text-lg  border-b-4 outline-none border-purple-500' type="Password" id="Password" defaultValue={profile.Password} />
                                    <div className='relative bottom-10 w-full'>
                                        <button className='absolute right-14 text-purple-500 max-sm:text-xs '>CHANGE PASSWORD</button>
                                    </div>
                                    <label className='text-purple-500  font-bold' htmlFor="Age">Age </label>
                                    <input className=' p-2 w-full px-3   text-xl max-sm:text-lg border-b-4 outline-none border-purple-500' min={0} type="Number" id="Age" defaultValue={profile.Age} />
                                    <label className='text-purple-500  font-bold' htmlFor="PhoneNum">Phone </label>
                                    <input className=' p-2 w-full px-3   text-xl max-sm:text-lg border-b-4 outline-none border-purple-500' min={0} type="Number" id="PhoneNum" defaultValue={profile.PhoneNum} />
                                    
                                    
                                    <button className=' bg-purple-700 rounded-md  text-white px-4 py-2 max-sm:text-xs ' onClick={updateUserData(profile.userId)}>SAVE CHANGES</button>
                                </div>
                            </div>
                            <div className=' flex justify-around   my-8'>
                                <button className='flex bg-red-700 hover:bg-red-500 text-white p-2 rounded-md max-sm:text-xs' onClick={() => setIsOpenToDelete((prev) => !prev)} >Delete Account <MdDelete className='mt-1 ml-1' /></button>
                                <button className='flex bg-slate-600 hover:bg-slate-500 text-white p-2 rounded-md max-sm:text-xs' onClick={() => setIsOpen((prev) => !prev)} >Sign Out <FaArrowRightFromBracket className='mt-1 ml-2' /></button>

                            </div>
                            {isOpen &&
                                <div className='absolute top-0  max-sm:-right-0 max-md:-right-14 max-lg:-right-20 max-xl:-right-24 xl:-left-36 h-full w-screen flex justify-center items-center  backdrop-blur-lg bg-black/90'>
                                    <div className=' absolute z-50  flex-row text-center space-y-4 bg-slate-100  max-sm:w-5/6 md:w-4/6 lg:w-1/3 blur-none p-4  m-auto rounded-xl shadow-xl '>
                                        <IoClose className='absolute cursor-pointer top-2 right-2 text-2xl text-purple-600 ' onClick={() => setIsOpen((prev) => !prev)} />
                                        <FaArrowRightFromBracket className='m-auto  text-purple-600  text-5xl' />
                                        <h1 className=' font-bold text-2xl'>Confirm Sign Out</h1>
                                        <p className='text-sm'>Are you sure you want to sign out?</p>
                                        <div className='flex justify-center gap-4 mt-4'>
                                            <button onClick={SignOut} className='bg-purple-600 text-white px-4 py-2 rounded-xl'>Sign Out</button>
                                            <button className='bg-purple-100 text-black px-4 py-2 rounded-xl border-2 border-purple-700' onClick={() => setIsOpen((prev) => !prev)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {isOpenToDelete &&
                                <div className='absolute top-0  max-sm:-right-0 max-md:-right-14 max-lg:-right-20 max-xl:-right-24 xl:-left-36 h-full w-screen flex justify-center items-center  backdrop-blur-lg bg-black/90'>
                                    <div className=' absolute z-50  flex-row text-center space-y-4 bg-slate-100  max-sm:w-5/6 md:w-4/6 lg:w-1/3 blur-none p-4  m-auto rounded-xl shadow-xl '>
                                        <IoClose className='absolute cursor-pointer top-2 right-2 text-2xl text-purple-600 ' onClick={() => setIsOpenToDelete((prev) => !prev)} />
                                        <MdDelete className='m-auto  text-purple-600  text-5xl' />
                                        <h1 className=' font-bold text-2xl'>Confirm Deleting This Account</h1>
                                        <p className='text-sm'>Are you sure you want to Delete This Account permanently ?</p>
                                        <div className='flex justify-center gap-4 mt-4'>
                                            <button onClick={() => deleteAcc(profile.id)} className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl'>Delete Account</button>
                                            <button className='bg-purple-100 text-black px-4 py-2 rounded-xl border-2 border-purple-700' onClick={() => setIsOpenToDelete((prev) => !prev)}>Cancel</button>
                                        </div>
                                    </div>
                                </div>}
                        </>
                    }
                </div>
            ))}



            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />
        </div>

    )
}

export default Profile
