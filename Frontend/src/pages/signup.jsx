import React from 'react'
import { Link } from 'react-router-dom';

const signup = () => {
    return (
        <body class="flex items-center justify-center ">
    <div className="border bg-slate-200 md:w-[30rem] w-[20rem] p-6 rounded-md cursor-pointer mt-16">
      <p className="font-semibold text-lg px-10 mb-4">Welcome to the login page</p>
      <div className="mb-4">
        <input type="text" placeholder="Enter User email or company email" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
      </div>
      <div className="mb-4">
        <input type="number" placeholder="Enter contact number" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Password" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
      </div>
      <div className="mb-4">
        <input type="password" placeholder="Confirm Password" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
      </div>
      <div className="mb-6">
        <button className="w-full md:w-[22rem] bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-slate-500 mb-2">Already have account. <span className="text-red-300 cursor-pointer">
        <Link to="/login">Login</Link>
          </span>
          </p>
        {/* <div className="class">
          <p className="text-sm text-blue-400 cursor-pointer">Forgot password</p>
        </div> */}
      </div>
    </div>
    </body>
    )
}
export default signup;