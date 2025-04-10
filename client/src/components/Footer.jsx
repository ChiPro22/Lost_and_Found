import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-gray-700 w-full h-auto'>
    <p className='text-blue-600 font-extrabold text-3xl  w-8/12 m-auto pt-5'>Lost and Found</p>
    <p className='bg-sky-200  h-[0.1rem] w-9/12 m-auto my-5'></p>
       <div className='flex flex-row align-middle w-8/12 justify-between mx-auto'>
            <div>
                <div>
                    <p className='text-blue-400 text-xl font-bold'> Quick Links</p><br />
                    <ul className='text-blue-100 text-sm '>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact us</li>
                        <li>PICT</li>
                    </ul>
                </div>
            </div>
            <div>
            <p className='text-blue-400 text-xl font-bold'> Lost an Item?</p><br />
                    <ul className='text-blue-100 text-sm '>
                        <li>Report Lost Item</li>
                        <li>View Lost Items</li>
                        <li>Claimed Items</li>
                        <li>Help</li>
                    </ul>
            </div>
            <div>
                <h2 className='text-blue-400 text-xl font-bold'>Contact Information</h2>
                <br />
                <p className='text-blue-50 font-bold'>Address:</p>
                <p  className='text-blue-100 text-sm '> Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth <br></br> Campus, Dhankawadi, Pune, Maharashtra 411043</p>
                <p className='text-blue-50 font-bold'>Mail:</p>
                <p className='text-blue-100 text-sm '>registrar@pict.edu</p>
                <p className='text-blue-50 font-bold'>Contact no.:</p>
                <p className='text-blue-100 text-sm '>+91 20 24371101</p>
            </div>
        </div> 
        <p className='bg-sky-200  h-[0.1rem] w-9/12 m-auto mt-5 mb-2'></p>
            <div className='text-center text-gray-900 font-bold '>
                <p className='pb-2'>© PICT Collage Lost And Found All rights reserved</p>
            </div>   
     </div>   
    </>
  )
}

export default Footer