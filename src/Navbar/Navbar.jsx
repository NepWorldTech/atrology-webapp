import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    ,<div className='flex flx-row fex-wrap gap-5 mt-10 ml-1- mr-10 '>
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

        
    </div>
      
    </>
  )
}

export default Navbar
