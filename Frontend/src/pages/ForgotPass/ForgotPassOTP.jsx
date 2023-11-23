import React, { useState, useEffect, useRef } from 'react';
import Modal from '../../Modal/Modal';
function ForgotPassOTP({onClose,isOpen }) {
    const [inputs, setInputs] = useState(Array(6).fill(''));
    const inputRefs = Array(6).fill(0).map(() => useRef(null));

    const handleInputChange = (index) => (e) => {
        const newInputs = [...inputs];
        newInputs[index] = e.target.value;
        setInputs(newInputs);

        if (index < 5 && e.target.value) {
            inputRefs[index + 1].current.focus();
        }
        if(index === 5){
            handleVerify();
        }
    };

    const handleVerify = async () => {}


    useEffect(() => {
        inputRefs[0].current.focus();
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className="px-4 py-6">
            <h2 class="block text-3xl md:text-2xl font-bold mb-8 text-center">Enter OTP</h2>
                <div className="flex justify-center gap-2 mb-6">
                    {inputs.map((input, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            type="text"
                            maxLength="1"
                            pattern="[0-9]"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            required
                            value={input}
                            onChange={handleInputChange(index)}
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
                        Resend OTP
                    </a>
                </div>
            </form>
      
        </Modal>
    );
}

export default ForgotPassOTP;
