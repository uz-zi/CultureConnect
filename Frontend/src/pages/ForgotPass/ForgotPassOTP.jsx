import React, { useState, useEffect, useRef } from 'react'; // Import useRef here
import Modal from '../../Modal/Modal';
import useModal from "../../Hooks/useModal";
import UpdatePassword from './UpdatePassword'; 
import axios from '../../axios';

function ForgotPassOTP({ onClose, isOpen }) {
    const [isOpen2, toggleModal] = useModal();
    const [inputs, setInputs] = useState(Array(6).fill('')); // Ensure 'inputs' is defined in this scope

    const inputRefs = useRef([]); // Correct usage of useRef

    const handleInputChange = (index) => (e) => {
        const newInputs = [...inputs]; // 'inputs' is accessible here
        newInputs[index] = e.target.value;
        setInputs(newInputs);

        if (e.target.value && index < 5) {
            inputRefs.current[index + 1] && inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index) => (e) => {
        if (e.key === "Backspace" && !inputs[index] && index > 0) {
            inputRefs.current[index - 1] && inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = async () => {
        const code = inputs.join('');
        try {
            const response = await axios.post('/user/verify_forgetpassword', { verificationCode: code });
            console.log(response);
            if(response.data === "User verified. You can now change your password.") {
                toggleModal(true);
            }
            // else if(response.data === "Invalid verification code"){
            //         alert('Invalid OTP')
            //     }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className="px-4 py-6">
                <h2 className="block text-3xl md:text-2xl font-bold mb-8 text-center">Enter OTP</h2>
                <div className="flex justify-center gap-2 mb-6">
                    {inputs.map((input, index) => (
                        <input
                            key={index}
                            ref={(el) => inputRefs.current[index] = el}
                            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            type="text"
                            maxLength="1"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                            value={input}
                            onChange={handleInputChange(index)}
                            onKeyDown={handleKeyDown(index)}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleVerify}
                    >
                        Verify
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4"
                        href="#"
                    >
                        
                    </a>
                </div>
            </form>
            {isOpen2 && <UpdatePassword isOpen={isOpen2} onClose={toggleModal} />}
        </Modal>
    );
}

export default ForgotPassOTP;
