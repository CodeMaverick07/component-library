"use client";
import React, { useState } from "react";
const Index = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="h-[50vh] relative">
      <div
        role="alert"
        className={
          flag
            ? "xl:w-5/12 mx-auto sm:mx-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col absolute left-0 sm:left-auto dark:bg-gray-800 right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out translate-show"
            : "translate-hide"
        }
      >
        <div>
          <div className="sm:px-6 sm:border-r border-gray-300 dark:border-gray-700 flex items-center sm:justify-center px-4 mt-4 sm:mt-0 text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={40}
              height={40}
              fill="currentColor"
            >
              <path
                className="heroicon-ui"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center xl:-ml-4 sm:pl-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">
              Action Completed
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Your booking has been confirmed. Check your email for details.
            </p>
          </div>
          <div className="flex sm:flex-col sm:justify-center sm:border-l items-center border-gray-300 dark:border-gray-700 sm:w-1/6 pl-4 xl:pl-0 sm:pl-0 md:pl-0 lg:pl-0">
            <div className="sm:pt-4 pb-4 pb- sm:border-b border-gray-300 dark:border-gray-700 sm:w-full flex sm:justify-center">
              <span className="sm:text-sm text-xs text-green-400 font-bold mr-4 cursor-pointer">
                View
              </span>
            </div>
            <div
              className="sm:pt-4 pb-4 flex sm:justify-center cursor-pointer w-full"
              onClick={() => setFlag(false)}
            >
              <span className="sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer">
                Dismiss
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                .translate-show{
                    transform : translateX(0%);
                }
                .translate-hide{
                    transform : translateX(150%);
                }
                `}
      </style>
    </div>
  );
};
export default Index;
