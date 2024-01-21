import React from 'react'
import {books1, books2, books3, books4} from '../Assets/Book/index'
import { Link } from 'react-router-dom';
// import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export const Jobs = () => {
  return (
    <section>
      <div className='border bg-slate-100 cursor-pointer  mt-16 h-full m-8 rounded-md '>
        <div className="flex items-center justify-center">
          <div className="mt-6">
            <input type="search" name="search" id="srch" placeholder='search' className='border border-blue-600 outline-none rounded-l-lg p-2 w-[15rem] md:w-[15rem] lg:w-[25rem]' />
            <button className='border text-white border-blue-600 bg-blue-300 rounded-r-2xl p-2 ml-1 hover:text-black'>Search</button>
          </div>
          <div className=" mt-6 hidden lg:flex ">
            <button type="button" className='m-2 p-1 md:ml-[1rem] lg:ml-[8rem] text-white bg-blue-600 rounded-lg hover:text-black hover:shadow-3xl hover:bg-blue-300'>Low to high</button>
            <button type="button" className='m-2 p-1 text-white bg-blue-600 rounded-lg hover:text-black hover:shadow-3xl hover:bg-blue-300'>Latest post</button>
          </div>
        </div>
        <div className=" flex items-center justify-center ">
          <div className=" lg:flex md:flex-wrap mt-8 justify-around gap-[3rem] ">
            <div className='border hover:drop-shadow-2xl rounded-md w-auto px-[4rem] sm:px-3'>
              <img src={books1} alt="not supported" className='md:w-[15rem] rounded-md h-[20rem]' />
              <div className="">
                <p className="text-xl sm:text-2xl font-semibold ">The Book Thief</p>
                <p className="font-mono">RS. 800</p>
              </div>
              <div className="flex justify-start md:justify-between">
                <Link to='/AddCart'>
                <button className="border bg-blue-400 font-mono p-1 rounded-md hover:text-white">Add To Cart</button>
                </Link>
                <Link to='/Buy'>
                <button className="border bg-orange-400 font-mono w-20 p-1 rounded-md hover:text-white">Buy</button>
                </Link>
              </div>
            </div>

            <div className='border  hover:drop-shadow-2xl  rounded-md w-auto px-[4rem] sm:px-3'>
              <img src={books2} alt="not supported" className='md:w-[15rem] rounded-md h-[20rem]' />
              <div className="">
                <p className="text-xl sm:text-2xl font-semibold ">The Book Thief</p>
                <p className="font-mono">RS. 800</p>
              </div>
              <div className="flex justify-start md:justify-between">
                <button className="border bg-blue-400 font-mono p-1 rounded-md hover:text-white">Add To Cart</button>
                <button className="border bg-orange-400 font-mono w-20 rounded-md hover:text-white">Buy</button>
              </div>
            </div>

            <div className='border  hover:drop-shadow-2xl  rounded-md w-auto px-[4rem] sm:px-3'>
              <img src={books3} alt="not supported" className='md:w-[15rem] rounded-md h-[20rem]' />
              <div className="">
                <p className="text-xl sm:text-2xl font-semibold ">The Book Thief</p>
                <p className="font-mono">RS. 800</p>
              </div>
              <div className="flex justify-start md:justify-between">
                <button className="border bg-blue-400 font-mono p-1 rounded-md hover:text-white">Add To Cart</button>
                <button className="border bg-orange-400 font-mono w-20 rounded-md hover:text-white">Buy</button>
              </div>
            </div>

            <div className='border  hover:drop-shadow-2xl  rounded-md w-auto px-[4rem] sm:px-3'>
              <img src={books4} alt="not supported" className='md:w-[15rem] rounded-md h-[20rem]' />
              <div className="">
                <p className="text-xl sm:text-2xl font-semibold ">The Book Thief</p>
                <p className="font-mono">RS. 800</p>
              </div>
              <div className="flex justify-start md:justify-between">
                <button className="border bg-blue-400 font-mono p-1 rounded-md hover:text-white">Add To Cart</button>
                <button className="border bg-orange-400 font-mono w-20 rounded-md hover:text-white">Buy</button>
              </div>
            </div>

            <div className='border  hover:drop-shadow-2xl  rounded-md w-auto px-[4rem] sm:px-3'>
              <img src={books1} alt="not supported" className='md:w-[15rem] rounded-md h-[20rem]' />
              <div className="">
                <p className="text-xl sm:text-2xl font-semibold ">The Book Thief</p>
                <p className="font-mono">RS. 800</p>
              </div>
              <div className="flex justify-start md:justify-between">
                <button className="border bg-blue-400 font-mono p-1 rounded-md hover:text-white">Add To Cart</button>
                <button className="border bg-orange-400 font-mono w-20 rounded-md hover:text-white">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
