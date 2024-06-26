"use client";
import React, { useState } from "react";
export default function Index() {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded-md shadow-lg py-800 4 px-5 w-full dark:bg-gray- bg-white">
          <h2 className="text-xs leading-3 text-gray-600 dark:text-gray-100">
            Tasks
          </h2>
          <h1 className="text-lg font-bold text-gray-800 leading-5 pt-2">
            25th January, Monday
          </h1>
          <div className="pt-6 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-purple-400 text-xs italic font-normal pl-1">
                  11:30 AM
                </span>
              </div>
              <div className="cursor-pointer" onClick={() => setShow(!show)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={4}
                  viewBox="0 0 16 4"
                  fill="none"
                >
                  <path
                    d="M2.11191 2.83331C2.56925 2.83331 2.94 2.46021 2.94 1.99997C2.94 1.53973 2.56925 1.16663 2.11191 1.16663C1.65456 1.16663 1.28381 1.53973 1.28381 1.99997C1.28381 2.46021 1.65456 2.83331 2.11191 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.90854 2.83331C8.36588 2.83331 8.73663 2.46021 8.73663 1.99997C8.73663 1.53973 8.36588 1.16663 7.90854 1.16663C7.45119 1.16663 7.08044 1.53973 7.08044 1.99997C7.08044 2.46021 7.45119 2.83331 7.90854 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.705 2.83331C14.1623 2.83331 14.5331 2.46021 14.5331 1.99997C14.5331 1.53973 14.1623 1.16663 13.705 1.16663C13.2477 1.16663 12.877 1.53973 12.877 1.99997C12.877 2.46021 13.2477 2.83331 13.705 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute z-40 right-0">
                  <div className="rounded bg-white shadow-xl">
                    {show && (
                      <ul className=" mt-1">
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Delete
                        </li>
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Edit
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-none pt-2 text-gray-600 dark:text-gray-100">
              Meeting with stake holders
            </p>
            <p className="text-xs italic pt-1 leading-3 text-gray-400">
              Discussion on the template design
            </p>
            <div className="flex items-center justify-left">
              <div className="text-green-500 bg-green-200 py-1 px-2 rounded text-xs leading-3 mt-2">
                Completed
              </div>
            </div>
          </div>
          <div className="pt-6 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-blue-400 text-xs italic font-normal pl-1">
                  1:00 AM
                </span>
              </div>
              <div className="cursor-pointer" onClick={() => setShow1(!show1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={4}
                  viewBox="0 0 16 4"
                  fill="none"
                >
                  <path
                    d="M2.11191 2.83331C2.56925 2.83331 2.94 2.46021 2.94 1.99997C2.94 1.53973 2.56925 1.16663 2.11191 1.16663C1.65456 1.16663 1.28381 1.53973 1.28381 1.99997C1.28381 2.46021 1.65456 2.83331 2.11191 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.90854 2.83331C8.36588 2.83331 8.73663 2.46021 8.73663 1.99997C8.73663 1.53973 8.36588 1.16663 7.90854 1.16663C7.45119 1.16663 7.08044 1.53973 7.08044 1.99997C7.08044 2.46021 7.45119 2.83331 7.90854 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.705 2.83331C14.1623 2.83331 14.5331 2.46021 14.5331 1.99997C14.5331 1.53973 14.1623 1.16663 13.705 1.16663C13.2477 1.16663 12.877 1.53973 12.877 1.99997C12.877 2.46021 13.2477 2.83331 13.705 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute z-40 right-0">
                  <div className="rounded bg-white shadow-xl">
                    {show1 && (
                      <ul className=" mt-1">
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Delete
                        </li>
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Edit
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-none pt-2 text-gray-600 dark:text-gray-100">
              Design spring discussion
            </p>
            <p className="text-xs italic pt-1 leading-3 text-gray-400">
              Plan next weeks design sprint
            </p>
            <div className="flex items-center justify-left">
              <div className="text-red-500 bg-red-200 py-1 px-2 rounded text-xs leading-3 mt-2">
                Pending
              </div>
            </div>
          </div>
          <div className="pt-6 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="text-pink-400 text-xs italic font-normal pl-1">
                  2:30 PM
                </span>
              </div>
              <div className="cursor-pointer" onClick={() => setShow2(!show2)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={4}
                  viewBox="0 0 16 4"
                  fill="none"
                >
                  <path
                    d="M2.11191 2.83331C2.56925 2.83331 2.94 2.46021 2.94 1.99997C2.94 1.53973 2.56925 1.16663 2.11191 1.16663C1.65456 1.16663 1.28381 1.53973 1.28381 1.99997C1.28381 2.46021 1.65456 2.83331 2.11191 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.90854 2.83331C8.36588 2.83331 8.73663 2.46021 8.73663 1.99997C8.73663 1.53973 8.36588 1.16663 7.90854 1.16663C7.45119 1.16663 7.08044 1.53973 7.08044 1.99997C7.08044 2.46021 7.45119 2.83331 7.90854 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.705 2.83331C14.1623 2.83331 14.5331 2.46021 14.5331 1.99997C14.5331 1.53973 14.1623 1.16663 13.705 1.16663C13.2477 1.16663 12.877 1.53973 12.877 1.99997C12.877 2.46021 13.2477 2.83331 13.705 2.83331Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute z-40 right-0">
                  <div className="rounded bg-white shadow-xl">
                    {show2 && (
                      <ul className=" mt-1">
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Delete
                        </li>
                        <li className="hover:text-white cursor-pointer hover:bg-indigo-700 p-2">
                          Edit
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-none pt-2 text-gray-600 dark:text-gray-100">
              Finalise marketing plan
            </p>
            <p className="text-xs italic pt-1 leading-3 text-gray-400">
              Define channels for content
            </p>
            <div className="flex items-center justify-left">
              <div className="text-red-500 bg-red-200 py-1 px-2 rounded text-xs leading-3 mt-2">
                Pending
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
