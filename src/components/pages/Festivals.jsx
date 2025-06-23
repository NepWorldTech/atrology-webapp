import React from 'react'
import Slider from '../Slider/Slider'

const Festivals = () => {
  return (
   <>
   <Slider/>
   <div className='flex bg-yellow-100 text-black font-medium text-xl ml-20 pl-2 pt-2 pb-2 mr-20'>
        <h1>Home / Festivals</h1>
      </div>

      <div className='flex flex-row '>
        <buttton>
          Lang :
        </buttton>

        <button>
          English
        </button>

        <button>
          Hindi
        </button>

        <button>
          Marathi
        </button>

      </div>

      <div className='flex flex-col bg-white shadow-2xl shadow-amber-100 ml-20 mr-20 text-center '>
        <h1 className='text-2xl font-bold '>Hindu Festivals 2025 & Muhurat</h1>
        <p className='font-light text-gray-500 pt-4 pb-1'>Hindu religion is known for numerous festivals and celebrations. Since ancient times, Indian festivals are<br/> undergoing transformations and gaining new meanings. Festivals of India had always been a way to gain<br/> more prosperity in life and strengthening the bond with loved ones. That is why, we are here with Hindu<br/> Panchang containing the details of all the Hindu festivals observed in India and around the globe. It will help<br/> you in celebrating all these wonderful events during the Shubh Muhurat.</p>
      </div>
   </>
  )
}

export default Festivals
