import React from 'react';
import bg from '../Assets/image/bg.png';
import { Jobs } from './jobs';

export const Home = () => {
  return (
    <div className="">
      <div className='border m-10 shadow-lg rounded-l-lg md:flex flex-none'>
        <div className='mt-12 sm:mt-36 px-0 sm:px-6'>
          <h className='text-xl font-bold sm:text-3xl flex justify-center tracking-[.16em]'>Discover Your Dream</h>
          <h1 className="text-md py-3 font-semibold sm:text-2xl flex justify-center tracking-[.16em]">Career Today</h1>
        </div>
        <div className='md:w-1/2 mt-5 md:mt-0'>
          <img src={bg} alt="not supported" className='h-[32rem] w-auto' />
        </div>
      </div>
      <Jobs />
    </div>
  )
}
