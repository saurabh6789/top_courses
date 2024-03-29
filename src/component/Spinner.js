import React from 'react'
import './Spinner.css'

export const Spinner = () => {
  return (
    <div className="flex items-center flex-col space-y-2 mt-4">
        <div className='spinner' className="text-lg bg-gradient-to-r from-red-600 px-2 rounded-md to-yellow-300 text-bgDark font-semibold"></div>
        <p>Loading.....</p>
    </div>
  )
}
