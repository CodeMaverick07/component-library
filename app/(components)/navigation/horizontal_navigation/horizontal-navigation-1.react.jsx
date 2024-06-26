"use client";
import React, { useState } from "react";
export default function Home() {
  const [sideBar, setsideBar] = useState();
  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav
          role="navigation"
          className="md:px-6 px-4  w-full mx-auto hidden md:block bg-indigo-700 shadow-md"
        >
          <div className="container bg-indigo-700 justify-between py-5 flex items-center md:items-stretch mx-auto border-b border-gray-200 border-opacity-20">
            <div className="h-full flex items-center">
              <button
                role="img"
                aria-label="logo"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mr-10 flex items-center"
              >
                <svg
                  width={191}
                  height={34}
                  viewBox="0 0 191 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.8409 17.2727C61.8409 11.75 58.6023 8.30682 54.1364 8.30682C49.6705 8.30682 46.4318 11.75 46.4318 17.2727C46.4318 22.7955 49.6705 26.2386 54.1364 26.2386C58.6023 26.2386 61.8409 22.7955 61.8409 17.2727ZM59.7955 17.2727C59.7955 21.8068 57.3068 24.2614 54.1364 24.2614C50.9659 24.2614 48.4773 21.8068 48.4773 17.2727C48.4773 12.7386 50.9659 10.2841 54.1364 10.2841C57.3068 10.2841 59.7955 12.7386 59.7955 17.2727ZM75.8267 12.9091H73.6449L70.0312 23.3409H69.8949L66.2812 12.9091H64.0994L68.9403 26H70.9858L75.8267 12.9091ZM83.331 26.2727C86.8764 26.2727 89.2628 23.5795 89.2628 19.5227C89.2628 15.4318 86.8764 12.7386 83.331 12.7386C79.7855 12.7386 77.3991 15.4318 77.3991 19.5227C77.3991 23.5795 79.7855 26.2727 83.331 26.2727ZM83.331 24.4659C80.6378 24.4659 79.4105 22.1477 79.4105 19.5227C79.4105 16.8977 80.6378 14.5455 83.331 14.5455C86.0241 14.5455 87.2514 16.8977 87.2514 19.5227C87.2514 22.1477 86.0241 24.4659 83.331 24.4659ZM94.3445 18.125C94.3445 15.8409 95.7592 14.5455 97.6854 14.5455C99.5518 14.5455 100.685 15.7642 100.685 17.8182V26H102.697V17.6818C102.697 14.3409 100.915 12.7386 98.2649 12.7386C96.2876 12.7386 95.0604 13.625 94.4467 14.9545H94.2763V12.9091H92.3331V26H94.3445V18.125ZM106.645 26H108.759V19.1818H112.577C112.73 19.1818 112.875 19.1818 113.02 19.1733L116.702 26H119.156L115.21 18.7898C117.435 18.0312 118.474 16.2159 118.474 13.8977C118.474 10.8125 116.634 8.54545 112.543 8.54545H106.645V26ZM108.759 17.2727V10.4205H112.474C115.304 10.4205 116.395 11.8011 116.395 13.8977C116.395 15.9943 115.304 17.2727 112.509 17.2727H108.759ZM129.974 20.6477C129.974 23.1023 128.099 24.2273 126.599 24.2273C124.928 24.2273 123.735 23 123.735 21.0909V12.9091H121.724V21.2273C121.724 24.5682 123.496 26.1705 125.951 26.1705C127.928 26.1705 129.224 25.1136 129.837 23.7841H129.974V26H131.985V12.9091H129.974V20.6477ZM141.158 26.2727C143.817 26.2727 145.76 24.9432 146.374 22.9659L144.43 22.4205C143.919 23.7841 142.734 24.4659 141.158 24.4659C138.797 24.4659 137.169 22.9403 137.075 20.1364H146.578V19.2841C146.578 14.4091 143.68 12.7386 140.953 12.7386C137.408 12.7386 135.055 15.5341 135.055 19.5568C135.055 23.5795 137.374 26.2727 141.158 26.2727ZM137.075 18.3977C137.212 16.3608 138.652 14.5455 140.953 14.5455C143.135 14.5455 144.533 16.1818 144.533 18.3977H137.075ZM154.581 26.2727C157.104 26.2727 157.956 24.7045 158.399 23.9886H158.638V26H160.581V8.54545H158.57V14.9886H158.399C157.956 14.3068 157.172 12.7386 154.615 12.7386C151.308 12.7386 149.024 15.3636 149.024 19.4886C149.024 23.6477 151.308 26.2727 154.581 26.2727ZM154.854 24.4659C152.331 24.4659 151.036 22.25 151.036 19.4545C151.036 16.6932 152.297 14.5455 154.854 14.5455C157.308 14.5455 158.604 16.5227 158.604 19.4545C158.604 22.4205 157.274 24.4659 154.854 24.4659ZM170.033 26.2727C172.692 26.2727 174.635 24.9432 175.249 22.9659L173.305 22.4205C172.794 23.7841 171.609 24.4659 170.033 24.4659C167.672 24.4659 166.044 22.9403 165.95 20.1364H175.453V19.2841C175.453 14.4091 172.555 12.7386 169.828 12.7386C166.283 12.7386 163.93 15.5341 163.93 19.5568C163.93 23.5795 166.249 26.2727 170.033 26.2727ZM165.95 18.3977C166.087 16.3608 167.527 14.5455 169.828 14.5455C172.01 14.5455 173.408 16.1818 173.408 18.3977H165.95ZM180.524 18.125C180.524 15.8409 181.939 14.5455 183.865 14.5455C185.732 14.5455 186.865 15.7642 186.865 17.8182V26H188.876V17.6818C188.876 14.3409 187.095 12.7386 184.445 12.7386C182.467 12.7386 181.24 13.625 180.626 14.9545H180.456V12.9091H178.513V26H180.524V18.125Z"
                    fill="#EEF2FF"
                  />
                  <path
                    d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                    fill="#EEF2FF"
                  />
                </svg>
              </button>
            </div>
            <div className="h-full flex items-center justify-center lg:pr-40">
              <div className="relative">
                <div className="text-indigo-50 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-4 md:h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className="hidden bg-indigo-50 bg-opacity-10 md:block focus:outline-none focus:border-indigo-700 lg:w-96 w-72 rounded text-sm text-indigo-50 pl-8 py-2 placeholder-indigo-50"
                  type="text"
                  placeholder="Search here"
                />
              </div>
            </div>
            <div className="md:flex items-center justify-end hidden">
              <div className="flex items-center">
                <div className="h-full flex items-center">
                  <button
                    aria-label="show notifications"
                    className="relative focus:outline-none hover:text-indigo-100 focus:text-indigo-100 text-indigo-50 mx-5 h-full flex items-center justify-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
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
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                      <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                  </button>
                </div>
                <div className="h-full flex items-center">
                  <button
                    aria-label="dropdown"
                    className="focus:outline-none focus:text-gray-900 text-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                    onclick="dropdownHandler(this)"
                  >
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                      alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <ul className="p-2 border-r absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                <li className="flex md:hidden cursor-pointer text-indigo-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Dashboard</span>
                  </div>
                </li>
                <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none  justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Products</span>
                  </div>
                </li>
                <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none  justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Performance</span>
                  </div>
                </li>
                <li className="border-b border-gray-300 flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-100  items-center focus:text-indigo-700 focus:outline-none">
                  <span className="ml-2 font-bold">Deliverables</span>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-100 focus:outline-none">
                  <div className="flex items-center">
                    <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <img
                        className="rounded h-10 w-10 object-cover"
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                        alt="logo"
                      />
                    </div>
                    <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                    <div className="sm:ml-2 text-gray-800 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
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
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
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
                      <circle cx={12} cy={7} r={4} />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span className="ml-2">Profile</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-logout"
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
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="ml-2">Sign out</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container py-4  justify-between flex items-center md:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <ul className="pr-12 md:flex items-center h-full hidden">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 tracking-normal"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mx-6 tracking-normal"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Stats
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav className="md:hidden">
          <div className="w-full shadow-md bg-indigo-700 fixed top-0 z-40">
            <div className="w-full flex md:hidden">
              <div className="py-4 flex  justify-between mx-4 items-center w-full">
                <div
                  aria-label="logo"
                  role="img"
                  tabIndex={0}
                  className="focus:outline-none my-2"
                >
                  <svg
                    width={159}
                    height={26}
                    viewBox="0 0 159 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M51.0341 12.7273C51.0341 8.125 48.3352 5.25568 44.6136 5.25568C40.892 5.25568 38.1932 8.125 38.1932 12.7273C38.1932 17.3295 40.892 20.1989 44.6136 20.1989C48.3352 20.1989 51.0341 17.3295 51.0341 12.7273ZM49.3295 12.7273C49.3295 16.5057 47.2557 18.5511 44.6136 18.5511C41.9716 18.5511 39.8977 16.5057 39.8977 12.7273C39.8977 8.94886 41.9716 6.90341 44.6136 6.90341C47.2557 6.90341 49.3295 8.94886 49.3295 12.7273ZM62.6889 9.09091H60.8707L57.8594 17.7841H57.7457L54.7344 9.09091H52.9162L56.9503 20H58.6548L62.6889 9.09091ZM68.9425 20.2273C71.897 20.2273 73.8857 17.983 73.8857 14.6023C73.8857 11.1932 71.897 8.94886 68.9425 8.94886C65.9879 8.94886 63.9993 11.1932 63.9993 14.6023C63.9993 17.983 65.9879 20.2273 68.9425 20.2273ZM68.9425 18.7216C66.6982 18.7216 65.6754 16.7898 65.6754 14.6023C65.6754 12.4148 66.6982 10.4545 68.9425 10.4545C71.1868 10.4545 72.2095 12.4148 72.2095 14.6023C72.2095 16.7898 71.1868 18.7216 68.9425 18.7216ZM78.1204 13.4375C78.1204 11.5341 79.2994 10.4545 80.9045 10.4545C82.4599 10.4545 83.4045 11.4702 83.4045 13.1818V20H85.0806V13.0682C85.0806 10.2841 83.5962 8.94886 81.3874 8.94886C79.7397 8.94886 78.717 9.6875 78.2056 10.7955H78.0636V9.09091H76.4442V20H78.1204V13.4375ZM88.3707 20H90.1321V14.3182H93.3139C93.4418 14.3182 93.5625 14.3182 93.6832 14.3111L96.7514 20H98.7969L95.5085 13.9915C97.3622 13.3594 98.2287 11.8466 98.2287 9.91477C98.2287 7.34375 96.6946 5.45455 93.2855 5.45455H88.3707V20ZM90.1321 12.7273V7.01705H93.2287C95.5866 7.01705 96.4957 8.16761 96.4957 9.91477C96.4957 11.6619 95.5866 12.7273 93.2571 12.7273H90.1321ZM107.811 15.5398C107.811 17.5852 106.249 18.5227 104.999 18.5227C103.607 18.5227 102.613 17.5 102.613 15.9091V9.09091H100.936V16.0227C100.936 18.8068 102.414 20.142 104.459 20.142C106.107 20.142 107.186 19.2614 107.698 18.1534H107.811V20H109.488V9.09091H107.811V15.5398ZM117.131 20.2273C119.347 20.2273 120.967 19.1193 121.478 17.4716L119.859 17.017C119.433 18.1534 118.445 18.7216 117.131 18.7216C115.164 18.7216 113.808 17.4503 113.729 15.1136H121.648V14.4034C121.648 10.3409 119.234 8.94886 116.961 8.94886C114.006 8.94886 112.046 11.2784 112.046 14.6307C112.046 17.983 113.978 20.2273 117.131 20.2273ZM113.729 13.6648C113.843 11.9673 115.043 10.4545 116.961 10.4545C118.779 10.4545 119.944 11.8182 119.944 13.6648H113.729ZM128.317 20.2273C130.42 20.2273 131.13 18.9205 131.499 18.3239H131.698V20H133.317V5.45455H131.641V10.8239H131.499C131.13 10.2557 130.477 8.94886 128.346 8.94886C125.59 8.94886 123.687 11.1364 123.687 14.5739C123.687 18.0398 125.59 20.2273 128.317 20.2273ZM128.545 18.7216C126.442 18.7216 125.363 16.875 125.363 14.5455C125.363 12.2443 126.414 10.4545 128.545 10.4545C130.59 10.4545 131.67 12.1023 131.67 14.5455C131.67 17.017 130.562 18.7216 128.545 18.7216ZM141.194 20.2273C143.41 20.2273 145.029 19.1193 145.54 17.4716L143.921 17.017C143.495 18.1534 142.508 18.7216 141.194 18.7216C139.227 18.7216 137.87 17.4503 137.792 15.1136H145.711V14.4034C145.711 10.3409 143.296 8.94886 141.023 8.94886C138.069 8.94886 136.109 11.2784 136.109 14.6307C136.109 17.983 138.04 20.2273 141.194 20.2273ZM137.792 13.6648C137.906 11.9673 139.106 10.4545 141.023 10.4545C142.842 10.4545 144.006 11.8182 144.006 13.6648H137.792ZM149.937 13.4375C149.937 11.5341 151.116 10.4545 152.721 10.4545C154.276 10.4545 155.221 11.4702 155.221 13.1818V20H156.897V13.0682C156.897 10.2841 155.413 8.94886 153.204 8.94886C151.556 8.94886 150.533 9.6875 150.022 10.7955H149.88V9.09091H148.261V20H149.937V13.4375Z"
                      fill="#EEF2FF"
                    />
                    <path
                      d="M1 13L0 13L1 13ZM5.5 13L4.5 13L5.5 13ZM13 20.5L13 21.5L13 20.5ZM20.5 13L21.5 13L20.5 13ZM13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761L5.22183 5.22183C7.28473 3.15893 10.0826 2 13 2V0ZM3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13L2 13C2 10.0826 3.15893 7.28473 5.22183 5.22183L3.80761 3.80761ZM0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924L5.22183 20.7782C3.15893 18.7153 2 15.9174 2 13L0 13ZM3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26V24C10.0826 24 7.28473 22.8411 5.22183 20.7782L3.80761 22.1924ZM13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924L20.7782 20.7782C18.7153 22.8411 15.9174 24 13 24V26ZM22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13H24C24 15.9174 22.8411 18.7153 20.7782 20.7782L22.1924 22.1924ZM26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761L20.7782 5.22183C22.8411 7.28473 24 10.0826 24 13H26ZM22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V2C15.9174 2 18.7153 3.15893 20.7782 5.22183L22.1924 3.80761ZM13 4.5C10.7457 4.5 8.58365 5.39553 6.98959 6.98959L8.40381 8.40381C9.62279 7.18482 11.2761 6.5 13 6.5L13 4.5ZM6.98959 6.98959C5.39553 8.58365 4.5 10.7457 4.5 13L6.5 13C6.5 11.2761 7.18482 9.62279 8.40381 8.40381L6.98959 6.98959ZM4.5 13C4.5 15.2543 5.39553 17.4163 6.98959 19.0104L8.40381 17.5962C7.18482 16.3772 6.5 14.7239 6.5 13L4.5 13ZM6.98959 19.0104C8.58365 20.6045 10.7457 21.5 13 21.5L13 19.5C11.2761 19.5 9.62279 18.8152 8.40381 17.5962L6.98959 19.0104ZM13 21.5C15.2543 21.5 17.4163 20.6045 19.0104 19.0104L17.5962 17.5962C16.3772 18.8152 14.7239 19.5 13 19.5L13 21.5ZM19.0104 19.0104C20.6045 17.4163 21.5 15.2543 21.5 13L19.5 13C19.5 14.7239 18.8152 16.3772 17.5962 17.5962L19.0104 19.0104ZM21.5 13C21.5 10.7457 20.6045 8.58365 19.0104 6.98959L17.5962 8.40381C18.8152 9.62279 19.5 11.2761 19.5 13L21.5 13ZM19.0104 6.98959C17.4163 5.39553 15.2543 4.5 13 4.5L13 6.5C14.7239 6.5 16.3772 7.18482 17.5962 8.40381L19.0104 6.98959ZM7.8753 6.21913C5.19967 8.35964 3.65772 10.9697 3.37911 14.0345C3.10382 17.0626 4.07465 20.3962 6.13176 23.9961L7.86824 23.0039C5.92535 19.6038 5.14618 16.6874 5.37089 14.2155C5.59228 11.7803 6.80033 9.64036 9.12469 7.78087L7.8753 6.21913ZM18.1247 19.7809C20.7961 17.6437 22.3416 15.0621 22.6208 12.0203C22.8966 9.01632 21.9237 5.70864 19.8682 2.11152L18.1318 3.1038C20.0763 6.50668 20.8534 9.39516 20.6292 11.8374C20.4084 14.2418 19.2039 16.3563 16.8753 18.2191L18.1247 19.7809Z"
                      fill="#EEF2FF"
                    />
                  </svg>
                </div>
                <div className="flex md:hidden items-center justify-end">
                  <div className="flex items-center">
                    <div className="h-full flex items-center">
                      <button
                        aria-label="show notifications"
                        className="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 h-full flex items-center justify-center text-gray-800 cursor-pointer"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92475 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
                            stroke="#EEF2FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                            stroke="#EEF2FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                          <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                        </div>
                      </button>
                    </div>
                    <div className="h-full flex items-center">
                      <button
                        aria-label="dropdown"
                        className="focus:outline-none mx-4 focus:text-gray-900 text-gray-800 border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                        onclick="dropdownHandler(this)"
                      >
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                          alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                        />
                      </button>
                    </div>
                    <div className="h-full flex items-center">
                      <button
                        onClick={() => setsideBar(!sideBar)}
                        aria-label="open menu"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md text-gray-800"
                        onclick="sidebarHandler(true)"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 10H3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 6H3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 14H3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 18H3"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              sideBar
                ? "absolute w-full h-full transform translate-x-0 z-40 transition duration-700 md:hidden"
                : "absolute w-full h-full transform -translate-x-full z-40 transition duration-700 md:hidden"
            }
            id="mobile-nav"
          >
            <div className="w-full h-full shadow-lg z-40 fixed overflow-y-auto  top-0 bg-indigo-700 flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
              <div className="sm:px-6 px-4 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="pb-4 flex items-center justify-between w-full">
                        <div
                          aria-label="logo"
                          role="img"
                          tabIndex={0}
                          className="focus:outline-none my-2"
                        >
                          <svg
                            width={159}
                            height={26}
                            viewBox="0 0 159 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M51.0341 12.7273C51.0341 8.125 48.3352 5.25568 44.6136 5.25568C40.892 5.25568 38.1932 8.125 38.1932 12.7273C38.1932 17.3295 40.892 20.1989 44.6136 20.1989C48.3352 20.1989 51.0341 17.3295 51.0341 12.7273ZM49.3295 12.7273C49.3295 16.5057 47.2557 18.5511 44.6136 18.5511C41.9716 18.5511 39.8977 16.5057 39.8977 12.7273C39.8977 8.94886 41.9716 6.90341 44.6136 6.90341C47.2557 6.90341 49.3295 8.94886 49.3295 12.7273ZM62.6889 9.09091H60.8707L57.8594 17.7841H57.7457L54.7344 9.09091H52.9162L56.9503 20H58.6548L62.6889 9.09091ZM68.9425 20.2273C71.897 20.2273 73.8857 17.983 73.8857 14.6023C73.8857 11.1932 71.897 8.94886 68.9425 8.94886C65.9879 8.94886 63.9993 11.1932 63.9993 14.6023C63.9993 17.983 65.9879 20.2273 68.9425 20.2273ZM68.9425 18.7216C66.6982 18.7216 65.6754 16.7898 65.6754 14.6023C65.6754 12.4148 66.6982 10.4545 68.9425 10.4545C71.1868 10.4545 72.2095 12.4148 72.2095 14.6023C72.2095 16.7898 71.1868 18.7216 68.9425 18.7216ZM78.1204 13.4375C78.1204 11.5341 79.2994 10.4545 80.9045 10.4545C82.4599 10.4545 83.4045 11.4702 83.4045 13.1818V20H85.0806V13.0682C85.0806 10.2841 83.5962 8.94886 81.3874 8.94886C79.7397 8.94886 78.717 9.6875 78.2056 10.7955H78.0636V9.09091H76.4442V20H78.1204V13.4375ZM88.3707 20H90.1321V14.3182H93.3139C93.4418 14.3182 93.5625 14.3182 93.6832 14.3111L96.7514 20H98.7969L95.5085 13.9915C97.3622 13.3594 98.2287 11.8466 98.2287 9.91477C98.2287 7.34375 96.6946 5.45455 93.2855 5.45455H88.3707V20ZM90.1321 12.7273V7.01705H93.2287C95.5866 7.01705 96.4957 8.16761 96.4957 9.91477C96.4957 11.6619 95.5866 12.7273 93.2571 12.7273H90.1321ZM107.811 15.5398C107.811 17.5852 106.249 18.5227 104.999 18.5227C103.607 18.5227 102.613 17.5 102.613 15.9091V9.09091H100.936V16.0227C100.936 18.8068 102.414 20.142 104.459 20.142C106.107 20.142 107.186 19.2614 107.698 18.1534H107.811V20H109.488V9.09091H107.811V15.5398ZM117.131 20.2273C119.347 20.2273 120.967 19.1193 121.478 17.4716L119.859 17.017C119.433 18.1534 118.445 18.7216 117.131 18.7216C115.164 18.7216 113.808 17.4503 113.729 15.1136H121.648V14.4034C121.648 10.3409 119.234 8.94886 116.961 8.94886C114.006 8.94886 112.046 11.2784 112.046 14.6307C112.046 17.983 113.978 20.2273 117.131 20.2273ZM113.729 13.6648C113.843 11.9673 115.043 10.4545 116.961 10.4545C118.779 10.4545 119.944 11.8182 119.944 13.6648H113.729ZM128.317 20.2273C130.42 20.2273 131.13 18.9205 131.499 18.3239H131.698V20H133.317V5.45455H131.641V10.8239H131.499C131.13 10.2557 130.477 8.94886 128.346 8.94886C125.59 8.94886 123.687 11.1364 123.687 14.5739C123.687 18.0398 125.59 20.2273 128.317 20.2273ZM128.545 18.7216C126.442 18.7216 125.363 16.875 125.363 14.5455C125.363 12.2443 126.414 10.4545 128.545 10.4545C130.59 10.4545 131.67 12.1023 131.67 14.5455C131.67 17.017 130.562 18.7216 128.545 18.7216ZM141.194 20.2273C143.41 20.2273 145.029 19.1193 145.54 17.4716L143.921 17.017C143.495 18.1534 142.508 18.7216 141.194 18.7216C139.227 18.7216 137.87 17.4503 137.792 15.1136H145.711V14.4034C145.711 10.3409 143.296 8.94886 141.023 8.94886C138.069 8.94886 136.109 11.2784 136.109 14.6307C136.109 17.983 138.04 20.2273 141.194 20.2273ZM137.792 13.6648C137.906 11.9673 139.106 10.4545 141.023 10.4545C142.842 10.4545 144.006 11.8182 144.006 13.6648H137.792ZM149.937 13.4375C149.937 11.5341 151.116 10.4545 152.721 10.4545C154.276 10.4545 155.221 11.4702 155.221 13.1818V20H156.897V13.0682C156.897 10.2841 155.413 8.94886 153.204 8.94886C151.556 8.94886 150.533 9.6875 150.022 10.7955H149.88V9.09091H148.261V20H149.937V13.4375Z"
                              fill="#EEF2FF"
                            />
                            <path
                              d="M1 13L0 13L1 13ZM5.5 13L4.5 13L5.5 13ZM13 20.5L13 21.5L13 20.5ZM20.5 13L21.5 13L20.5 13ZM13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761L5.22183 5.22183C7.28473 3.15893 10.0826 2 13 2V0ZM3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13L2 13C2 10.0826 3.15893 7.28473 5.22183 5.22183L3.80761 3.80761ZM0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924L5.22183 20.7782C3.15893 18.7153 2 15.9174 2 13L0 13ZM3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26V24C10.0826 24 7.28473 22.8411 5.22183 20.7782L3.80761 22.1924ZM13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924L20.7782 20.7782C18.7153 22.8411 15.9174 24 13 24V26ZM22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13H24C24 15.9174 22.8411 18.7153 20.7782 20.7782L22.1924 22.1924ZM26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761L20.7782 5.22183C22.8411 7.28473 24 10.0826 24 13H26ZM22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V2C15.9174 2 18.7153 3.15893 20.7782 5.22183L22.1924 3.80761ZM13 4.5C10.7457 4.5 8.58365 5.39553 6.98959 6.98959L8.40381 8.40381C9.62279 7.18482 11.2761 6.5 13 6.5L13 4.5ZM6.98959 6.98959C5.39553 8.58365 4.5 10.7457 4.5 13L6.5 13C6.5 11.2761 7.18482 9.62279 8.40381 8.40381L6.98959 6.98959ZM4.5 13C4.5 15.2543 5.39553 17.4163 6.98959 19.0104L8.40381 17.5962C7.18482 16.3772 6.5 14.7239 6.5 13L4.5 13ZM6.98959 19.0104C8.58365 20.6045 10.7457 21.5 13 21.5L13 19.5C11.2761 19.5 9.62279 18.8152 8.40381 17.5962L6.98959 19.0104ZM13 21.5C15.2543 21.5 17.4163 20.6045 19.0104 19.0104L17.5962 17.5962C16.3772 18.8152 14.7239 19.5 13 19.5L13 21.5ZM19.0104 19.0104C20.6045 17.4163 21.5 15.2543 21.5 13L19.5 13C19.5 14.7239 18.8152 16.3772 17.5962 17.5962L19.0104 19.0104ZM21.5 13C21.5 10.7457 20.6045 8.58365 19.0104 6.98959L17.5962 8.40381C18.8152 9.62279 19.5 11.2761 19.5 13L21.5 13ZM19.0104 6.98959C17.4163 5.39553 15.2543 4.5 13 4.5L13 6.5C14.7239 6.5 16.3772 7.18482 17.5962 8.40381L19.0104 6.98959ZM7.8753 6.21913C5.19967 8.35964 3.65772 10.9697 3.37911 14.0345C3.10382 17.0626 4.07465 20.3962 6.13176 23.9961L7.86824 23.0039C5.92535 19.6038 5.14618 16.6874 5.37089 14.2155C5.59228 11.7803 6.80033 9.64036 9.12469 7.78087L7.8753 6.21913ZM18.1247 19.7809C20.7961 17.6437 22.3416 15.0621 22.6208 12.0203C22.8966 9.01632 21.9237 5.70864 19.8682 2.11152L18.1318 3.1038C20.0763 6.50668 20.8534 9.39516 20.6292 11.8374C20.4084 14.2418 19.2039 16.3563 16.8753 18.2191L18.1247 19.7809Z"
                              fill="#EEF2FF"
                            />
                          </svg>
                        </div>
                        <button
                          onClick={() => setsideBar(!sideBar)}
                          id="cross"
                          aria-label="close menu"
                          className="focus:outline-none focus:ring-2 rounded-md text-indigo-50"
                          onclick="sidebarHandler(false)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <ul className>
                      <div className="border-gray-200 border-b border-opacity-20 pb-5 md:pr-10 lg:pr-0 h-full flex items-center">
                        <div className="relative w-full">
                          <div className="text-indigo-50 absolute ml-3 inset-0 m-auto w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-search"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={10} cy={10} r={7} />
                              <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                          </div>
                          <input
                            className="md:hidden bg-indigo-50 bg-opacity-10 placeholder-indigo-50  focus:outline-none focus:border-indigo-700 w-80 rounded text-sm text-indigo-50 pl-12 py-2"
                            type="text"
                            placeholder="Search here"
                          />
                        </div>
                      </div>
                      <li>
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-5">
                            <div className="flex items-center">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-indigo-50 text-sm font-medium"
                              >
                                Dashboard
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-8">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-indigo-50 text-sm font-medium"
                                >
                                  Transactions
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-8">
                            <div className="flex items-center">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-indigo-50 text-sm font-medium"
                              >
                                Stats
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <p
                              tabIndex={0}
                              className="focus:outline-none text-indigo-50 text-sm font-medium"
                            >
                              Partners
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <p
                              tabIndex={0}
                              className="focus:outline-none text-indigo-50 text-sm font-medium"
                            >
                              Settings
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}
