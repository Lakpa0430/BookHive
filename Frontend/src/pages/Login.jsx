// import React, { useState } from "react";
// const [state, setstate] = useState(false);

// export const Login = () => {
//   return (
//     <section className='flex justify-center items-center h-[39rem] '>
//   <div className="border  w-[22rem] rounded-lg shadow-2xl bg-slate-200">
//     <div className="flex justify-end">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="rounded-md w-6 h-6 m-3 mr-4 font-bold text-xl hover:text-white bg-red-600 mb-4 cursor-pointer transition duration-300">
//         <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
//       </svg>
//     </div>

//     <div className="flex flex-col gap-6 px-8">
//       <div className="flex items-center border rounded-md p-4 bg-white hover:shadow-xl cursor-pointer transition duration-300">
//         <input type="radio" name="login" id="emp" className='' />
//         <h1 className="font-semibold text-blue-500 px-2">Admin</h1>
//       </div>

//       <div className="flex items-center border rounded-md p-4 bg-white hover:shadow-xl cursor-pointer transition duration-300">
//         <input type="radio" name="login" id="seeker" className='' />
//         <h1 className="font-semibold text-blue-500 px-2">User</h1>
//       </div>
//     </div>

//     <div className="py-6 flex justify-end px-8 gap-3">
//       <button className="w-[5rem] rounded-md bg-white text-blue-500 font-semibold p-2 hover:text-black cursor-pointer transition duration-300">Cancel</button>
//       <button className="w-[3rem] rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition duration-300">Ok</button>
//     </div>
//   </div>
// </section>



    // =============login section here===================
  //   <body class="flex items-center justify-center ">
  //   <div className="border bg-slate-200 md:w-[30rem] w-[20rem] p-6 rounded-md cursor-pointer mt-16">
  //     <p className="font-semibold text-lg px-10 mb-4">Welcome to the login page</p>
  //     <div className="mb-4">
  //       <input type="text" placeholder="Enter User email or company email" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
  //     </div>
  //     <div className="mb-4">
  //       <input type="password" placeholder="Password" className="w-full md:w-[22rem] px-4 py-2 rounded-md" />
  //     </div>
  //     <div className="mb-6">
  //       <button className="w-full md:w-[22rem] bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700">
  //         Login
  //       </button>
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <p className="text-sm text-slate-500 mb-2">Don't have any account? <span className="text-red-300 cursor-pointer">Create</span></p>
  //       <div className="class">
  //         <p className="text-sm text-blue-400 cursor-pointer">Forgot password</p>
  //       </div>
  //     </div>
  //   </div>
  // </body>
      // =============login section here=================
  

import React, { useState } from "react";

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleLogin = () => {
    // Add your login logic here based on the selectedRole
    setIsLoggedIn(true);
  };

  return (
    <section className="flex justify-center items-center h-[39rem]">
      <div className="border w-[22rem] rounded-lg shadow-2xl bg-slate-200">
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rounded-md w-6 h-6 m-3 mr-4 font-bold text-xl hover:text-white bg-red-600 mb-4 cursor-pointer transition duration-300"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-6 px-8">
          <div className="flex items-center border rounded-md p-4 bg-white hover:shadow-xl cursor-pointer transition duration-300">
            <input
              type="radio"
              name="login"
              id="admin"
              className=""
              onChange={() => handleSelectRole("admin")}
            />
            <h1 className="font-semibold text-blue-500 px-2">Admin</h1>
          </div>

          <div className="flex items-center border rounded-md p-4 bg-white hover:shadow-xl cursor-pointer transition duration-300">
            <input
              type="radio"
              name="login"
              id="user"
              className=""
              onChange={() => handleSelectRole("user")}
            />
            <h1 className="font-semibold text-blue-500 px-2">User</h1>
          </div>
        </div>

        {selectedRole === 'admin' && (
          <div className="py-6 flex justify-end px-8 gap-3">
            {/* Admin login content */}
            <p>Welcome to the Admin login page</p>
            <p>Welcome back</p>

          </div>
        )}

        {selectedRole === 'user' && (
          <div className="py-6 flex justify-end px-8 gap-3">
            {/* User login content */}
            <p>Welcome to the User login page</p>
          </div>
        )}

        <div className="py-6 flex justify-end px-8 gap-3">
          <button className="w-[5rem] rounded-md bg-white text-blue-500 font-semibold p-2 hover:text-black cursor-pointer transition duration-300">
            Cancel
          </button>
          <button
            className="w-[3rem] rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer transition duration-300"
            onClick={handleLogin}
          >
            Ok
          </button>
        </div>
      </div>
    </section>
  );
};


//   )
// }