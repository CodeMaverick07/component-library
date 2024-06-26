"use client";
import React, { useState } from "react";
export default function IndexPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center py-8">
        <div className="max-w-3xl rounded shadow overflow-x-auto">
          <table className="w-full">
            <thead className="dark:bg-gray-900 bg-gray-100">
              <tr>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 uppercase sm:py-8 py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    Company
                    <div className="pl-24 relative cursor-pointer">
                      <svg
                        onClick={() => setShow1(!show1)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show1 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    Category
                    <div className="pl-16 relative cursor-pointer">
                      <svg
                        onClick={() => setShow2(!show2)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show2 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    View
                    <div className="pl-10 relative cursor-pointer">
                      <svg
                        onClick={() => setShow3(!show3)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show3 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                  <div className="flex items-center">
                    Revenue
                    <div className="pl-6 relative cursor-pointer">
                      <svg
                        onClick={() => setShow4(!show4)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show4 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
                <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase sm:pr-6 pr-4">
                  <div className="flex items-center">
                    Sales
                    <div className="pl-6 relative cursor-pointer">
                      <svg
                        onClick={() => setShow5(!show5)}
                        className="text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={25}
                        viewBox="0 0 14 25"
                        fill="none"
                      >
                        <path
                          d="M10.9083 9.15817C10.7916 9.27484 10.675 9.33317 10.5 9.33317C10.325 9.33317 10.2083 9.27484 10.0916 9.15817L6.99996 6.0665L3.90829 9.15817C3.67496 9.3915 3.32496 9.3915 3.09163 9.15817C2.85829 8.92484 2.85829 8.57484 3.09163 8.3415L6.59163 4.8415C6.82496 4.60817 7.17496 4.60817 7.40829 4.8415L10.9083 8.3415C11.1416 8.57484 11.1416 8.92484 10.9083 9.15817Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.9083 16.6582L7.40829 20.1582C7.29163 20.2748 7.17496 20.3332 6.99996 20.3332C6.82496 20.3332 6.70829 20.2748 6.59163 20.1582L3.09163 16.6582C2.85829 16.4248 2.85829 16.0748 3.09163 15.8415C3.32496 15.6082 3.67496 15.6082 3.90829 15.8415L6.99996 18.9332L10.0916 15.8415C10.325 15.6082 10.675 15.6082 10.9083 15.8415C11.1416 16.0748 11.1416 16.4248 10.9083 16.6582Z"
                          fill="currentColor"
                        />
                      </svg>
                      {show5 && (
                        <ul className=" mt-1 absolute -ml-12 bg-white rounded shadow ">
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            edit
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            add
                          </li>
                          <li className="text-xs text-gray-800 dark:text-gray-100 hover:text-white hover:bg-indigo-700 py-2 px-4">
                            Select
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={19}
                        viewBox="0 0 22 19"
                        fill="none"
                      >
                        <g opacity="0.2">
                          <path
                            d="M22 16.8462C22 18.0356 21.0149 19 19.8 19H2.2C0.98505 19 0 18.0356 0 16.8462V7.15385C0 5.96438 0.98505 5 2.2 5H19.8C21.0149 5 22 5.96438 22 7.15385V16.8462Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.8 2.14286V12.8571H7.2V2.14286H13.8ZM13.8 0H7.2C5.98505 0 5 0.959464 5 2.14286V12.8571C5 14.0405 5.98505 15 7.2 15H13.8C15.0149 15 16 14.0405 16 12.8571V2.14286C16 0.959464 15.0149 0 13.8 0Z"
                          fill="#4B4B4B"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8V15.6471C0 16.9465 0.98505 18 2.2 18H19.8C21.0149 18 22 16.9465 22 15.6471V8H0Z"
                          fill="#F96E6F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.5 8.54545V10.4545H8.5V8.54545H13.5ZM13.5 6H8.5C7.11937 6 6 7.13973 6 8.54545V10.4545C6 11.8603 7.11937 13 8.5 13H13.5C14.8806 13 16 11.8603 16 10.4545V8.54545C16 7.13973 14.8806 6 13.5 6Z"
                          fill="white"
                        />
                        <g opacity="0.2">
                          <path
                            d="M22 8.22222C22 6.995 21.0149 6 19.8 6H2.2C0.98505 6 0 6.995 0 8.22222V11H22V8.22222Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22 6.22222C22 4.995 21.0149 4 19.8 4H2.2C0.98505 4 0 4.995 0 6.22222V9H22V6.22222Z"
                          fill="#F96E6F"
                        />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Dixons
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={1}
                          width={18}
                          height={16}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 1.5H15C16.275 1.5 17.25 2.475 17.25 3.75V11.25C17.25 12.525 16.275 13.5 15 13.5H9.75V15H12C12.45 15 12.75 15.3 12.75 15.75C12.75 16.2 12.45 16.5 12 16.5H6C5.55 16.5 5.25 16.2 5.25 15.75C5.25 15.3 5.55 15 6 15H8.25V13.5H3C1.725 13.5 0.75 12.525 0.75 11.25V3.75C0.75 2.475 1.725 1.5 3 1.5ZM15 12C15.45 12 15.75 11.7 15.75 11.25V3.75C15.75 3.3 15.45 3 15 3H3C2.55 3 2.25 3.3 2.25 3.75V11.25C2.25 11.7 2.55 12 3 12H15Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width={18} height={18} fill="#1D4ED8" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Technology
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    23.4k
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $891.2
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      68%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                        fill="#EA5455"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={22}
                        viewBox="0 0 21 22"
                        fill="none"
                      >
                        <path
                          opacity="0.2"
                          d="M10 20.0688C9.83958 20.0688 9.68708 20.0068 9.57042 19.8942L0 10.2472L1.66667 9.39738L10 18.554L19.4029 9.77386C19.4762 9.86819 19.3292 8.92401 19.4029 9.08803C19.5079 9.32259 19.8692 10.0573 20 10.2472L10.4292 19.8946C10.3129 20.0068 10.1604 20.0688 10 20.0688Z"
                          fill="#231F20"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 20.0688C9.83958 20.0688 9.68708 20.0026 9.57042 19.8822L0 10.3074L1.7875 10.2956L10 18.4503L19.4029 9.06885C19.4762 9.16964 19.5821 9.42162 19.6558 9.59687C19.7613 9.84749 19.8692 10.1045 20 10.3074L10.4292 19.8827C10.3129 20.0026 10.1604 20.0688 10 20.0688Z"
                          fill="#838E9E"
                        />
                        <g opacity="0.2">
                          <path
                            d="M16.1516 9.29131C16.1227 9.08435 15.8546 8.9495 15.7273 8.8839C15.6336 8.83542 15.197 9.69872 15.0918 9.69872C14.8563 9.69872 14.8283 9.91872 14.7172 10.1171L10.2122 17.7471L5.70713 10.1171C5.59598 9.91872 5.78095 8.8839 5.54549 8.8839C5.43986 8.8839 5.21501 8.42801 5.12125 8.4765C4.9944 8.54209 4.72586 8.26953 4.69701 8.4765C4.66774 8.68427 3.33561 8.3172 3.42428 8.4765L9.34246 18.7904C9.93598 18.6743 10.549 18.6658 11.1633 18.6535L16.5758 9.29131C16.6645 9.13201 16.1808 9.49909 16.1516 9.29131Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5 20.0688C10.2668 20.0688 10.0538 19.9324 9.9435 19.7127L5.02757 10.3873C4.93959 10.2113 5.08776 9.85283 5.11681 9.62317C5.14544 9.39442 5.23426 9.22195 5.36054 9.14945C5.45358 9.09587 5.55376 9.06885 5.65858 9.06885C5.89221 9.06885 5.92 9.31201 6.03029 9.53131L10.5 17.965L14.9701 9.53176C15.0804 9.31201 15.1086 9.0693 15.3418 9.0693C15.4467 9.0693 15.5464 9.09632 15.6395 9.1499C15.7657 9.2224 15.8546 9.39487 15.8832 9.62362C15.9122 9.85283 16.0604 10.2113 15.9724 10.3873L11.0565 19.7127C10.9462 19.9324 10.7332 20.0688 10.5 20.0688Z"
                          fill="#838E9E"
                        />
                        <g opacity="0.2">
                          <path
                            d="M15.6094 11.0688H19.3312L20.25 10.2355C19.8214 5.1026 15.4326 1.06885 10.125 1.06885C13.1541 1.06885 15.6094 5.54593 15.6094 11.0688Z"
                            fill="#231F20"
                          />
                          <path
                            d="M10.125 1.06885C4.88278 1.06885 0.518484 5.19301 0 10.2355L0.918844 11.0688H4.64062C4.64062 5.54593 7.09594 1.06885 10.125 1.06885Z"
                            fill="#231F20"
                          />
                          <path
                            d="M4.64062 11.0688H15.6094C15.6094 5.54593 13.1541 1.06885 10.125 1.06885C7.09594 1.06885 4.64062 5.54593 4.64062 11.0688Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.4167 10.0688H20C20 4.54593 15.5229 0.0688477 10 0.0688477C12.9917 0.0688477 15.4167 4.54593 15.4167 10.0688Z"
                          fill="#F96E6F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 0.0688477C4.47708 0.0688477 0 4.54593 0 10.0688H4.58333C4.58333 4.54593 7.00833 0.0688477 10 0.0688477Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M4.58337 10.0688H15.4167C15.4167 4.54593 12.9917 0.0688477 10 0.0688477C7.00837 0.0688477 4.58337 4.54593 4.58337 10.0688Z"
                          fill="white"
                        />
                        <circle cx={10} cy="19.0688" r={2} fill="#717171" />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Motels
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 1.5C3.75 1.08579 4.08579 0.75 4.5 0.75C4.91421 0.75 5.25 1.08579 5.25 1.5V3.75C5.25 4.16421 4.91421 4.5 4.5 4.5C4.08579 4.5 3.75 4.16421 3.75 3.75V1.5ZM14.25 11.9731V7.49083C14.7492 7.53768 15.3997 7.70517 15.8838 8.20969C16.7865 9.15039 16.4114 10.4086 16.4114 10.4086C16.4114 10.4086 16.0315 11.5002 15.0108 11.8914C14.686 11.9289 14.4382 11.955 14.25 11.9731ZM14.2425 13.4965C14.1152 15.5908 12.3764 17.25 10.25 17.25H4.75C2.54086 17.25 0.75 15.4591 0.75 13.25V6H13.5H14.25H14.3097C14.5469 6 14.6892 6.02594 14.8778 6.06033C14.9485 6.07322 15.0257 6.0873 15.1169 6.10165C16.9014 6.38365 17.7631 8.26759 17.9281 9C18.093 9.73241 18 11.0348 17.0427 12.2477C16.1987 13.3171 14.6073 13.4743 14.2425 13.4965ZM12.75 7.5H2.25V12.75C2.25 14.4069 3.59315 15.75 5.25 15.75H9.75C11.4069 15.75 12.75 14.4069 12.75 12.75V7.5ZM7.5 0.75C7.08579 0.75 6.75 1.08579 6.75 1.5V3.75C6.75 4.16421 7.08579 4.5 7.5 4.5C7.91421 4.5 8.25 4.16421 8.25 3.75V1.5C8.25 1.08579 7.91421 0.75 7.5 0.75ZM9.75 1.5C9.75 1.08579 10.0858 0.75 10.5 0.75C10.9142 0.75 11.25 1.08579 11.25 1.5V3.75C11.25 4.16421 10.9142 4.5 10.5 4.5C10.0858 4.5 9.75 4.16421 9.75 3.75V1.5Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Grocery
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    78k
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $668
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      97%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 3.99984C16 3.93317 16 3.79984 15.9333 3.73317C15.8667 3.59984 15.7333 3.4665 15.6 3.39984C15.5333 3.33317 15.4 3.33317 15.3333 3.33317H11.3333C10.9333 3.33317 10.6667 3.59984 10.6667 3.99984C10.6667 4.39984 10.9333 4.6665 11.3333 4.6665H13.7333L9 9.39984L6.13333 6.53317C5.86667 6.2665 5.46667 6.2665 5.2 6.53317L0.2 11.5332C-0.0666667 11.7998 -0.0666667 12.1998 0.2 12.4665C0.466667 12.7332 0.866667 12.7332 1.13333 12.4665L5.66667 7.93317L8.53333 10.7998C8.8 11.0665 9.2 11.0665 9.46667 10.7998L14.6667 5.59984V7.99984C14.6667 8.39984 14.9333 8.6665 15.3333 8.6665C15.7333 8.6665 16 8.39984 16 7.99984V3.99984Z"
                        fill="#15803D"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={25}
                        viewBox="0 0 16 25"
                        fill="none"
                      >
                        <path
                          d="M16 13.4231C16 14.0181 15.5227 14.5 14.9333 14.5H1.06667C0.477333 14.5 0 14.0181 0 13.4231V1.57692C0 0.981923 0.477333 0.5 1.06667 0.5H14.9333C15.5227 0.5 16 0.981923 16 1.57692V13.4231Z"
                          fill="#4F5D73"
                        />
                        <path
                          opacity="0.2"
                          d="M0 13.5C0 13.5 0 13.9475 0 14.5V15.5C0 16.0525 0.477333 16.5 1.06667 16.5H4.8C4.8 16.5 6.4 16.5 6.4 18C6.4 20.09 6 21.1285 5.86827 21.414C5.8576 21.436 5.8464 21.4575 5.83627 21.48C5.82987 21.492 5.8256 21.5 5.8256 21.5H5.82933C5.7232 21.7505 5.6608 22.0215 5.6608 22.3075C5.66133 23.5185 6.70827 24.5 8 24.5C9.29173 24.5 10.3387 23.5185 10.3387 22.3075C10.3387 22.0215 10.2763 21.7505 10.1701 21.5H10.1739C10.1739 21.5 10.1696 21.492 10.1632 21.4795C10.1536 21.4575 10.1424 21.4365 10.1317 21.4145C10.0005 21.13 9.6 20.091 9.6 18C9.6 18 9.60533 16.5 11.2 16.5H14.9333C15.5227 16.5 16 16.0525 16 15.5V14.5C16 13.9475 16 13.5 16 13.5H0Z"
                          fill="#231F20"
                        />
                        <path
                          d="M0 12.5C0 12.5 0 12.9475 0 13.5V14.5C0 15.0525 0.477333 15.5 1.06667 15.5H4.8C4.8 15.5 6.4 15.5 6.4 17C6.4 19.09 6 20.1285 5.86827 20.414C5.8576 20.436 5.8464 20.4575 5.83627 20.48C5.82987 20.492 5.8256 20.5 5.8256 20.5H5.82933C5.7232 20.7505 5.6608 21.0215 5.6608 21.3075C5.66133 22.5185 6.70827 23.5 8 23.5C9.29173 23.5 10.3387 22.5185 10.3387 21.3075C10.3387 21.0215 10.2763 20.7505 10.1701 20.5H10.1739C10.1739 20.5 10.1696 20.492 10.1632 20.4795C10.1536 20.4575 10.1424 20.4365 10.1317 20.4145C10.0005 20.13 9.6 19.091 9.6 17C9.6 17 9.60533 15.5 11.2 15.5H14.9333C15.5227 15.5 16 15.0525 16 14.5V13.5C16 12.9475 16 12.5 16 12.5H0Z"
                          fill="#FFAF63"
                        />
                        <rect
                          opacity="0.2"
                          y="10.5"
                          width={16}
                          height={3}
                          fill="#231F20"
                        />
                        <rect y="9.5" width={16} height={3} fill="white" />
                        <path
                          opacity="0.2"
                          d="M14.9333 2.5H1.06667C0.477333 2.5 0 2.9475 0 3.5V5.5V7.5C0 8.0525 0 8.5 0 8.5H7.2C7.6416 8.5 8 8.836 8 9.25C8 9.664 8.3584 10 8.8 10C9.2416 10 9.6 9.664 9.6 9.25C9.6 8.836 9.9584 8.5 10.4 8.5C10.8416 8.5 11.2 8.836 11.2 9.25V10.75C11.2 11.164 11.5584 11.5 12 11.5C12.4416 11.5 12.8 11.164 12.8 10.75V9.25C12.8 8.836 13.1584 8.5 13.6 8.5C14.0416 8.5 14.4 8.836 14.4 9.25V9.75C14.4 10.164 14.7584 10.5 15.2 10.5C15.6416 10.5 16 10.164 16 9.75V7.5V6.75V5.5V3.5C16 2.9475 15.5227 2.5 14.9333 2.5Z"
                          fill="#838E9E"
                        />
                        <path
                          d="M16 9.5C16 10.052 15.552 10.5 15 10.5C14.448 10.5 14 10.052 14 9.5V5.5C14 4.948 14.448 4.5 15 4.5C15.552 4.5 16 4.948 16 5.5V9.5Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M12 9.5C12 10.052 11.552 10.5 11 10.5C10.448 10.5 10 10.052 10 9.5V5.5C10 4.948 10.448 4.5 11 4.5C11.552 4.5 12 4.948 12 5.5V9.5Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M9 9.5C9 10.052 8.552 10.5 8 10.5C7.448 10.5 7 10.052 7 9.5V5.5C7 4.948 7.448 4.5 8 4.5C8.552 4.5 9 4.948 9 5.5V9.5Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M16 1.5C16 0.9475 15.5227 0.5 14.9333 0.5H1.06667C0.477333 0.5 0 0.9475 0 1.5V3.5H16V1.5Z"
                          fill="#F96E6F"
                        />
                        <path
                          d="M0 1.5V5.5C0 6.0525 0 6.5 0 6.5H14.9333C15.5227 6.5 16 6.0525 16 5.5V3.5L0 1.5Z"
                          fill="#F96E6F"
                        />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Zipcar
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 9C15 7.275 14.25 5.775 13.125 4.65L12.9 2.025C12.75 0.9 11.85 0 10.65 0H7.35C6.225 0 5.25 0.9 5.1 2.025L4.875 4.65C3.75 5.7 3 7.275 3 9C3 10.725 3.75 12.3 4.875 13.35L5.1 15.975C5.25 17.1 6.225 18 7.35 18H10.575C11.775 18 12.675 17.1 12.825 15.975L13.05 13.425C14.25 12.3 15 10.725 15 9ZM6.60001 2.175C6.60001 1.8 6.97501 1.5 7.35001 1.5H10.65C11.025 1.5 11.325 1.8 11.4 2.175L11.55 3.525C10.725 3.225 9.90001 3 9.00001 3C8.10001 3 7.27501 3.225 6.52501 3.525L6.60001 2.175ZM9 4.5C6.525 4.5 4.5 6.525 4.5 9C4.5 11.475 6.525 13.5 9 13.5C10.125 13.5 11.175 13.125 11.925 12.45C12.9 11.625 13.5 10.35 13.5 9C13.5 6.525 11.475 4.5 9 4.5ZM11.4 15.825C11.4 16.2 11.025 16.5 10.65 16.5H7.35001C6.97501 16.5 6.67501 16.2 6.60001 15.825L6.45001 14.475C7.20001 14.85 8.02501 15 8.92501 15C9.82501 15 10.65 14.775 11.4 14.475V15.825ZM8.25 9C8.25 9.225 8.325 9.375 8.475 9.525L9.6 10.65C9.75 10.8 9.975 10.875 10.125 10.875C10.275 10.875 10.5 10.8 10.65 10.65C10.95 10.35 10.95 9.9 10.65 9.6L9.75 8.7V6.75C9.75 6.3 9.45 6 9 6C8.55 6 8.25 6.3 8.25 6.75V9Z"
                          fill="#A21CAF"
                        />
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Fashion
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    162
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $522.2
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      98%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                        fill="#EA5455"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g opacity="0.2">
                          <path
                            d="M19.9392 8.26661C19.7916 7.83639 19.3997 7.52244 18.9292 7.45685L13.5354 6.71268L11.1226 2.06989C10.9111 1.6632 10.4768 1.40625 10.0002 1.40625C9.52351 1.40625 9.08922 1.6632 8.8778 2.06989L6.46637 6.71268L1.0716 7.45685C0.5997 7.52244 0.208271 7.83594 0.0616045 8.26661C-0.0860146 8.69682 0.0363664 9.16911 0.378271 9.48532L4.2816 13.0998L3.36065 18.2041C3.28065 18.6501 3.47351 19.1007 3.85875 19.3667C4.07541 19.5178 4.33303 19.5938 4.59351 19.5938C4.79256 19.5938 4.99256 19.5485 5.17541 19.4572L10.0002 17.0473L14.8249 19.4572C15.0078 19.5485 15.2078 19.5938 15.4068 19.5938C15.6659 19.5938 15.9249 19.5178 16.1426 19.3667C16.5278 19.1002 16.7207 18.6497 16.6407 18.2041L15.7192 13.0994L19.6226 9.48487C19.963 9.17001 20.0859 8.69682 19.9392 8.26661Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.9392 6.78962C19.7916 6.36384 19.3997 6.05313 18.9292 5.98821L13.5354 5.25172L11.1226 0.6568C10.9112 0.254303 10.4769 0 10.0002 0C9.52355 0 9.08927 0.254303 8.87784 0.6568L6.46643 5.25172L1.07172 5.98821C0.599817 6.05313 0.208391 6.3634 0.061726 6.78962C-0.0858918 7.2154 0.0364881 7.68282 0.37839 7.99577L4.28169 11.573L3.36075 16.6246C3.28075 17.0661 3.4736 17.512 3.85884 17.7752C4.0755 17.9248 4.33312 18 4.59359 18C4.79264 18 4.99264 17.9552 5.17549 17.8648L10.0002 15.4798L14.8249 17.8648C15.0078 17.9552 15.2078 18 15.4068 18C15.6659 18 15.9249 17.9248 16.1425 17.7752C16.5278 17.5115 16.7206 17.0656 16.6406 16.6246L15.7192 11.5726L19.6225 7.99532C19.963 7.68371 20.0858 7.2154 19.9392 6.78962Z"
                          fill="#FFAF63"
                        />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Owing
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={1}
                          width={18}
                          height={16}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 1.5H15C16.275 1.5 17.25 2.475 17.25 3.75V11.25C17.25 12.525 16.275 13.5 15 13.5H9.75V15H12C12.45 15 12.75 15.3 12.75 15.75C12.75 16.2 12.45 16.5 12 16.5H6C5.55 16.5 5.25 16.2 5.25 15.75C5.25 15.3 5.55 15 6 15H8.25V13.5H3C1.725 13.5 0.75 12.525 0.75 11.25V3.75C0.75 2.475 1.725 1.5 3 1.5ZM15 12C15.45 12 15.75 11.7 15.75 11.25V3.75C15.75 3.3 15.45 3 15 3H3C2.55 3 2.25 3.3 2.25 3.75V11.25C2.25 11.7 2.55 12 3 12H15Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width={18} height={18} fill="#1D4ED8" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Technology
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    214
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $81.2
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      68%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                        fill="#EA5455"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="none"
                      >
                        <g opacity="0.2">
                          <path
                            d="M16 18.1C16 19.1493 15.1045 20 14 20H2C0.8955 20 0 19.1493 0 18.1V2.9C0 1.85072 0.8955 1 2 1H14C15.1045 1 16 1.85072 16 2.9V18.1Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 17.1C16 18.1493 15.1045 19 14 19H2C0.8955 19 0 18.1493 0 17.1V1.9C0 0.850725 0.8955 0 2 0H14C15.1045 0 16 0.850725 16 1.9V17.1Z"
                          fill="#82868B"
                        />
                        <g opacity="0.2">
                          <path
                            d="M9 1V4.48711C9 4.60444 9.0815 4.71067 9.2055 4.75556C9.247 4.77022 9.29 4.77778 9.333 4.77778C9.4195 4.77778 9.505 4.748 9.5685 4.69244L11 3.44489L12.431 4.69244C12.4945 4.748 12.58 4.77778 12.6665 4.77778C12.7095 4.77778 12.753 4.77067 12.794 4.75556C12.9185 4.71067 13 4.60444 13 4.48711V1H9Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 0V3.69224C9 3.81647 9.0815 3.92894 9.2055 3.97647C9.247 3.992 9.29 4 9.333 4C9.4195 4 9.505 3.96847 9.5685 3.90965L11 2.58871L12.431 3.90965C12.4945 3.96847 12.58 4 12.6665 4C12.7095 4 12.753 3.99247 12.794 3.97647C12.9185 3.92894 13 3.81647 13 3.69224V0H9Z"
                          fill="#F96E6F"
                        />
                        <rect x={2} width={2} height={19} fill="currentColor" />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Cafes
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 1.5C3.75 1.08579 4.08579 0.75 4.5 0.75C4.91421 0.75 5.25 1.08579 5.25 1.5V3.75C5.25 4.16421 4.91421 4.5 4.5 4.5C4.08579 4.5 3.75 4.16421 3.75 3.75V1.5ZM14.25 11.9731V7.49083C14.7492 7.53768 15.3997 7.70517 15.8838 8.20969C16.7865 9.15039 16.4114 10.4086 16.4114 10.4086C16.4114 10.4086 16.0315 11.5002 15.0108 11.8914C14.686 11.9289 14.4382 11.955 14.25 11.9731ZM14.2425 13.4965C14.1152 15.5908 12.3764 17.25 10.25 17.25H4.75C2.54086 17.25 0.75 15.4591 0.75 13.25V6H13.5H14.25H14.3097C14.5469 6 14.6892 6.02594 14.8778 6.06033C14.9485 6.07322 15.0257 6.0873 15.1169 6.10165C16.9014 6.38365 17.7631 8.26759 17.9281 9C18.093 9.73241 18 11.0348 17.0427 12.2477C16.1987 13.3171 14.6073 13.4743 14.2425 13.4965ZM12.75 7.5H2.25V12.75C2.25 14.4069 3.59315 15.75 5.25 15.75H9.75C11.4069 15.75 12.75 14.4069 12.75 12.75V7.5ZM7.5 0.75C7.08579 0.75 6.75 1.08579 6.75 1.5V3.75C6.75 4.16421 7.08579 4.5 7.5 4.5C7.91421 4.5 8.25 4.16421 8.25 3.75V1.5C8.25 1.08579 7.91421 0.75 7.5 0.75ZM9.75 1.5C9.75 1.08579 10.0858 0.75 10.5 0.75C10.9142 0.75 11.25 1.08579 11.25 1.5V3.75C11.25 4.16421 10.9142 4.5 10.5 4.5C10.0858 4.5 9.75 4.16421 9.75 3.75V1.5Z"
                          fill="#047857"
                        />
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Grocery
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    78k
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $668
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      24%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                        fill="#EA5455"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-900">
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <g opacity="0.2">
                          <path
                            d="M11.2567 14.069C10.4329 14.8841 8.03414 20.6376 8.03414 20.6376C7.68208 21.2704 8.20885 21.7298 9.40691 21.1279L13.7116 18.8048C16.0309 17.5293 16.4793 17.1962 16.4486 14.5997L16.0171 11.5338C15.8694 10.4836 15.0748 10.2908 14.251 11.1059L11.2567 14.069Z"
                            fill="#231F20"
                          />
                        </g>
                        <g opacity="0.2">
                          <path
                            d="M7.87103 11.2114C7.05598 12.0352 1.30246 14.434 1.30246 14.434C0.669694 14.786 0.210313 14.2593 0.81217 13.0612L3.13527 8.75656C4.41074 6.43721 4.74388 5.98879 7.34041 6.0195L10.4063 6.45097C11.4565 6.59868 11.6493 7.39332 10.8342 8.21709L7.87103 11.2114Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.6255 13.0985C9.85236 13.928 7.6009 19.7838 7.6009 19.7838C7.27047 20.4278 7.76488 20.8954 8.88937 20.2828L12.9297 17.9184C15.1066 16.6203 15.5275 16.2812 15.4987 13.6385L15.0937 10.5182C14.955 9.44926 14.2092 9.25307 13.436 10.0826L10.6255 13.0985Z"
                          fill="#F96E6F"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.97038 11.0526C7.14084 11.9224 1.28504 14.4553 1.28504 14.4553C0.641029 14.8271 0.173482 14.2709 0.786038 13.0058L3.15043 8.46046C4.44858 6.01142 4.78764 5.53794 7.43033 5.57036L10.5507 6.02596C11.6196 6.18192 11.8158 7.021 10.9862 7.89083L7.97038 11.0526Z"
                          fill="#F96E6F"
                        />
                        <g opacity="0.2">
                          <path
                            d="M5.6235 13.9611C8.1605 11.2905 10.292 12.1053 10.292 12.1053C10.292 12.1053 11.0665 14.349 8.529 17.0195C5.9915 19.69 1.8835 21.63 1.5635 21.2932C1.2535 20.9663 3.086 16.6316 5.6235 13.9611Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.65234 12.6804C8.22537 9.82204 10.3871 10.6941 10.3871 10.6941C10.3871 10.6941 11.1726 13.0956 8.5991 15.9539C6.02557 18.8122 1.85924 20.8887 1.53469 20.5281C1.22029 20.1783 3.07881 15.5387 5.65234 12.6804Z"
                          fill="#FFAF63"
                        />
                        <path
                          d="M7.65234 10.6804C10.2254 7.82204 12.3871 8.69407 12.3871 8.69407C12.3871 8.69407 13.1726 11.0956 10.5991 13.9539C8.02557 16.8122 3.85923 18.8887 3.53468 18.5281C3.22028 18.1789 5.07931 13.5387 7.65234 10.6804Z"
                          fill="#F5CF87"
                        />
                        <g opacity="0.2">
                          <path
                            d="M17.1727 12.7496C13.1331 17.0586 6.94016 15.8795 6.94016 15.8795C6.94016 15.8795 5.83481 9.27429 9.87447 4.96477C13.9141 0.655252 20.0346 0.197321 20.8384 1.0547C21.6179 1.88615 21.2129 8.44063 17.1727 12.7496Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.61 12.3619C12.6719 16.5782 6.6348 15.4245 6.6348 15.4245C6.6348 15.4245 5.55726 8.96137 9.49529 4.74455C13.4333 0.527738 19.3999 0.0796574 20.1835 0.918594C20.9433 1.73216 20.5485 8.14565 16.61 12.3619Z"
                          fill="white"
                        />
                        <g opacity="0.2">
                          <path
                            d="M5.10046 18.4542C4.68699 18.8881 4.39105 19.2808 3.97758 18.8469C3.56411 18.4131 3.9384 18.1025 4.35187 17.6686L9.59252 10.5975C10.006 10.1636 11.7996 9.77083 12.2131 10.2047C12.6266 10.6386 12.2523 12.5208 11.8388 12.9547L5.10046 18.4542Z"
                            fill="#231F20"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.71244 16.9887C5.32759 17.4217 5.05213 17.8136 4.66729 17.3806C4.28244 16.9477 4.63082 16.6378 5.01567 16.2049L9.89353 9.14898C10.2784 8.71602 11.9479 8.32409 12.3327 8.75705C12.7176 9.19 12.3692 11.0682 11.9843 11.5011L5.71244 16.9887Z"
                          fill="#F96E6F"
                        />
                        <g opacity="0.2">
                          <circle
                            cx="15.0558"
                            cy="7.64404"
                            r="2.07835"
                            transform="rotate(-45 15.0558 7.64404)"
                            fill="#231F20"
                          />
                        </g>
                        <g opacity="0.2">
                          <circle
                            cx="17.3632"
                            cy="4.56494"
                            r="1.14285"
                            transform="rotate(-45 17.3632 4.56494)"
                            fill="#231F20"
                          />
                        </g>
                        <circle
                          cx="14.643"
                          cy="6.58838"
                          r="2.09934"
                          transform="rotate(-45 14.643 6.58838)"
                          fill="#838E9E"
                        />
                        <circle
                          cx="17.5439"
                          cy="3.55322"
                          r="1.04967"
                          transform="rotate(-45 17.5439 3.55322)"
                          fill="#838E9E"
                        />
                      </svg>
                    </div>
                    <div className="pl-5">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                        Kmart
                      </p>
                      <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                        meguc@ruj.io
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={1}
                          width={18}
                          height={16}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 1.5H15C16.275 1.5 17.25 2.475 17.25 3.75V11.25C17.25 12.525 16.275 13.5 15 13.5H9.75V15H12C12.45 15 12.75 15.3 12.75 15.75C12.75 16.2 12.45 16.5 12 16.5H6C5.55 16.5 5.25 16.2 5.25 15.75C5.25 15.3 5.55 15 6 15H8.25V13.5H3C1.725 13.5 0.75 12.525 0.75 11.25V3.75C0.75 2.475 1.725 1.5 3 1.5ZM15 12C15.45 12 15.75 11.7 15.75 11.25V3.75C15.75 3.3 15.45 3 15 3H3C2.55 3 2.25 3.3 2.25 3.75V11.25C2.25 11.7 2.55 12 3 12H15Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <rect width={18} height={18} fill="#1D4ED8" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-sm leading-tight text-gray-500 dark:text-gray-400 pl-3">
                      Technology
                    </p>
                  </div>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                    990
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                    in 24 hours
                  </p>
                </td>
                <td className="py-4 sm:pl-6 pl-4">
                  <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                    $891.2
                  </p>
                </td>
                <td className="py-4 sm:px-6 px-4">
                  <div className="flex items-center">
                    <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                      68%
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 3.99984C16 3.93317 16 3.79984 15.9333 3.73317C15.8667 3.59984 15.7333 3.4665 15.6 3.39984C15.5333 3.33317 15.4 3.33317 15.3333 3.33317H11.3333C10.9333 3.33317 10.6667 3.59984 10.6667 3.99984C10.6667 4.39984 10.9333 4.6665 11.3333 4.6665H13.7333L9 9.39984L6.13333 6.53317C5.86667 6.2665 5.46667 6.2665 5.2 6.53317L0.2 11.5332C-0.0666667 11.7998 -0.0666667 12.1998 0.2 12.4665C0.466667 12.7332 0.866667 12.7332 1.13333 12.4665L5.66667 7.93317L8.53333 10.7998C8.8 11.0665 9.2 11.0665 9.46667 10.7998L14.6667 5.59984V7.99984C14.6667 8.39984 14.9333 8.6665 15.3333 8.6665C15.7333 8.6665 16 8.39984 16 7.99984V3.99984Z"
                        fill="#15803D"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
