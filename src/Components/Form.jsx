import { getAuth } from 'firebase/auth'
import React from 'react'
import { db } from '../Config/firebase'
import { getDocs, collection, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const Form = () => {
    
    const auth = getAuth();

    // Set The Patient Collection
    const [patient, setPatient] = useState([]);
    const patientCollectionRef = collection(db, "patient");


    // Get Patient Data From Firebase
    useEffect(() => {
        const getPatient = async () => {
            try {
                const data = await getDocs(patientCollectionRef);
                const filteredData = data.docs.map((profile) => ({ ...profile.data(), id: profile.id }))
                setPatient(filteredData);
            }
            catch (error) {
                console.log(error);
            }
        }

        getPatient();
    }, []);




    return (
        <div className="flex items-center max-sm:w-full max-sm:my-0  justify-center min-h-screen m-auto my-8 w-5/6 ">
            <form className="w-full max-w-lg p-8 max-sm:p-10 space-y-10 bg-slate-200 dark:bg-slate-800 rounded-md shadow-md">
                {patient.map((profile) => (
                    <div key={profile.id}>
                    { auth?.currentUser?.uid == profile.userId && 
                    <div>
                        <div className="mb-4">
                            <h2 className="text-center text-deep-violet font-bold text-xl mb-6">Your Health, Our Priority. Register Now!</h2>
                            <label htmlFor="name" className="block text-deep-violet font-semibold">Name:</label>
                            <input type="text" id="name" name="name" defaultValue={profile.FirstName} className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="surname" className="block text-deep-violet font-semibold">LastName:</label>
                            <input type="text" id="surname" name="surname" defaultValue={profile.LastName} className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-deep-violet font-semibold">Email:</label>
                            <input type="email" id="email" name="email" defaultValue={profile.Email} className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-deep-violet font-semibold">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" defaultValue={profile.PhoneNum} className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-deep-violet font-semibold">Age:</label>
                            <input type="number" id="age" name="age" min={0} defaultValue={profile.Age} className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="photos" className="block text-deep-violet font-semibold">Upload Photos:</label>
                            <input type="file" id="photos" name="photos" accept="image/*" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" />
                        </div>
                        <button type="submit" className="w-full bg-deep-violet text-white px-4 py-2 rounded-md hover:bg-medium-purple focus:outline-none focus:ring-2 focus:ring-medium-purple">Register</button>
                    </div>
                    }
                    </div>
                ))}
            </form>
        </div>

    )
}

export default Form
