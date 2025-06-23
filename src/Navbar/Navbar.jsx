import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import favicon from '../assets/images/favicon.png'


const Navbar = () => {
    const signs = [
    { name: 'ARIES', path: '/aries' },
    { name: 'TAURUS', path: '/taurus' },
    { name: 'GEMINI', path: '/gemini' },
    { name: 'CANCER', path: '/cancer' },
    { name: 'LEO', path: '/leo' },
    { name: 'VIRGO', path: '/virgo' },
    { name: 'LIBRA', path: '/libra' },
    { name: 'SCORPIO', path: '/scorpio' },
    { name: 'SAGITTARIUS', path: '/sagittarius' },
    { name: 'CAPRICORN', path: '/capricorn' },
    { name: 'AQUARIUS', path: '/aquarius' },
    { name: 'PISCES', path: '/pisces' },
  ];

  return (
    <>
    <div className="flex justify-between ml-20 mr-20 items-center px-8 py-2 bg-yellow-500">
        <img src={favicon} alt="Favicon" className="h-8 w-8" />

        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="bg-white px-3 py-1 rounded hover:bg-gray-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-white px-3 py-1 rounded hover:bg-gray-100"
          >
            Signup
          </NavLink>
        </div>
        </div>
    <div className='flex flex-row flex-wrap p-4 bg-yellow-50 ml-20 mr-20 justify-space-between'>
      <div>
        <img src={logo} alt="" className="src" />
      </div>
  


    <div className="flex flex-wrap gap-2 p-2 justify-center">
      {signs.map((sign, index) => (
        <NavLink
          key={index}
          to={sign.path}
          className="px-4 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 font-semibold transition"
        >
          {sign.name}
        </NavLink>
      ))}
    </div>

    <div className='flex flex-row ml-3 text-center   pl-20 pr-20 pt-2 gap-4'>
      <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>A</h1>
       <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>B</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>C</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>D</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>E</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>F</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>G</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>H</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>I</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>J</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>K</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>L</h1>
        <h1 className=' bg-orange-600 p-2 text-center h-10 rounded-lg text-white font-bold'>M</h1>
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
