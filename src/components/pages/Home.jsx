import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import Man from '../../assets/images/aa.png'
const Home = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap mt-5 ml-20 mr-80 text-center bg-orange-100  w-cover'>
    <div className='flex  flex-col text-gray-800'>
      <h1 className='pt-10 text-red-600 font-bold text-4xl '>FIRST CHAT FREE</h1>
      <p className='text-red-600 pl-5 pt-3 font-medium text-xl'>GET FREE CHAT WITH FREE AI ASRTOLOGERS</p >
      <NavLink  to='/'></NavLink>
      <Button  title ='CHAT WITH US'/>
    </div>
    <div  className='    ml-60 flex w-44 h-54 pt-5  pb-5 justify-end'  >
      <img src={Man} alt="" className="src" />
    </div>
    </div>

    <div className='flex flex-row gap-6 ml-20 mr-80 '>
      <div className='w-64 pl-5 pr-5 pt-5 pb-10 h-78 bg-gray-100  mt-15' >
       <h1 className='text-center font-bold  pb-3 text-xl'>Kundali/Birth Chart</h1>
       <p className='font-semibold pb-1 '>Enter Birth Details</p>
       <form>
  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2 pl-2 border-gray-400 rounded-lg'>
    <input type="text" id="name" name="name" placeholder="Name"></input>
  </p>

  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2  pl-2 border-gray-400 rounded-lg'>
    <select id="gender" name="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
    </select>
  </p>
 <form>
  <p className='pt-2 pb-2'>
    <select name="day">
      <option value="">Day</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>

    <select name="month">
      <option value="">Month</option>
     
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>

    <select name="year">
      <option value="">Year</option>
      
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
    </select>

    <select name="hours">
      <option value="">Hour</option>
    
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
      <option value="3">03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
    </select>

    <select name="minutes">
      <option value="">Minutes</option>
     
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
      <option value="3">03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
      
      <option value="59">59</option>
    </select>

    <select name="seconds">
      <option value="">Seconds</option>
      
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
     
      <option value="59">59</option>
    </select>
  </p>
</form>

     

  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2 border-black rounded-lg'>
   <input type="text" id="name" name="birth place" placeholder="Birth place"></input>
  </p>
</form>
      </div>

      <div className='w-64 h-88 bg-gray-200 pl-5 pr-5 mt-15'>
        <h1 className='pt-3  pb-3 text-xl font-bold  text-center'>Kundli Matching</h1>
        <p className='font-semibold pb-2'>Enter Boy's Details</p>    
  <p className='  pb-2 pt-2 mb-3 bg-gray-100  pl-2 border-2 border-gray-400 rounded-lg'>
   <input type="text" id="name" name="name" placeholder="Name"></input>
  </p>
   <form>
  <p className='gap-4 pb-2'>
    <select name="day">
      <option value="">Day</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>

    <select name="month">
      <option value="">Month</option>
     
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>

    <select name="year">
      <option value="">Year</option>
      
      <option value="2023">2023</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
      <option value="2027">2027</option>
    </select>

    <select name="hours">
      <option value="">Hour</option>
    
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
      <option value="3">03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
    </select>

    <select name="minutes">
      <option value="">Minutes</option>
     
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
      <option value="3">03</option>
      <option value="4">04</option>
      <option value="5">05</option>
      <option value="6">06</option>
      <option value="7">07</option>
      <option value="8">08</option>
      <option value="9">09</option>
      <option value="10">10</option>
      
      <option value="59">59</option>
    </select>

    <select name="seconds">
      <option value="">Seconds</option>
      
      <option value="0">00</option>
      <option value="1">01</option>
      <option value="2">02</option>
     
      <option value="59">59</option>
    </select>
  </p>
</form>
  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2  pl-2 border-gray-400 rounded-lg'>
   <input type="text" id="name" name="birth place" placeholder="Birth place"></input>
  </p>  
  <p className='font-bold text-center'>Enter girl's detail on next page</p>
  <button className='bg-orange-600 text-center pl-2 pr-2 pt-2 pb-2 text-white'
  >
    Continue
  </button>
  
      </div>

      <div  className='w-74 h-78 bg-gray-200  mt-15'>
        <h1 className='font-bold text-xl text-center pt-3 pb-3'>Panchang</h1>
        <p className='font-bold text-center pb-2'>New Delhi, India (20 June, 2025)</p>
        <p><span className='font-bold pl-2 pb-1'>Tithi: </span>Krishna Navami upto 09:52:15</p>
        <p><span className='font-bold pl-2 pb-1'>Month Amanta:</span> Jyeshtha</p>
        <p><span className='font-bold pl-2 pb-1'>Month Purnimanta:</span> Ashadha</p>
        <p><span className='font-bold pl-2 pb-1'>Day:</span> Shukravara | <span className='font-bold'>Samvat: </span>2082</p>
        <p><span className='font-bold pl-2 pb-1'>Nakshatra:</span> Revati upto 21:45:51</p>
        <p><span className='font-bold pl-2 pb-1'>Karan:</span> Gar upto 09:52:15, Vanij upto <br/> 20:39:44</p>
      
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
