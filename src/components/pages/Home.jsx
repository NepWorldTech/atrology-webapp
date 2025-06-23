import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
    <>
    <div>
      <Slider/>
    </div>
  
    <div className="flex flex-col md:flex-row gap-6 px-10 py-10">
      {/* Kundali Form */}
      <div className="w-full md:w-1/3 bg-gray-100 p-5 rounded-xl shadow">
        <h1 className="text-center font-bold text-xl pb-3">Kundali / Birth Chart</h1>
        <p className="font-semibold pb-1">Enter Birth Details</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-2 border-gray-400 rounded-lg p-2 bg-gray-100"
          />

          <select className="w-full border-2 border-gray-400 rounded-lg p-2 bg-gray-100">
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>

          <div className="flex flex-wrap gap-2">
            <select className="flex-1 p-2 border rounded"> <option>Day</option>{Array.from({length: 31}, (_, i) => <option key={i}>{i+1}</option>)} </select>
            <select className="flex-1 p-2 border rounded">
              <option>Month</option>
              {["January","February","March","April","May","June","July","August","September","October","November","December"].map((month, i) => (
                <option key={i} value={i+1}>{month}</option>
              ))}
            </select>
            <select className="flex-1 p-2 border rounded"> <option>Year</option> {[2023, 2024, 2025, 2026, 2027].map((year) => <option key={year}>{year}</option>)} </select>
          </div>

          <div className="flex flex-wrap gap-2">
            <select className="flex-1 p-2 border rounded"><option>Hour</option>{Array.from({length: 24}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
            <select className="flex-1 p-2 border rounded"><option>Minute</option>{Array.from({length: 60}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
            <select className="flex-1 p-2 border rounded"><option>Second</option>{Array.from({length: 60}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
          </div>

          <input
            type="text"
            placeholder="Birth place"
            className="w-full border-2 border-gray-400 rounded-lg p-2 bg-gray-100"
          />
        </form>
      </div>

      {/* Kundli Matching */}
      <div className="w-full md:w-1/3 bg-gray-200 p-5 rounded-xl shadow">
        <h1 className="text-center font-bold text-xl pb-3">Kundli Matching</h1>
        <p className="font-semibold pb-2">Enter Boy's Details</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-2 border-gray-400 rounded-lg p-2 bg-gray-100"
          />

          <div className="flex flex-wrap gap-2">
            <select className="flex-1 p-2 border rounded"> <option>Day</option>{Array.from({length: 31}, (_, i) => <option key={i}>{i+1}</option>)} </select>
            <select className="flex-1 p-2 border rounded">
              <option>Month</option>
              {["January","February","March","April","May","June","July","August","September","October","November","December"].map((month, i) => (
                <option key={i} value={i+1}>{month}</option>
              ))}
            </select>
            <select className="flex-1 p-2 border rounded"> <option>Year</option> {[2023, 2024, 2025, 2026, 2027].map((year) => <option key={year}>{year}</option>)} </select>
          </div>

          <div className="flex flex-wrap gap-2">
            <select className="flex-1 p-2 border rounded"><option>Hour</option>{Array.from({length: 24}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
            <select className="flex-1 p-2 border rounded"><option>Minute</option>{Array.from({length: 60}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
            <select className="flex-1 p-2 border rounded"><option>Second</option>{Array.from({length: 60}, (_, i) => <option key={i}>{i.toString().padStart(2, '0')}</option>)}</select>
          </div>

          <input
            type="text"
            placeholder="Birth place"
            className="w-full border-2 border-gray-400 rounded-lg p-2 bg-gray-100"
          />

          <p className="text-center font-bold">Enter girl's detail on next page</p>

          <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition">
            Continue
          </button>
        </form>
      </div>

      {/* Panchang */}
      <div className="w-full md:w-1/3 bg-gray-200 p-5  text-2xl rounded-xl shadow">
        <h1 className="text-center font-bold text-xl pb-3">Panchang</h1>
        <p className="text-center font-semibold pb-2">New Delhi, India (20 June, 2025)</p>
        <div className="space-y-1  p-4 text-xl">
          <p><strong>Tithi:</strong> Krishna Navami upto 09:52:15</p>
          <p><strong>Month Amanta:</strong> Jyeshtha</p>
          <p><strong>Month Purnimanta:</strong> Ashadha</p>
          <p><strong>Day:</strong> Shukravara | <strong>Samvat:</strong> 2082</p>
          <p><strong>Nakshatra:</strong> Revati upto 21:45:51</p>
          <p><strong>Karan:</strong> Gar upto 09:52:15, Vanij upto 20:39:44</p>
        </div>
      </div>
    </div>



    <div className='flex flex-col ml-20 mr-80  mt-20 '>
      <h1 className='font-bold text-2xl pb-5'>
        Artificial Intelligence (AI)
      </h1>
      <p className='font-light text-gray-600'>Are you curious about how Artificial Intelligence can revolutionize your astrological experience? Discover the future of astrology with our <br/>advanced AI astrology services.  <br/> <br/>

At AstroSage, we offer an AI-powered platform that provides personalized AI horoscope readings, AI Kundli generation, and consultations with AI <br/>astrologers. Our cutting-edge AI technology analyzes vast amounts of astrological data to deliver accurate, customized predictions and insights.<br/> Whether you're looking for an AI Kundli that incorporates the latest astrological algorithms or an AI astrologer who can provide instant, precise <br/>answers to your questions, AstroSage is your go-to destination.  <br/> <br/>

Our AI astrology services combine the wisdom of traditional astrology with the power of Artificial Intelligence, ensuring that you receive the most<br/> accurate and insightful readings available. Embrace the future with our AI-enabled astrology, where technology meets tradition, to guide you <br/>through life's uncertainties.</p>
    </div>

    <div className='flex flex-col ml-20 mr-80  mt-20 '>
      <h1 className='font-bold text-2xl pb-5'>Astrology</h1>
      <p className='font-light text-gray-600'>Astrology is the mathematics of your life, derived from the calculations of your planetary positions to predict what the future holds for you. <br/> <br/>

Welcome to AstroSage! Your abode to every form of online astrology consultation. From Vedic astrology to KP system, and everything in <br/>between, including Birth chart, Numerology, Palmistry, Tarot Reading, Aura Reading, Vastu, Spiritual Healing, Online Horoscopes, Chinese <br/>Astrology, Western Astrology, Vedic Astrology, Zodiac readings (both Sun and Moon signs) and more. Consult the best astrologers of India for <br/>instant free astrology online consultation and seek solutions to your problems. <br/> <br/>

We understand the sanctity of this 5000 year age-old knowledge that was brought to us by our sages and gurus for world welfare. We are your<br/> one stop solution to free Online Horoscope and free astrology consultation. Just as we need doctors for our problems, we sure do need an expert <br/>astrological doctor for our astrology related problems too. We are your online astrology doctors. At any point of life where you <br/>may feel that you are at a low point, without much hesitation come to us. Our services range from free online horoscope to astrology online consultation in various<br/> branches with eminent experts. AstroSage, in its broadest sense, is here to help you with any astrology query and guide you via online medium.</p>
    </div>

    
    </>
  )
}

export default Home
   