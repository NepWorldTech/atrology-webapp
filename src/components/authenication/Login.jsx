import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState('Nepal');
  const countries = ['Hongkong', 'China', 'Nepal', 'USA', 'UK', 'India'];

  return (
    <div className="flex flex-col md:flex-row gap-10 px-10 py-10 ml-20 mr-20 mt-20 mb-20 bg-orange-100">
      
      <div className="flex flex-col text-lg space-y-2 w-full md:w-1/2">
        <h1 className="text-2xl font-bold  bg-orange-500 text-white w-48 pl-10 mb-4 p-2 ">Why Sign Up?</h1>
        <p className='font-bold text-gray-500 pl-10'>Get personalized information</p>
        <p className='font-bold text-gray-500 pl-10'>Save charts (kundli) on cloud</p>
        <p className='font-bold text-gray-500 pl-10'> Write your notes & comments</p>
        <p className='font-bold text-gray-500 pl-10'>Access from mobile & web</p>
        <p className='font-bold text-gray-500 pl-10'> Use worksheets for analysis</p>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl  text-orange-500 font-bold mb-4">LOGIN</h2>

       
        <label className="block mb-2 font-medium">Select Country</label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Mobile Number</label>
        <input
          type="text"
          placeholder="Enter your mobile number"
          className="w-full p-2 border border-gray-300 rounded-md"
        />

        <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
          Continue
        </button >
         <h1 className='text-center mt-4 font-md'>Don't have an account ? <NavLink to='/signup' >Signup</NavLink></h1>
      </div>
     
    </div>
  );
};

export default Login;

