"use client";
import React, { useState } from "react";

function Index() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="bg-white">
          <div className="relative mt-8 border rounded border-gray-200 p-3 sm:p-5 2xl:flex items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-20 h-20 shadow rounded-full"
                  src="https://cdn.tuk.dev/assets/templates/olympus/profile(1).png"
                />
                <div className="ml-3">
                  <p className="text-base font-medium leading-none text-gray-800">
                    Miracle Geidt
                  </p>
                  <p className="text-xs leading-3 text-gray-500 mt-2">
                    Sales Representative
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:flex items-center lg:items-start xl:items-center mt-4 2xl:mt-0">
              <div className="md:flex items-center">
                <div className="sm:flex items-center">
                  <div className="whitespace-nowrap w-48 sm:w-auto p-3 bg-gray-100 rounded text-xs md:text-sm font-medium leading-4 text-gray-600">
                    Email: miracle.g@gmail.com
                  </div>
                  <div className="p-3 bg-gray-100 w-48 sm:w-auto rounded text-xs md:text-sm font-medium leading-4 text-gray-600 sm:ml-4 mt-4 sm:mt-0">
                    Phone: 856-768-0965
                  </div>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center mt-4 md:mt-0">
                  <div className="p-3 bg-gray-100 rounded text-xs md:text-sm font-medium leading-4 text-gray-600 md:ml-4 w-48 sm:w-auto">
                    Location: Prague, CZE
                  </div>
                  <button className="focus:outline-none px-6 py-3 bg-indigo-700 rounded text-xs md:text-sm font-medium leading-none text-white hover:opacity-80 mt-4 sm:mt-0 sm:ml-4 w-48 sm:w-auto">
                    Chat
                  </button>
                </div>
              </div>
              <div className="absolute xl:relative xl:ml-4 right-0 top-0 mr-3 mt-3">
                <button
                  className="focus:outline-none mt-1"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    className="dropbtn"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                      stroke="#A1A1AA"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {show && (
                  <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6  -ml-16 lg:-ml-10 xl:ml-0">
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Edit</p>
                    </div>
                    <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Delete</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
