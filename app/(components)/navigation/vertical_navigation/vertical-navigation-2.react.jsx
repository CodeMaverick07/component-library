"use client";
import React, { useState } from "react";

export default function Home() {
  const [sideBar, setsideBar] = useState();
  return (
    <>
      {/* Desktop navigation */}
      <div className="sm:flex h-full">
        <div className="sm:block hidden border-r border-gray-200 bg-white relative w-72 h-full z-20">
          <div className="w-64">
            <div className="p-6 cursor-pointer">
              <svg
                width={189}
                height={34}
                viewBox="0 0 189 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.8409 17.2727C61.8409 11.75 58.6023 8.30682 54.1364 8.30682C49.6705 8.30682 46.4318 11.75 46.4318 17.2727C46.4318 22.7955 49.6705 26.2386 54.1364 26.2386C58.6023 26.2386 61.8409 22.7955 61.8409 17.2727ZM59.7955 17.2727C59.7955 21.8068 57.3068 24.2614 54.1364 24.2614C50.9659 24.2614 48.4773 21.8068 48.4773 17.2727C48.4773 12.7386 50.9659 10.2841 54.1364 10.2841C57.3068 10.2841 59.7955 12.7386 59.7955 17.2727ZM75.8267 12.9091H73.6449L70.0312 23.3409H69.8949L66.2812 12.9091H64.0994L68.9403 26H70.9858L75.8267 12.9091ZM83.331 26.2727C86.8764 26.2727 89.2628 23.5795 89.2628 19.5227C89.2628 15.4318 86.8764 12.7386 83.331 12.7386C79.7855 12.7386 77.3991 15.4318 77.3991 19.5227C77.3991 23.5795 79.7855 26.2727 83.331 26.2727ZM83.331 24.4659C80.6378 24.4659 79.4105 22.1477 79.4105 19.5227C79.4105 16.8977 80.6378 14.5455 83.331 14.5455C86.0241 14.5455 87.2514 16.8977 87.2514 19.5227C87.2514 22.1477 86.0241 24.4659 83.331 24.4659ZM94.3445 18.125C94.3445 15.8409 95.7592 14.5455 97.6854 14.5455C99.5518 14.5455 100.685 15.7642 100.685 17.8182V26H102.697V17.6818C102.697 14.3409 100.915 12.7386 98.2649 12.7386C96.2876 12.7386 95.0604 13.625 94.4467 14.9545H94.2763V12.9091H92.3331V26H94.3445V18.125ZM106.645 26H108.759V19.1818H112.577C112.73 19.1818 112.875 19.1818 113.02 19.1733L116.702 26H119.156L115.21 18.7898C117.435 18.0312 118.474 16.2159 118.474 13.8977C118.474 10.8125 116.634 8.54545 112.543 8.54545H106.645V26ZM108.759 17.2727V10.4205H112.474C115.304 10.4205 116.395 11.8011 116.395 13.8977C116.395 15.9943 115.304 17.2727 112.509 17.2727H108.759ZM129.974 20.6477C129.974 23.1023 128.099 24.2273 126.599 24.2273C124.928 24.2273 123.735 23 123.735 21.0909V12.9091H121.724V21.2273C121.724 24.5682 123.496 26.1705 125.951 26.1705C127.928 26.1705 129.224 25.1136 129.837 23.7841H129.974V26H131.985V12.9091H129.974V20.6477ZM141.158 26.2727C143.817 26.2727 145.76 24.9432 146.374 22.9659L144.43 22.4205C143.919 23.7841 142.734 24.4659 141.158 24.4659C138.797 24.4659 137.169 22.9403 137.075 20.1364H146.578V19.2841C146.578 14.4091 143.68 12.7386 140.953 12.7386C137.408 12.7386 135.055 15.5341 135.055 19.5568C135.055 23.5795 137.374 26.2727 141.158 26.2727ZM137.075 18.3977C137.212 16.3608 138.652 14.5455 140.953 14.5455C143.135 14.5455 144.533 16.1818 144.533 18.3977H137.075ZM154.581 26.2727C157.104 26.2727 157.956 24.7045 158.399 23.9886H158.638V26H160.581V8.54545H158.57V14.9886H158.399C157.956 14.3068 157.172 12.7386 154.615 12.7386C151.308 12.7386 149.024 15.3636 149.024 19.4886C149.024 23.6477 151.308 26.2727 154.581 26.2727ZM154.854 24.4659C152.331 24.4659 151.036 22.25 151.036 19.4545C151.036 16.6932 152.297 14.5455 154.854 14.5455C157.308 14.5455 158.604 16.5227 158.604 19.4545C158.604 22.4205 157.274 24.4659 154.854 24.4659ZM170.033 26.2727C172.692 26.2727 174.635 24.9432 175.249 22.9659L173.305 22.4205C172.794 23.7841 171.609 24.4659 170.033 24.4659C167.672 24.4659 166.044 22.9403 165.95 20.1364H175.453V19.2841C175.453 14.4091 172.555 12.7386 169.828 12.7386C166.283 12.7386 163.93 15.5341 163.93 19.5568C163.93 23.5795 166.249 26.2727 170.033 26.2727ZM165.95 18.3977C166.087 16.3608 167.527 14.5455 169.828 14.5455C172.01 14.5455 173.408 16.1818 173.408 18.3977H165.95ZM180.524 18.125C180.524 15.8409 181.939 14.5455 183.865 14.5455C185.732 14.5455 186.865 15.7642 186.865 17.8182V26H188.876V17.6818C188.876 14.3409 187.095 12.7386 184.445 12.7386C182.467 12.7386 181.24 13.625 180.626 14.9545H180.456V12.9091H178.513V26H180.524V18.125Z"
                  fill="#1F2937"
                />
                <path
                  d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div className="mt-8 w-64">
              <div>
                <div className="border-l-4 border-indigo-700 py-2 cursor-pointer bg-gradient-to-r from-indigo-100 to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 8.19094V2.25H15.75V4.98984L12 1.5L0 12.75H3V22.5H9.75V15H14.25V22.5H21V12.75H24L19.5 8.19094Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none  group-hover:text-indigo-700 text-indigo-700">
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V10.4062H1.5V19.5ZM4.59375 13.0312C4.59375 12.9318 4.63326 12.8364 4.70359 12.7661C4.77391 12.6958 4.86929 12.6562 4.96875 12.6562H9.28125C9.38071 12.6562 9.47609 12.6958 9.54642 12.7661C9.61674 12.8364 9.65625 12.9318 9.65625 13.0312V16.0312C9.65625 16.1307 9.61674 16.2261 9.54642 16.2964C9.47609 16.3667 9.38071 16.4062 9.28125 16.4062H4.96875C4.86929 16.4062 4.77391 16.3667 4.70359 16.2964C4.63326 16.2261 4.59375 16.1307 4.59375 16.0312V13.0312ZM21.75 3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V7.59375H22.5V4.5C22.5 4.30109 22.421 4.11032 22.2803 3.96967C22.1397 3.82902 21.9489 3.75 21.75 3.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Transactions
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 23.25H2.25V14.25H6V23.25ZM16.5 23.25H12.75V9.75H16.5V23.25ZM21.75 23.25H18V4.5H21.75V23.25ZM11.25 23.25H7.5V0.75H11.25V23.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Stats
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.125 12C8.98896 12 10.5 10.489 10.5 8.625C10.5 6.76104 8.98896 5.25 7.125 5.25C5.26104 5.25 3.75 6.76104 3.75 8.625C3.75 10.489 5.26104 12 7.125 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.9688 13.875C9.64875 13.2047 8.19187 12.9375 7.125 12.9375C5.03531 12.9375 0.75 14.2191 0.75 16.7812V18.75H7.78125V17.9967C7.78125 17.1061 8.15625 16.2131 8.8125 15.4688C9.33609 14.8744 10.0692 14.3227 10.9688 13.875Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.9375 13.5C13.4967 13.5 8.625 15.0075 8.625 18V20.25H23.25V18C23.25 15.0075 18.3783 13.5 15.9375 13.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.9375 12C18.2157 12 20.0625 10.1532 20.0625 7.875C20.0625 5.59683 18.2157 3.75 15.9375 3.75C13.6593 3.75 11.8125 5.59683 11.8125 7.875C11.8125 10.1532 13.6593 12 15.9375 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Partner
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0001 8.25C11.2584 8.25 10.5334 8.46993 9.91668 8.88199C9.29999 9.29404 8.81935 9.87971 8.53552 10.5649C8.25169 11.2502 8.17743 12.0042 8.32212 12.7316C8.46682 13.459 8.82397 14.1272 9.34842 14.6517C9.87286 15.1761 10.541 15.5333 11.2685 15.6779C11.9959 15.8226 12.7499 15.7484 13.4351 15.4645C14.1204 15.1807 14.706 14.7001 15.1181 14.0834C15.5301 13.4667 15.7501 12.7417 15.7501 12C15.7471 11.0064 15.3511 10.0542 14.6484 9.35163C13.9458 8.64901 12.9937 8.25297 12.0001 8.25ZM20.0963 12C20.0944 12.3504 20.0687 12.7003 20.0194 13.0472L22.3018 14.8341C22.4012 14.9161 22.4682 15.0309 22.4908 15.1578C22.5133 15.2847 22.4901 15.4155 22.4251 15.5269L20.266 19.2544C20.2004 19.3647 20.0979 19.4484 19.9767 19.4907C19.8555 19.5329 19.7232 19.5311 19.6032 19.4855L16.9196 18.4073C16.3608 18.8377 15.7493 19.1948 15.0999 19.47L14.6987 22.3191C14.6762 22.4467 14.6101 22.5625 14.5117 22.6468C14.4133 22.7311 14.2887 22.7786 14.1591 22.7812H9.841C9.71381 22.7788 9.59121 22.7333 9.49322 22.6521C9.39523 22.571 9.32763 22.459 9.30147 22.3345L8.90022 19.4855C8.24907 19.2134 7.63711 18.8557 7.08054 18.4219L4.39694 19.5C4.27698 19.5457 4.14477 19.5476 4.02354 19.5054C3.90231 19.4632 3.79984 19.3796 3.73413 19.2694L1.57507 15.5423C1.51008 15.431 1.4868 15.3002 1.50938 15.1733C1.53196 15.0464 1.59894 14.9316 1.69835 14.8495L3.98069 13.0627C3.93201 12.7105 3.90633 12.3555 3.90382 12C3.90577 11.6496 3.93145 11.2997 3.98069 10.9528L1.69835 9.16594C1.59894 9.08386 1.53196 8.96911 1.50938 8.84219C1.4868 8.71527 1.51008 8.58446 1.57507 8.47312L3.73413 4.74563C3.79976 4.63528 3.90221 4.55161 4.02344 4.50934C4.14467 4.46707 4.27693 4.46891 4.39694 4.51453L7.08054 5.59266C7.63934 5.16235 8.25086 4.80524 8.90022 4.53L9.30147 1.68094C9.32393 1.55332 9.39001 1.43746 9.48842 1.35316C9.58682 1.26886 9.71145 1.22135 9.841 1.21875H14.1591C14.2863 1.22123 14.4089 1.26675 14.5069 1.34788C14.6049 1.42901 14.6725 1.54097 14.6987 1.66547L15.0999 4.51453C15.7519 4.78639 16.3646 5.14408 16.9219 5.57812L19.6032 4.5C19.7232 4.45434 19.8554 4.45243 19.9766 4.49461C20.0978 4.53679 20.2003 4.62036 20.266 4.73062L22.4251 8.45813C22.4901 8.56946 22.5133 8.70027 22.4908 8.82719C22.4682 8.95411 22.4012 9.06886 22.3018 9.15094L20.0194 10.9378C20.0681 11.2898 20.0938 11.6446 20.0963 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Setting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile Navigation */}
        <div className="relative px-4 py-5 flex justify-between w-full sm:hidden">
          {sideBar ? (
            <button
              onClick={() => setsideBar(!sideBar)}
              aria-label="close nav bar"
              role="button"
              tabIndex={0}
              onkeypress="{sidebarHandler(false)}"
              className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute"
              id="cross"
              onclick="sidebarHandler(false)"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setsideBar(!sideBar)}
              aria-label="open nav bar"
              role="button"
              className="right-0 mr-4 mt-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 absolute "
              id="menu"
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
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 14H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 18H3"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <div className="w-auto cursor-pointer">
            <svg
              width={183}
              height={26}
              viewBox="0 0 183 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.8409 13.2727C53.8409 7.75 50.6023 4.30682 46.1364 4.30682C41.6705 4.30682 38.4318 7.75 38.4318 13.2727C38.4318 18.7955 41.6705 22.2386 46.1364 22.2386C50.6023 22.2386 53.8409 18.7955 53.8409 13.2727ZM51.7955 13.2727C51.7955 17.8068 49.3068 20.2614 46.1364 20.2614C42.9659 20.2614 40.4773 17.8068 40.4773 13.2727C40.4773 8.73864 42.9659 6.28409 46.1364 6.28409C49.3068 6.28409 51.7955 8.73864 51.7955 13.2727ZM67.8267 8.90909H65.6449L62.0312 19.3409H61.8949L58.2812 8.90909H56.0994L60.9403 22H62.9858L67.8267 8.90909ZM75.331 22.2727C78.8764 22.2727 81.2628 19.5795 81.2628 15.5227C81.2628 11.4318 78.8764 8.73864 75.331 8.73864C71.7855 8.73864 69.3991 11.4318 69.3991 15.5227C69.3991 19.5795 71.7855 22.2727 75.331 22.2727ZM75.331 20.4659C72.6378 20.4659 71.4105 18.1477 71.4105 15.5227C71.4105 12.8977 72.6378 10.5455 75.331 10.5455C78.0241 10.5455 79.2514 12.8977 79.2514 15.5227C79.2514 18.1477 78.0241 20.4659 75.331 20.4659ZM86.3445 14.125C86.3445 11.8409 87.7592 10.5455 89.6854 10.5455C91.5518 10.5455 92.6854 11.7642 92.6854 13.8182V22H94.6967V13.6818C94.6967 10.3409 92.9155 8.73864 90.2649 8.73864C88.2876 8.73864 87.0604 9.625 86.4467 10.9545H86.2763V8.90909H84.3331V22H86.3445V14.125ZM98.6449 22H100.759V15.1818H104.577C104.73 15.1818 104.875 15.1818 105.02 15.1733L108.702 22H111.156L107.21 14.7898C109.435 14.0312 110.474 12.2159 110.474 9.89773C110.474 6.8125 108.634 4.54545 104.543 4.54545H98.6449V22ZM100.759 13.2727V6.42045H104.474C107.304 6.42045 108.395 7.80114 108.395 9.89773C108.395 11.9943 107.304 13.2727 104.509 13.2727H100.759ZM121.974 16.6477C121.974 19.1023 120.099 20.2273 118.599 20.2273C116.928 20.2273 115.735 19 115.735 17.0909V8.90909H113.724V17.2273C113.724 20.5682 115.496 22.1705 117.951 22.1705C119.928 22.1705 121.224 21.1136 121.837 19.7841H121.974V22H123.985V8.90909H121.974V16.6477ZM133.158 22.2727C135.817 22.2727 137.76 20.9432 138.374 18.9659L136.43 18.4205C135.919 19.7841 134.734 20.4659 133.158 20.4659C130.797 20.4659 129.169 18.9403 129.075 16.1364H138.578V15.2841C138.578 10.4091 135.68 8.73864 132.953 8.73864C129.408 8.73864 127.055 11.5341 127.055 15.5568C127.055 19.5795 129.374 22.2727 133.158 22.2727ZM129.075 14.3977C129.212 12.3608 130.652 10.5455 132.953 10.5455C135.135 10.5455 136.533 12.1818 136.533 14.3977H129.075ZM146.581 22.2727C149.104 22.2727 149.956 20.7045 150.399 19.9886H150.638V22H152.581V4.54545H150.57V10.9886H150.399C149.956 10.3068 149.172 8.73864 146.615 8.73864C143.308 8.73864 141.024 11.3636 141.024 15.4886C141.024 19.6477 143.308 22.2727 146.581 22.2727ZM146.854 20.4659C144.331 20.4659 143.036 18.25 143.036 15.4545C143.036 12.6932 144.297 10.5455 146.854 10.5455C149.308 10.5455 150.604 12.5227 150.604 15.4545C150.604 18.4205 149.274 20.4659 146.854 20.4659ZM162.033 22.2727C164.692 22.2727 166.635 20.9432 167.249 18.9659L165.305 18.4205C164.794 19.7841 163.609 20.4659 162.033 20.4659C159.672 20.4659 158.044 18.9403 157.95 16.1364H167.453V15.2841C167.453 10.4091 164.555 8.73864 161.828 8.73864C158.283 8.73864 155.93 11.5341 155.93 15.5568C155.93 19.5795 158.249 22.2727 162.033 22.2727ZM157.95 14.3977C158.087 12.3608 159.527 10.5455 161.828 10.5455C164.01 10.5455 165.408 12.1818 165.408 14.3977H157.95ZM172.524 14.125C172.524 11.8409 173.939 10.5455 175.865 10.5455C177.732 10.5455 178.865 11.7642 178.865 13.8182V22H180.876V13.6818C180.876 10.3409 179.095 8.73864 176.445 8.73864C174.467 8.73864 173.24 9.625 172.626 10.9545H172.456V8.90909H170.513V22H172.524V14.125Z"
                fill="#1F2937"
              />
              <path
                d="M1 13H0H1ZM5.5 13H4.5H5.5ZM13 20.5V21.5V20.5ZM20.5 13H21.5H20.5ZM13 0C9.55219 0 6.24558 1.36964 3.80761 3.80761L5.22183 5.22183C7.28473 3.15893 10.0826 2 13 2V0ZM3.80761 3.80761C1.36964 6.24558 0 9.55219 0 13H2C2 10.0826 3.15893 7.28473 5.22183 5.22183L3.80761 3.80761ZM0 13C0 16.4478 1.36964 19.7544 3.80761 22.1924L5.22183 20.7782C3.15893 18.7153 2 15.9174 2 13H0ZM3.80761 22.1924C6.24558 24.6304 9.55219 26 13 26V24C10.0826 24 7.28473 22.8411 5.22183 20.7782L3.80761 22.1924ZM13 26C16.4478 26 19.7544 24.6304 22.1924 22.1924L20.7782 20.7782C18.7153 22.8411 15.9174 24 13 24V26ZM22.1924 22.1924C24.6304 19.7544 26 16.4478 26 13H24C24 15.9174 22.8411 18.7153 20.7782 20.7782L22.1924 22.1924ZM26 13C26 9.55219 24.6304 6.24558 22.1924 3.80761L20.7782 5.22183C22.8411 7.28473 24 10.0826 24 13H26ZM22.1924 3.80761C19.7544 1.36964 16.4478 0 13 0V2C15.9174 2 18.7153 3.15893 20.7782 5.22183L22.1924 3.80761ZM13 4.5C10.7457 4.5 8.58365 5.39553 6.98959 6.98959L8.40381 8.40381C9.62279 7.18482 11.2761 6.5 13 6.5V4.5ZM6.98959 6.98959C5.39553 8.58365 4.5 10.7457 4.5 13H6.5C6.5 11.2761 7.18482 9.62279 8.40381 8.40381L6.98959 6.98959ZM4.5 13C4.5 15.2543 5.39553 17.4163 6.98959 19.0104L8.40381 17.5962C7.18482 16.3772 6.5 14.7239 6.5 13H4.5ZM6.98959 19.0104C8.58365 20.6045 10.7457 21.5 13 21.5V19.5C11.2761 19.5 9.62279 18.8152 8.40381 17.5962L6.98959 19.0104ZM13 21.5C15.2543 21.5 17.4163 20.6045 19.0104 19.0104L17.5962 17.5962C16.3772 18.8152 14.7239 19.5 13 19.5V21.5ZM19.0104 19.0104C20.6045 17.4163 21.5 15.2543 21.5 13H19.5C19.5 14.7239 18.8152 16.3772 17.5962 17.5962L19.0104 19.0104ZM21.5 13C21.5 10.7457 20.6045 8.58365 19.0104 6.98959L17.5962 8.40381C18.8152 9.62279 19.5 11.2761 19.5 13H21.5ZM19.0104 6.98959C17.4163 5.39553 15.2543 4.5 13 4.5V6.5C14.7239 6.5 16.3772 7.18482 17.5962 8.40381L19.0104 6.98959ZM7.8753 6.21913C5.19967 8.35964 3.65772 10.9697 3.37911 14.0345C3.10382 17.0626 4.07465 20.3962 6.13176 23.9961L7.86824 23.0039C5.92535 19.6038 5.14618 16.6874 5.37089 14.2155C5.59228 11.7803 6.80033 9.64036 9.12469 7.78087L7.8753 6.21913ZM18.1247 19.7809C20.7961 17.6437 22.3416 15.0621 22.6208 12.0203C22.8966 9.01632 21.9237 5.70864 19.8682 2.11152L18.1318 3.1038C20.0763 6.50668 20.8534 9.39516 20.6292 11.8374C20.4084 14.2418 19.2039 16.3563 16.8753 18.2191L18.1247 19.7809Z"
                fill="#1F2937"
              />
            </svg>
          </div>
        </div>
        <div
          className={
            sideBar
              ? "border-r border-gray-200 bg-white sm:relative h-full z-20 sm:hidden px-4 transition duration-150 ease-in-out absolute w-full top-30 transform translate-x-0"
              : "border-r border-gray-200 bg-white sm:relative h-full z-20 sm:hidden px-4 transition duration-150 ease-in-out absolute w-full top-30 transform -translate-x-full"
          }
        >
          <div>
            <div className="mt-3 w-full">
              <div>
                <div className="border-l-4 border-indigo-700 py-2 cursor-pointer bg-gradient-to-r from-indigo-100 to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 8.19094V2.25H15.75V4.98984L12 1.5L0 12.75H3V22.5H9.75V15H14.25V22.5H21V12.75H24L19.5 8.19094Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none  group-hover:text-indigo-700 text-indigo-700">
                    Dashboard
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V10.4062H1.5V19.5ZM4.59375 13.0312C4.59375 12.9318 4.63326 12.8364 4.70359 12.7661C4.77391 12.6958 4.86929 12.6562 4.96875 12.6562H9.28125C9.38071 12.6562 9.47609 12.6958 9.54642 12.7661C9.61674 12.8364 9.65625 12.9318 9.65625 13.0312V16.0312C9.65625 16.1307 9.61674 16.2261 9.54642 16.2964C9.47609 16.3667 9.38071 16.4062 9.28125 16.4062H4.96875C4.86929 16.4062 4.77391 16.3667 4.70359 16.2964C4.63326 16.2261 4.59375 16.1307 4.59375 16.0312V13.0312ZM21.75 3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V7.59375H22.5V4.5C22.5 4.30109 22.421 4.11032 22.2803 3.96967C22.1397 3.82902 21.9489 3.75 21.75 3.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Transactions
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 23.25H2.25V14.25H6V23.25ZM16.5 23.25H12.75V9.75H16.5V23.25ZM21.75 23.25H18V4.5H21.75V23.25ZM11.25 23.25H7.5V0.75H11.25V23.25Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Stats
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.125 12C8.98896 12 10.5 10.489 10.5 8.625C10.5 6.76104 8.98896 5.25 7.125 5.25C5.26104 5.25 3.75 6.76104 3.75 8.625C3.75 10.489 5.26104 12 7.125 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.9688 13.875C9.64875 13.2047 8.19187 12.9375 7.125 12.9375C5.03531 12.9375 0.75 14.2191 0.75 16.7812V18.75H7.78125V17.9967C7.78125 17.1061 8.15625 16.2131 8.8125 15.4688C9.33609 14.8744 10.0692 14.3227 10.9688 13.875Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.9375 13.5C13.4967 13.5 8.625 15.0075 8.625 18V20.25H23.25V18C23.25 15.0075 18.3783 13.5 15.9375 13.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.9375 12C18.2157 12 20.0625 10.1532 20.0625 7.875C20.0625 5.59683 18.2157 3.75 15.9375 3.75C13.6593 3.75 11.8125 5.59683 11.8125 7.875C11.8125 10.1532 13.6593 12 15.9375 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Partner
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="border-l-4 hover:border-indigo-700 border-transparent group py-2 cursor-pointer bg-gradient-to-r hover:from-indigo-100 hover:to-white flex items-center">
                  <div className="ml-4 mr-3 text-gray-400 group-hover:text-indigo-700">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0001 8.25C11.2584 8.25 10.5334 8.46993 9.91668 8.88199C9.29999 9.29404 8.81935 9.87971 8.53552 10.5649C8.25169 11.2502 8.17743 12.0042 8.32212 12.7316C8.46682 13.459 8.82397 14.1272 9.34842 14.6517C9.87286 15.1761 10.541 15.5333 11.2685 15.6779C11.9959 15.8226 12.7499 15.7484 13.4351 15.4645C14.1204 15.1807 14.706 14.7001 15.1181 14.0834C15.5301 13.4667 15.7501 12.7417 15.7501 12C15.7471 11.0064 15.3511 10.0542 14.6484 9.35163C13.9458 8.64901 12.9937 8.25297 12.0001 8.25ZM20.0963 12C20.0944 12.3504 20.0687 12.7003 20.0194 13.0472L22.3018 14.8341C22.4012 14.9161 22.4682 15.0309 22.4908 15.1578C22.5133 15.2847 22.4901 15.4155 22.4251 15.5269L20.266 19.2544C20.2004 19.3647 20.0979 19.4484 19.9767 19.4907C19.8555 19.5329 19.7232 19.5311 19.6032 19.4855L16.9196 18.4073C16.3608 18.8377 15.7493 19.1948 15.0999 19.47L14.6987 22.3191C14.6762 22.4467 14.6101 22.5625 14.5117 22.6468C14.4133 22.7311 14.2887 22.7786 14.1591 22.7812H9.841C9.71381 22.7788 9.59121 22.7333 9.49322 22.6521C9.39523 22.571 9.32763 22.459 9.30147 22.3345L8.90022 19.4855C8.24907 19.2134 7.63711 18.8557 7.08054 18.4219L4.39694 19.5C4.27698 19.5457 4.14477 19.5476 4.02354 19.5054C3.90231 19.4632 3.79984 19.3796 3.73413 19.2694L1.57507 15.5423C1.51008 15.431 1.4868 15.3002 1.50938 15.1733C1.53196 15.0464 1.59894 14.9316 1.69835 14.8495L3.98069 13.0627C3.93201 12.7105 3.90633 12.3555 3.90382 12C3.90577 11.6496 3.93145 11.2997 3.98069 10.9528L1.69835 9.16594C1.59894 9.08386 1.53196 8.96911 1.50938 8.84219C1.4868 8.71527 1.51008 8.58446 1.57507 8.47312L3.73413 4.74563C3.79976 4.63528 3.90221 4.55161 4.02344 4.50934C4.14467 4.46707 4.27693 4.46891 4.39694 4.51453L7.08054 5.59266C7.63934 5.16235 8.25086 4.80524 8.90022 4.53L9.30147 1.68094C9.32393 1.55332 9.39001 1.43746 9.48842 1.35316C9.58682 1.26886 9.71145 1.22135 9.841 1.21875H14.1591C14.2863 1.22123 14.4089 1.26675 14.5069 1.34788C14.6049 1.42901 14.6725 1.54097 14.6987 1.66547L15.0999 4.51453C15.7519 4.78639 16.3646 5.14408 16.9219 5.57812L19.6032 4.5C19.7232 4.45434 19.8554 4.45243 19.9766 4.49461C20.0978 4.53679 20.2003 4.62036 20.266 4.73062L22.4251 8.45813C22.4901 8.56946 22.5133 8.70027 22.4908 8.82719C22.4682 8.95411 22.4012 9.06886 22.3018 9.15094L20.0194 10.9378C20.0681 11.2898 20.0938 11.6446 20.0963 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-none text-gray-600 group-hover:text-indigo-700">
                    Setting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-6" />
      </div>
    </>
  );
}
