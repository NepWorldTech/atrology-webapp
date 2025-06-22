import React from 'react'

const LalKitab = () => {
  return (
    <>
     <div className='flex bg-yellow-100 text-black font-medium text-xl ml-20 pl-2 pt-2 pb-2 mr-20'>
        <h1>Home / Lal Kitab</h1>
      </div>
       <div className='flex flex-col ml-20 mr-20 items-center'>
        <h1 className='text-2xl font-bold  pt-4 pb-2'>Lal Kitab Kundli and Varshfal Online - Worksheet</h1>
        <p className='font-medium pt-3 pb-3'>Give your house position of planets in birth chart and this tool will generate Lal Kitab kundli,Lal Kitab Varshfal and also tell you malefic <br/>and benefic planets in janam kundli (birth chart) and varsh kundli (annual chart)</p>
       </div>
       <div className='flex flex-row gap-8 mt-10 flex-wrap justify-center items-center'>
        <div className=' flex flex-col gap-5'>
          <h1 className='pb-4 text-xl'>Planet</h1>
          <p className='font-bold'>Jupiter</p>
           <p className='font-bold'>Sun</p>
            <p className='font-bold'>Moon</p>
             <p className='font-bold'>Venus</p>
              <p className='font-bold'>Mars</p>
               <p className='font-bold'>Mercury</p>
                <p className='font-bold'>Saturn</p>
                 <p className='font-bold'>Rahu</p>
                  <p className='font-bold'>Ketu</p>
                  <h1 >
                      Kundali Type
                      <select className='border-2 border-black mt-5 '>
                      <option value="1">Year</option>
                      <option value="1">Month</option>
                      <option value="1">Day</option>
                      <option value="1">Hour</option>
                      <option value="1">Minute</option>
                      <option value="1">Second</option>
                      <option value="1">Degree</option>
                      </select>
                    </h1>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='pb-4  text-xl'>House </h1>
          <input type="text" className="border-2 border-black" />
           <input type="text" className="border-2 border-black" />
            <input type="text" className="border-2 border-black" />
             <input type="text" className="border-2 border-black" />
              <input type="text" className="border-2 border-black" />
               <input type="text" className="border-2 border-black" />
                <input type="text" className="border-2 border-black" />
                 <input type="text" className="border-2 border-black" />
                  <input type="text" className="border-2 border-black" />
                   <input type="text" className="border-2 border-black" />
                   <p>Period 
                      <input type="text" className="border-2 border-black" />
                    </p>        
        </div>
       </div>
       <div className='flex gap-4 mt-6  items-center justify-center'>
         <button className='bg-gray-200 text-black border-2 border-black p-2 cursor-pointer'>
        Submit
       </button>
      <button className='bg-gray-200 text-black border-2 border-black p-2 cursor-pointer'>
        Reset
       </button>
       </div>
       
    </>
  )
}

export default LalKitab
