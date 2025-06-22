import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import favicon from '../assets/images/favicon.png'

const Navbar = () => {
  return (
    <>
    <div className='flex ml-20 mr-20 bg-gray-300'>
      <div>
        <img src={favicon} alt="" className="src" />
      </div>
    </div>
    <div className='flex flex-row flex-wrap p-4 bg-gray-200 ml-20 mr-20 justify-space-between'>
      <div>
        <img src={logo} alt="" className="src" />
      </div>
    <div className='gap-3 flex '>
      <table>
        <td>
         <NavLink to='/aries' >ARIES</NavLink>
          <NavLink to='/taurus' >TAURUS</NavLink>
           <NavLink to='/gemini' >GEMINI</NavLink>
            <NavLink to='/cancer' >CANCER</NavLink>
             <NavLink to='/leo' >LEO</NavLink>
              <NavLink to='/virgo' >VIRGO</NavLink> <br/>
               <NavLink to='/libra' >LIBRA</NavLink>
                <NavLink to='/scorpio' >SCORPIO</NavLink>
                 <NavLink to='/sagirattIus' >SAGIRATTIUS</NavLink>
                  <NavLink to='/capricon' >CAPRICON</NavLink>
                   <NavLink to='/aquarius' >aquarius</NavLink>
                    <NavLink to='/pisces' >PISCES</NavLink>
                    </td>
      </table>
    </div>
    <div className='flex flex-row gap-2'>
      <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>A</h1>
       <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>B</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>C</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>D</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>E</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>F</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>G</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>H</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>I</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>J</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>K</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>L</h1>
        <h1 className=' bg-orange-600 p-2 text-center text-white font-bold'>M</h1>
    </div>
    </div>
    <div className='flex flx-row fex-wrap bg-yellow-100 pt-3 pb-3 pl-3 gap-5  ml-20 mr-20 '>
        <NavLink to='/' >Home</NavLink>
          <NavLink to='/horoscope' >Horoscope</NavLink>
          <NavLink to='/astrology' >Astrology</NavLink>
            <NavLink to='/occult' >Occult</NavLink>
              <NavLink to='/free-reports' >FreeReports</NavLink>
                <NavLink to='/healing' >Healing</NavLink>
                  <NavLink to='/panchang' >Panchang</NavLink>
                    <NavLink to='/lal-kitab' >Lalkitab</NavLink>
                      <NavLink to='/kp' >KP</NavLink>
                        <NavLink to='/compatibility' >Copmpatibility</NavLink>
                          <NavLink to='/calculators' >Calculators</NavLink>
                            <NavLink to='/festivals' >Festivals</NavLink>
                              <NavLink to='/misc' >Misc</NavLink>
                               <NavLink to='/astrologysoftware' >AstrologySoftware</NavLink>
    </div>
      
    </>
  )
}

export default Navbar
