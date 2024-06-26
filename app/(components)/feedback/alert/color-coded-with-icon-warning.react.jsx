"use client";
import React, { useState } from "react";
const Index = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {/* Code block starts */}

      <div className="flex items-center justify-center px-4 sm:px-0">
        <div
          id="alert"
          className={
            flag
              ? "lg:w-10/12 transition duration-150 ease-in-out bg-yellow-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 "
              : "lg:w-10/12 transition duration-150 ease-in-out bg-yellow-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 translate-hidden"
          }
        >
          <div className="sm:flex items-center">
            <div className="flex items-end">
              <div className="mr-2 mt-0.5 sm:mt-0 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </div>
              <p className="mr-2 text-base font-bold text-yellow-500">
                Warning
              </p>
            </div>
            <div className="h-1 w-1 bg-yellow-500 rounded-full mr-2 hidden xl:block" />
            <p className="text-base text-yellow-500">
              Hurricane warning in this area. Please check local media and
              authorities-NWS
            </p>
          </div>
          <div className="flex justify-end mt-4 md:mt-0 md:pl-4 lg:pl-0">
            <span className="text-sm mr-4 font-bold cursor-pointer text-yellow-500">
              Details
            </span>
            <span
              onClick={() => setFlag(false)}
              className="text-sm cursor-pointer text-gray-500"
            >
              Dismiss
            </span>
          </div>
        </div>
      </div>

      {/* Code block ends */}
      <style>
        {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
      </style>
    </div>
  );
};
export default Index;
