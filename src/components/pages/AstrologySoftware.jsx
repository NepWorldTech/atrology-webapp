import React from 'react'
import astro from '../../assets/images/astro.jpg'

const AstrologySoftware = () => {
  return (
    <>
    <div className='flex flex-wrap border-2 border-black flex-row ml-20 mr-20'>
        <div>
            <img src={astro} alt="" className="pt-14" />
        </div>
        <div>
        <h1 className='font-bold text-center pt-10 '> Free Astrology Software Online</h1>
        <h2 className='font-semibold text-red-600'>Aatrology Software</h2>
        <p>This is a very comprehensive but free online astrology software that can help you create your birth chart, also called natal chart ( kundli or <br/> janma patri in India). It calculates the precise position of the stars, planets and nakshatras and other astrological details at your date, day and <br/>time of birth and the place you were born in. Use our free astrology software to calculate your personal birth chart and get detailed horoscope and <br/>predictions.</p>
        </div>
        </div>

        <div className='ml-20 mr-20 '>
            <h1 className='text-red-600'>Horoscope</h1>
            <p> <span className='font-bold'>Note : </span>This software is not for download as it is an online / web-based software.</p>
        </div>

        <div className="flex flex-col  flex-wrap p-2 justify-center items-center border-2 border-black ml-20 mr-20">
  <form className="space-y-4">
    <h1 className="border-2 border-black w-62 p-2 text-lg font-bold">
      Enter Your Birth Details:
    </h1>

    <label className="flex flex-row w-88 gap-3">
      Name
      <input type="text" name="fullname" className="type border p-2 rounded" />
    </label>

   
    <label className="flex fflex-row w-88 gap-8">
      Sex
      <select name="Sex" className="border p-2 rounded">
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="3">Others</option>
      </select>
    </label>

  
    <label className="flex flex-row w-88 gap-3 font-medium">
      Date of Birth <span className="text-red-600 text-sm">(DD/MM/YYYY)</span>
      <input type="date" name="dob" className="border p-2 rounded" />
    </label>

    <label className="flex flex-row  gap-4 w-88">
      Place
      <input type="text" name="place" className="type border p-2 rounded" />
    </label>

    <label className="flex flex-row gap-4 w-88">
      Longitude
      <select name="Longitude" className="border p-2 rounded">
        <option value="1">East</option>
        <option value="2">West</option>
      </select>
    </label>

    <label className="flex flex-row gap-8 w-88">
      Latitude
      <select name="Latitude" className="border p-2 rounded">
        <option value="1">North</option>
        <option value="2">South</option>
      </select>
    </label>

   
    <label className="flex flex-row  gap-8 w-88">
      Time Zone
      <input type="text" name="timezone" className="type border p-2 rounded" placeholder="e.g. GMT+5:30" />
    </label>
    <button className='bg-orange-600 text-white text-center pt-2 pb-2 pl-2 pr-2 '>
      Submit
    </button>
  </form>
</div>

      
    </>
  )
}

export default AstrologySoftware
