import React from 'react'

const Form = () => {
    return (
        <div className="flex items-center justify-center min-h-screen m-auto my-8 w-5/6 ">
            <form className="w-full max-w-lg p-8 bg-white rounded-md shadow-md">
                <div className="mb-4">
                    <h2 className="text-center text-deep-violet font-bold text-xl mb-6">Your Health, Our Priority. Register Now!</h2>
                    <label htmlFor="name" className="block text-deep-violet font-semibold">Name:</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="surname" className="block text-deep-violet font-semibold">Surname:</label>
                    <input type="text" id="surname" name="surname" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-deep-violet font-semibold">Email:</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-deep-violet font-semibold">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-deep-violet font-semibold">Age:</label>
                    <input type="number" id="age" name="age" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="symptoms" className="block text-deep-violet font-semibold">Symptoms:</label>
                    <textarea id="symptoms" name="symptoms" rows="4" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" required></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="photos" className="block text-deep-violet font-semibold">Upload Photos:</label>
                    <input type="file" id="photos" name="photos" accept="image/*" className="w-full px-4 py-2 border border-silver-accent rounded-md focus:outline-none focus:ring-2 focus:ring-medium-purple" />
                </div>
                <button type="submit" className="w-full bg-deep-violet text-white px-4 py-2 rounded-md hover:bg-medium-purple focus:outline-none focus:ring-2 focus:ring-medium-purple">Register</button>
            </form>
        </div>
    )
}

export default Form
