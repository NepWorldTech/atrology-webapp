import React from 'react'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import Man from '../../assets/images/aa.png'
const Home = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap mt-20 ml-20 mr-20 text-center bg-gray-200 h-64 w-cover'>
    <div className='flex  flex-col text-gray-800'>
      <h1 className='pt-10 text-red-600 font-bold text-4xl '>FIRST CHAT FREE</h1>
      <p className='text-red-600 pl-5 pt-3 font-medium text-xl'>GET FREE CHAT WITH FREE AI ASRTOLOGERS</p >
      <NavLink  to='/'></NavLink>
      <Button  title ='CHAT WITH US'/>
    </div>
    <div  className='    ml-60 flex w-44 h-54 pt-5 justify-end'  >
      <img src={Man} alt="" className="src" />
    </div>
    </div>

    <div className='flex flex-row gap-6  '>
      <div className='w-44 h-66 bg-gray-200  mt-15' >
       <h1>Kundali/Birth Chart</h1>
       <p>Enter Birth Details</p>
       <form>
  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2 border-black rounded-lg'>
    <input type="text" id="name" name="name" placeholder="Name"></input>
  </p>

  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2 border-black rounded-lg'>
    <select id="gender" name="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="others">Others</option>
    </select>
  </p>
 <form>
  <p>
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

      <div className='w-44 h-66 bg-gray-200  mt-15'>
        <h1>Kundli Matching</h1>
        <p>Enter Boy's Details</p>    
  <p className='  pb-2 pt-2 mb-3 bg-gray-100 border-2 border-black rounded-lg'>
   <input type="text" id="name" name="name" placeholder="Name"></input>
  </p>
   <form>
  <p>
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
  <p>Enter girl's detail on next page</p>
  
      </div>

      <div  className='w-44 h-66 bg-gray-200  mt-15'>
        <h1>Panchang</h1>
        <p className='font-bold'>New Delhi, India (20 June, 2025)</p>
        <p><span className='font-bold'>Tithi: </span>Krishna Navami upto 09:52:15</p>
        <p><span className='font-bold'>Month Amanta:</span> Jyeshtha</p>
        <p><span className='font-bold'>Month Purnimanta:</span> Ashadha</p>
        <p><span className='font-bold'>Day:</span> Shukravara | <span className='font-bold'>Samvat: </span>2082</p>
        <p><span className='font-bold'>Nakshatra:</span> Revati upto 21:45:51</p>
        <p><span className='font-bold'>Karan:</span> Gar upto 09:52:15, Vanij upto <br/> 20:39:44</p>
      
      </div>
    </div>

    
    </>
  )
}

export default Home
