import React from 'react'

function Navbar() {
  return (
    <div className='flex w-10/12 mx-auto justify-between align-middle items-center bg-gray-700 py-3 rounded-2xl px-3'>
        <div className='text-sky-600 font-extrabold text-xl  '>
        LOST AND FOUND
        </div>
        <div className='flex justify-between align-middle items-center list-none gap-x-4 text-sky-50'>
            <li>Home</li>
            <li>Lost Items</li>
            <li>Report Lost Items</li>
        </div>
        <div>
            <button className='bg-sky-600  px-3 py-1 rounded-md font-bold '>Admin Login</button>
        </div>
    </div>
  )
}

export default Navbar