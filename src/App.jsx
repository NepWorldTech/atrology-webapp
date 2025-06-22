import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Horoscope from './components/pages/Horoscope'
import Astrology from './components/pages/Astrology'
import Occult from './components/pages/Occult'
import FreeReports from './components/pages/FreeReports'
import Healing from './components/pages/Healing'
import Panchang from './components/pages/Panchang'
import LalKitab from './components/pages/LalKitab'
import KP from './components/pages/KP'
import Compatibility from './components/pages/Compatibility'
import Misc from './components/pages/Misc'
import Festivals from './components/pages/Festivals'
import Calculators from './components/pages/Calculators'
import Navbar from './Navbar/Navbar'
import AstrologySoftware from './components/pages/AstrologySoftware'





const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ='/horoscope' element={<Horoscope />} />
        <Route path ='/astrology' element={<Astrology />} />
        <Route path ='/astrologysoftware' element ={<AstrologySoftware/>}/>
        <Route path ='/occult' element={<Occult />} />
        <Route path ='/free-reports' element={<FreeReports />} />
        <Route path ='/healing' element={<Healing />} />
        <Route path ='/panchang'element={<Panchang />} />
        <Route path ='/lal-kitab' element={<LalKitab/>} />
        <Route path ='/kp'element={<KP />} />
        <Route path ='/compatibility' element={<Compatibility />} />
        <Route path ='/calculatorS' element={<Calculators />} />
        <Route path ='/festivals' element={<Festivals />} />
        <Route path ='/misc' element={<Misc />} />
        
      </Routes>
    </div>
  )
}

export default App

