import React from 'react'
import Navbar from '../components/Navbar'
import College from "../assets/College.jpg"
function Home() {
  return (
    <>
   
    <div className='bg-sky-400 w-full h-[90vh] flex items-center  mx-auto relative'>
    <div className="absolute top-4 left-4 right-4">
    <Navbar className="w-full bg-white shadow-xl shadow-black py-4 px-6 sticky top-0 z-50" />
    </div>
        <div className='w-10/12 mx-auto'>
            <div className='flex-col '>
                <h2 className='text-blue-700 text-5xl font-bold'><span className='text-sky-100 text-7xl'>Oops!</span><br></br> Lost something on campus?</h2>
                <p className='text-blue-50 text-l py-3'>Don't panic. Just check here or post it <br></br> we’re helping students get back what they’ve lost,<br></br> quickly and hassle-free!</p>
                <div>
                    <button className='bg-sky-50 px-5 py-3 text-xl text-blue-900 mr-3 rounded-md font-bold'>Report Now</button>
                    <button className='bg-sky-50 px-5 py-3 text-xl text-blue-900 rounded-md font-bold'>Lost Items</button>
                </div>
            </div>
            <div>
                <img src="college" alt="" />
            </div>
        </div>
    </div>

    <section>
        <div>
            <h1>How it works?</h1>
            <div>
                <div>
                    <h3></h3>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </section>
   
    </>
  )
}

export default Home