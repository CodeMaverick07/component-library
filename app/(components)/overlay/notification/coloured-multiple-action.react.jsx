"use client";
import React, { useState } from "react";
const Index = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div
      role="alert"
      classname={
        flag
          ? "sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5 mx-auto relative left-0 sm:left-auto right-0 sm:top-0 sm:w-6 md:w-3 w-11 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 transition duration-150 ease-in-out translate-show dark:bg-gray-800"
          : "translate-hide"
      }
      id="notification"
    >
      <div className="relative mx-auto flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 h-64 overflow-x-hidden">
        {/*code for notification starts*/}
        <div
          role="alert"
          className="sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:top-0 sm:w-6/12 md:w-3/5 w-11/12 bg-white shadow-lg rounded flex sm:flex-row flex-col pr-4 dark:bg-gray-800 transition duration-150 ease-in-out"
          id="notification"
        >
          <div className="sm:p-6 p-2 ml-4 sm:ml-0 mt-4 sm:mt-0 flex items-center justify-center bg-green-400 w-12 h-12 sm:h-auto sm:w-auto sm:rounded-tl sm:rounded-bl">
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
          <div className="flex flex-col justify-center pl-4 sm:w-9/12 py-4">
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">
              Action Completed
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 pb-2 font-normal">
              Congratulations. Your file has been downloaded successfully.
            </p>
            <div className="flex">
              <span className="text-sm text-green-400 font-bold mr-2 cursor-pointer">
                View{" "}
              </span>
              <span
                className="text-sm pl-2 text-gray-600 dark:text-gray-400 cursor-pointer"
                onClick={() => setFlag(!flag)}
              >
                Dismiss
              </span>
            </div>
          </div>
        </div>
        {/*code for notification ends*/}
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
