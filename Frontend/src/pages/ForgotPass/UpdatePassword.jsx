import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import axios from '../../axios'
import { useNavigate } from 'react-router-dom';


export default function UpdatePassword({ isOpen, onClose }) {
    const navigate = useNavigate();
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSubmit = async (e) => { 
        e.preventDefault();
       try {
        if(pass === confirmPass)
        {
            const response = await axios.post('/user/changepassword', {pass});
            console.log(response);
            if(response.data==="data updated")
            {
                alert('Password updated');
                navigate('/user/signin');
            }
        }
        else{
            alert('password & confirm password should be same');
        }
       } catch (error) {
        console.log(error);
       }
     };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="rounded-md p-4">
                <h1 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-400">
                    Update Your Password
                </h1>

                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                <label htmlFor="ConfirmPassword" className="block mt-4 text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    id="ConfirmPassword"
                    required
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                />

                <button
                    className="mt-6 w-full px-4 py-2 text-white rounded-md bg-teal-500 hover:bg-teal-700"
                    onClick={handleSubmit}
                >
                    Update Password
                </button>
                <button
                    className="mt-3 w-full px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
}
