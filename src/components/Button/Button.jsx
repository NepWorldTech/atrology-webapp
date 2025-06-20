import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='bg-red-500 text-white font-medium pl-3 pr-3'>
        {title}
        </button> 
    </div>
  )
}

export default Button
