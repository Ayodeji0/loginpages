import React from 'react'
import handImg from '../assets/handImg.jpg'

const login3 = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-900 rounded-lg'>
            <div className='hidden md:block w-full h-[550px]'>
                <img className='w-full h-full rounded-md' src={handImg} alt='handimg'/>
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>Lumcoin</h2>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='Username' />
                        <input className='border p-2' type='password' placeholder='password'/>
                    </div>
                    <button className='w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500'>Sign In</button>
                    <p className='text-center mt-3'>Forgot Password</p>
                </form>
                <button className='items-center bg-orange-600 hover:bg-orange-500 text-white py-2 rounded-md'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default login3