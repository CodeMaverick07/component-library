"use client";
import React, { useState } from "react";
const Index = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="h-[80vh] flex justify-center">
      <div className="py-6">
        <div
          className="bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">
            Basic Options
          </p>
          <div className="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 15 12 9 18 15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </div>
        {show && (
          <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute">
            <li className="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">
              Display
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Interface Settings
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Color Theme
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Wallpaper
            </li>
            <li>
              <hr className="border-gray-200 dark:border-gray-700 my-1" />
            </li>
            <li className="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">
              Account
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Notifications
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Account Data
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Sign Out
            </li>
            <li>
              <hr className="border-gray-200 dark:border-gray-700 my-1" />
            </li>
            <li className="text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 font-bold text-sm leading-3 tracking-normal py-3 px-3">
              Alerts
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Notifications
            </li>
            <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
              Delete Account
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Index;
