import React, { useState } from 'react';
import logo from '../assets/games.png'; // Adjust the path as necessary

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(null);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input box automatically
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    // Move to the previous input box on backspace
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Invalid OTP. Please enter 6 digits.');
    } else {
      setError(null); // Clear any previous errors
      // Implement verification logic here
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg ">
      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-12" /> {/* Adjust height as needed */}
      </div>
      <p className="text-gray-600 text-center mb-8">
          No worries, we'll handle it.
        </p>
      <h2 className="text-2xl font-bold text-center mb-8">OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 gap-4 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-${index}`}
              value={digit}
              onChange={(event) => handleInputChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="w-full h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              placeholder="●"
            />
          ))}
        </div>
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-950 -lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
