import React from 'react'
import { Link } from 'react-router-dom'
import markLogo from '../assets/mark.svg'
const Navbar2 = () => {
  return (
    <div className='mx-[20%] my-2 flex justify-between mt-5'>
        <div className=''>
            <nav className='flex gap-4'>
            <Link to="">
            <p>All Posts</p>
            </Link> 
            <Link to="">
            <p>Article</p>
            </Link> 
            <Link to="">
            <p>Event</p>
            </Link> 
            <Link to="">
            <p>Education</p>
            </Link> 
            <Link to="">
            <p>Job</p>
            </Link> 
        </nav>
        </div>
        <div className='flex'>
            <button className='bg-gray-300 flex items-center p-2 rounded-md mx-2'>
                Write Post <span><img src={markLogo}/></span> 
               
            </button>
            <button className='bg-blue-700 text-white p-2 rounded-md'>
                Join Group
            </button>
        </div>
    </div>
  )
}

export default Navbar2