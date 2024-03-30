// import React, { useState } from "react";
// import axios from "../../axios";
// import { loadStripe } from "@stripe/stripe-js";

// export default function PaymentViaCard() {
//   const [paymentInfo, setPaymentInfo] = useState({
//     amount: 100.00, // Set the default amount to $100
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//     cardHolder: "",
//   });
//   const [errors, setErrors] = useState({
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validation before submitting
//     if (validateForm()) {
//       try {
//         const stripe = await loadStripe(
//           "pk_test_51OzmBEEFSRqLNLAtlD4WepoA7O4I9KT2CvMhFob4JUmy250d8JvvNKEsZwi5sci5w1k8i7EbvC74ag2gKqdpqKZV00DWNRp48X"
//         );
//         // Create a payment method using Stripe.js
//         const { error } = await stripe.createPaymentMethod({
//             type: "card",
//             card: {
//               number: paymentInfo.cardNumber,
//               exp_month: parseInt(paymentInfo.expirationDate.split("/")[0]),
//               exp_year: parseInt(paymentInfo.expirationDate.split("/")[1]),
//               cvc: paymentInfo.cvv,
//             },
//           });

//         if (error) {
//           console.error("Error creating payment method:", error);
//           // Handle error, show error message to the user
//           return;
//         }

//         // If the payment method is created successfully, send payment details to backend
//         const response = await axios.post("/user/payment_with_card", {
//           amount: paymentInfo.amount,
//         });
//         console.log(response.data); // Log the response from the backend
//         // Clear the form or show a success message
//       } catch (error) {
//         console.error("Error processing payment:", error);
//         // Handle error, show error message to the user
//       }
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
    
//     // Validate input fields as user types
//     validateField(name, value);
//   };

//   const validateField = (fieldName, value) => {
//     let fieldValidationErrors = { ...errors };

//     switch (fieldName) {
//       case "cardNumber":
//         fieldValidationErrors.cardNumber =
//           /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(value)
//             ? ""
//             : "Invalid card number. Please enter a valid card number.";
//         break;
//       case "expirationDate":
//         fieldValidationErrors.expirationDate =
//           /^(0[1-9]|1[0-2])\/\d{2}$/.test(value)
//             ? ""
//             : "Invalid expiration date. Please enter date in MM / YY format.";
//         break;
//       case "cvv":
//         fieldValidationErrors.cvv =
//           /^\d{3}$/.test(value)
//             ? ""
//             : "Invalid CVV. Please enter a 3-digit CVV number.";
//         break;
//       default:
//         break;
//     }

//     setErrors(fieldValidationErrors);
//   };

//   const validateForm = () => {
//     let formIsValid = true;
//     let fieldValidationErrors = { ...errors };

//     // Validate card number
//     if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(paymentInfo.cardNumber)) {
//       fieldValidationErrors.cardNumber =
//         "Invalid card number. Please enter a valid card number.";
//       formIsValid = false;
//     }

//     // Validate expiration date
//     if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentInfo.expirationDate)) {
//       fieldValidationErrors.expirationDate =
//         "Invalid expiration date. Please enter date in MM / YY format.";
//       formIsValid = false;
//     }

//     // Validate CVV
//     if (!/^\d{3}$/.test(paymentInfo.cvv)) {
//       fieldValidationErrors.cvv =
//         "Invalid CVV. Please enter a 3-digit CVV number.";
//       formIsValid = false;
//     }

//     setErrors(fieldValidationErrors);
//     return formIsValid;
//   };

//   return (
//     <div>
//       <div className="w-full max-w-lg mx-auto p-8">
//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <div className="mb-6 text-center">
//             <h2 className="text-lg font-medium mb-2">Amount</h2>
//             <div className="text-gray-700">$100.00</div>
//           </div>
//           <h2 className="text-lg font-medium mb-6">Payment Information</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="card-number"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Card Number
//                 </label>
//                 <input
//                   type="text"
//                   name="cardNumber"
//                   id="card-number"
//                   placeholder="0000 0000 0000 0000"
//                   className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                   onChange={handleInputChange}
//                 />
//                 {errors.cardNumber && (
//                   <span className="text-red-500">{errors.cardNumber}</span>
//                 )}
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="expiration-date"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Expiration Date
//                 </label>
//                 <input
//                   type="text"
//                   name="expirationDate"
//                   id="expiration-date"
//                   placeholder="MM / YY"
//                   className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                   onChange={handleInputChange}
//                 />
//                 {errors.expirationDate && (
//                   <span className="text-red-500">{errors.expirationDate}</span>
//                 )}
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="cvv"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   CVV
//                 </label>
//                 <input
//                   type="text"
//                   name="cvv"
//                   id="cvv"
//                   placeholder="000"
//                   className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                   onChange={handleInputChange}
//                 />
//                 {errors.cvv && (
//                   <span className="text-red-500">{errors.cvv}</span>
//                 )}
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <label
//                   htmlFor="card-holder"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Card Holder
//                 </label>
//                 <input
//                   type="text"
//                   name="cardHolder"
//                   id="card-holder"
//                   placeholder="Full Name"
//                   className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="mt-8">
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

import axios from '../../axios';

const stripePromise = loadStripe("pk_test_51OzmBEEFSRqLNLAtlD4WepoA7O4I9KT2CvMhFob4JUmy250d8JvvNKEsZwi5sci5w1k8i7EbvC74ag2gKqdpqKZV00DWNRp48X");

const CheckoutForm = () => {
    
  const [amount, setAmount] = useState(100); // Default amount
  const [paymentStatus, setPaymentStatus] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();


const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Add a user-friendly message here
      console.log('Stripe has not loaded.');
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      console.log('[error]', error);
      let userFriendlyMessage = '';
      switch (error.code) {
        case 'incorrect_number':
          userFriendlyMessage = 'The card number is incorrect. Please check and try again.';
          break;
        // Handle other cases as needed
        default:
          userFriendlyMessage = `Payment failed: ${error.message}`;
      }
      setPaymentStatus(userFriendlyMessage);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      try {
        const response = await axios.post('/user/payment_with_card', {
          payment_method_id: paymentMethod.id,
          amount: amount,
          success_url: window.location.origin + '/Admin/adminSignin',
          cancel_url: window.location.origin + '/user/Payment',
        });
        console.log(response.data);
        // Use navigate to redirect based on the response from your backend
        // For example, if your backend sends a status or a specific URL to redirect to:
        navigate('/Admin/adminSignin'); // On success
      } catch (err) {
        console.log(err.response ? err.response.data.error : 'An error occurred');
        navigate('/user/Payment'); 
        setPaymentStatus(`Payment failed: ${err.response ? err.response.data.error : 'An error occurred'}`);
      }
      
    }
  }
  

  return (
    <div className="w-full max-w-lg mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6 text-center">
          <h2 className="text-lg font-medium mb-2">Enter Payment Details</h2>
          <div className="text-gray-700">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount ($):
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="card-details"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Card Details:
            </label>
            <div className="py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
              <CardElement />
            </div>
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg focus:outline-none"
          >
            Submit Payment
          </button>
        </form>
        {paymentStatus && <div className="text-center font-medium mt-4">{paymentStatus}</div>}
      </div>
    </div>
  );
}
  

  const PaymentViaCard = () => (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
  
  export default PaymentViaCard;