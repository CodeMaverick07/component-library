"use client";
import React, { useState } from "react";
export default function IndexPage() {
  const [file, setFile] = useState(true);
  const [edit, setEdit] = useState(null);
  return (
    <>
      <div className="mx-auto container  px-6">
        <div className="mt-16">
          <div className="flex pt-6 items-center">
            <div
              className="cursor-pointer text-gray-900 dark:text-gray-100"
              onClick={() => setFile(!file)}
            >
              {file ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Show"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width={28}
                  height={28}
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Hide"
                  className=" icon icon-tabler icon-tabler-chevron-up"
                  width={28}
                  height={28}
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
              )}
            </div>
            <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold ml-3">
              Files
            </h1>
          </div>
          {file && (
            <ul className="mt-8">
              <div className="flex items-center w-full justify-between mt-8">
                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width={40} height={40} rx={4} fill="#EDF2F7" />
                    <path
                      d="M20.0002 10.3335L9.3335 15.6668L20.0002 21.0002L30.6668 15.6668L20.0002 10.3335"
                      stroke="#718096"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.3335 21L20.0002 26.3333L30.6668 21"
                      stroke="#718096"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.3335 26.3335L20.0002 31.6668L30.6668 26.3335"
                      stroke="#718096"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">
                    Fonts.zip
                  </h4>
                </div>
                <div className="relative">
                  {edit == 0 && (
                    <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  )}

                  <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg
                      onClick={() => {
                        edit === 0 ? setEdit(null) : setEdit(0);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots dropbtn"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={5} cy={12} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-6">
                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width={40} height={40} rx={4} fill="#FEEBC8" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z"
                      stroke="#ED8936"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">
                    Tasks list web app.sketch
                  </h4>
                </div>
                <div className="relative">
                  {edit == 1 && (
                    <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  )}

                  <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg
                      onClick={() => {
                        edit === 1 ? setEdit(null) : setEdit(1);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots dropbtn"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={5} cy={12} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-6">
                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width={40} height={40} rx={4} fill="#C3DAFE" />
                    <path
                      d="M22.6665 8V13.3333C22.6665 14.0697 23.2635 14.6667 23.9998 14.6667H29.3332"
                      stroke="#667EEA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.6665 32H13.3332C11.8604 32 10.6665 30.8061 10.6665 29.3333V10.6667C10.6665 9.19391 11.8604 8 13.3332 8H22.6665L29.3332 14.6667V29.3333C29.3332 30.8061 28.1393 32 26.6665 32Z"
                      stroke="#667EEA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 16.0002H17.3333"
                      stroke="#667EEA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 21.3332H24"
                      stroke="#667EEA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 26.6667H24"
                      stroke="#667EEA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">
                    Tasks list web app.sketch
                  </h4>
                </div>
                <div className="relative">
                  {edit == 2 && (
                    <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  )}

                  <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg
                      onClick={() => {
                        edit === 2 ? setEdit(null) : setEdit(2);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots dropbtn"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={5} cy={12} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-6">
                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width={40} height={40} rx={4} fill="#BEE3F8" />
                    <path
                      d="M12.5254 21.4336V27H10.6504V12.7812H15.8945C17.4505 12.7812 18.668 13.1784 19.5469 13.9727C20.4323 14.7669 20.875 15.8184 20.875 17.127C20.875 18.5072 20.4421 19.5716 19.5762 20.3203C18.7168 21.0625 17.4831 21.4336 15.875 21.4336H12.5254ZM12.5254 19.9004H15.8945C16.8971 19.9004 17.6654 19.666 18.1992 19.1973C18.7331 18.722 19 18.0384 19 17.1465C19 16.3001 18.7331 15.623 18.1992 15.1152C17.6654 14.6074 16.9329 14.3438 16.002 14.3242H12.5254V19.9004ZM29.1367 24.1973C29.1367 23.709 28.9512 23.3314 28.5801 23.0645C28.2155 22.791 27.5742 22.5566 26.6562 22.3613C25.7448 22.166 25.0189 21.9316 24.4785 21.6582C23.9447 21.3848 23.5475 21.0592 23.2871 20.6816C23.0332 20.304 22.9062 19.8548 22.9062 19.334C22.9062 18.4681 23.2708 17.7357 24 17.1367C24.7357 16.5378 25.6732 16.2383 26.8125 16.2383C28.0104 16.2383 28.9805 16.5475 29.7227 17.166C30.4714 17.7845 30.8457 18.5755 30.8457 19.5391H29.0293C29.0293 19.0443 28.8177 18.6178 28.3945 18.2598C27.9779 17.9017 27.4505 17.7227 26.8125 17.7227C26.1549 17.7227 25.6406 17.8659 25.2695 18.1523C24.8984 18.4388 24.7129 18.8132 24.7129 19.2754C24.7129 19.7116 24.8854 20.0404 25.2305 20.2617C25.5755 20.4831 26.1973 20.6947 27.0957 20.8965C28.0007 21.0983 28.7331 21.3392 29.293 21.6191C29.8529 21.8991 30.2663 22.2376 30.5332 22.6348C30.8066 23.0254 30.9434 23.5039 30.9434 24.0703C30.9434 25.0143 30.5658 25.7728 29.8105 26.3457C29.0553 26.9121 28.0755 27.1953 26.8711 27.1953C26.0247 27.1953 25.276 27.0456 24.625 26.7461C23.974 26.4466 23.4629 26.0299 23.0918 25.4961C22.7272 24.9557 22.5449 24.373 22.5449 23.748H24.3516C24.3841 24.3535 24.625 24.8353 25.0742 25.1934C25.5299 25.5449 26.1289 25.7207 26.8711 25.7207C27.5547 25.7207 28.1016 25.584 28.5117 25.3105C28.9284 25.0306 29.1367 24.6595 29.1367 24.1973Z"
                      fill="#4299E1"
                    />
                  </svg>
                  <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">
                    Project file.psd
                  </h4>
                </div>
                <div className="relative">
                  {edit == 3 && (
                    <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  )}

                  <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg
                      onClick={() => {
                        edit === 3 ? setEdit(null) : setEdit(3);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots dropbtn"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={5} cy={12} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center w-full justify-between mt-6">
                <div className="flex items-center pb-6 border-b border-gray-300 dark:border-gray-700 cursor-pointer w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width={40} height={40} rx={4} fill="#FEEBC8" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.34929 18.5042L19.004 30.2229C19.5373 30.8095 20.4586 30.8095 20.992 30.2229L31.6493 18.5029C32.0666 18.0442 32.1146 17.3575 31.7653 16.8455L27.0493 9.9202C26.8016 9.55752 26.3912 9.34009 25.952 9.33887H14.0506C13.6114 9.34009 13.201 9.55752 12.9533 9.9202L8.23329 16.8429C7.88262 17.3562 7.93062 18.0442 8.34929 18.5042Z"
                      stroke="#ED8936"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h4 className="text-xl text-gray-800 dark:text-gray-100 pl-4">
                    Symbols.sketch
                  </h4>
                </div>
                <div className="relative">
                  {edit == 4 && (
                    <div className="mt-8 absolute left-0 -ml-24 shadow-md z-10  w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                  )}

                  <button className="text-gray-500 dark:text-gray-400 rounded cursor-pointer border border-transparent focus:outline-none">
                    <svg
                      onClick={() => {
                        edit === 4 ? setEdit(null) : setEdit(4);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots dropbtn"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={5} cy={12} r={1} />
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={19} cy={12} r={1} />
                    </svg>
                  </button>
                </div>
              </div>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
