"use client";
import React, { useState } from "react";
export default function Index() {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="mx-auto container flex items-center justify-end py-8">
          <div
            onClick={() => setshow(!show)}
            className="ml-5 py-2 px-2 rounded-sm bg-indigo-400 hover:bg-indigo-500 ease-in duration-150 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M11.6667 5.83333C11.6667 4.54467 12.7113 3.5 14 3.5C15.2887 3.5 16.3333 4.54467 16.3333 5.83333C19.0635 7.12431 20.8584 9.81662 21 12.8333V16.3333C21.1781 17.8043 22.044 19.1032 23.3333 19.8333H4.66667C5.95597 19.1032 6.82195 17.8043 7 16.3333V12.8333C7.1416 9.81662 8.93647 7.12431 11.6667 5.83333"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 19.8335V21.0002C10.5 22.9332 12.067 24.5002 14 24.5002C15.933 24.5002 17.5 22.9332 17.5 21.0002V19.8335"
                stroke="white"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          className={show ? "hidden" : "fixed overflow-y-scroll inset-0 z-50"}
        >
          <div
            onClick={() => setshow(!show)}
            className="absolute h-full inset-0  z-0"
          />
          <div className="flex w-full justify-end w-full">
            <div className="bg-gray-800 w-11/12 sm:w-96 pt-6 min-h-screen z-50">
              <div className="container flex flex-col w-full h-full justify-between">
                <div>
                  <div className="flex w-full justify-between px-8 items-center">
                    <p className="text-base font-bold text-white">
                      Activity Board
                    </p>
                    <div
                      onClick={() => setshow(!show)}
                      className="block ml-5 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                  <div className="px-8 py-8">
                    <div className="flex justify-between w-full">
                      <p className="text-xs sm:text-base font-bold leading-tight text-white">
                        2 SEATS LEFT:
                        <br />
                        Metropolitan City Art
                        <br />
                        Gallery Showcase
                      </p>
                      <p className="text-xs leading-3 text-right text-gray-600">
                        25 min ago
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="ml-2 text-xs leading-3 text-gray-600">
                        Veevents.com/cosutmeparty
                      </p>
                    </div>
                    <div className="flex items-center mt-7">
                      <button className="py-2 px-3 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="4.5"
                            cy="3.5"
                            r={2}
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Book a Seat
                        </p>
                      </button>
                      <button className="py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx={3}
                            cy={6}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={3}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={9}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 5.3499L7.64998 3.6499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 6.6499L7.64998 8.3499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Share Event
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="opacity-50 w-full h-0.5 border border-gray-900" />
                  <div className="px-8 py-8">
                    <div className="flex justify-between w-full">
                      <p className="text-xs sm:text-base font-bold leading-tight text-white">
                        2 SEATS LEFT:
                        <br />
                        Metropolitan City Art
                        <br />
                        Gallery Showcase
                      </p>
                      <p className="text-xs leading-3 text-right text-gray-600">
                        25 min ago
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="ml-2 text-xs leading-3 text-gray-600">
                        Veevents.com/cosutmeparty
                      </p>
                    </div>
                    <div className="flex items-center mt-7">
                      <button className="py-2 px-3 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="4.5"
                            cy="3.5"
                            r={2}
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Book a Seat
                        </p>
                      </button>
                      <button className="py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx={3}
                            cy={6}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={3}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={9}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 5.3499L7.64998 3.6499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 6.6499L7.64998 8.3499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Share Event
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="opacity-50 w-full h-0.5 border border-gray-900" />
                  <div className="px-8 py-8">
                    <div className="flex justify-between w-full">
                      <p className="text-xs sm:text-base font-bold leading-tight text-white">
                        2 SEATS LEFT:
                        <br />
                        Metropolitan City Art
                        <br />
                        Gallery Showcase
                      </p>
                      <p className="text-xs leading-3 text-right text-gray-600">
                        25 min ago
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="ml-2 text-xs leading-3 text-gray-600">
                        Veevents.com/cosutmeparty
                      </p>
                    </div>
                    <div className="flex items-center mt-7">
                      <button className="py-2 px-3 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="4.5"
                            cy="3.5"
                            r={2}
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Book a Seat
                        </p>
                      </button>
                      <button className="py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx={3}
                            cy={6}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={3}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={9}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 5.3499L7.64998 3.6499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 6.6499L7.64998 8.3499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Share Event
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="opacity-50 w-full h-0.5 border border-gray-900" />
                  <div className="px-8 py-8">
                    <div className="flex justify-between w-full">
                      <p className="text-xs sm:text-base font-bold leading-tight text-white">
                        2 SEATS LEFT:
                        <br />
                        Metropolitan City Art
                        <br />
                        Gallery Showcase
                      </p>
                      <p className="text-xs leading-3 text-right text-gray-600">
                        25 min ago
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66663 9.33342C7.1055 9.78135 7.7062 10.0338 8.33329 10.0338C8.96039 10.0338 9.56109 9.78135 9.99996 9.33342L12.6666 6.66676C13.5871 5.74628 13.5871 4.2539 12.6666 3.33342C11.7462 2.41295 10.2538 2.41295 9.33329 3.33342L8.99996 3.66676"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.3333 6.66665C8.89443 6.21872 8.29373 5.96631 7.66663 5.96631C7.03954 5.96631 6.43884 6.21872 5.99997 6.66665L3.3333 9.33332C2.41283 10.2538 2.41283 11.7462 3.3333 12.6666C4.25377 13.5871 5.74616 13.5871 6.66663 12.6666L6.99997 12.3333"
                          stroke="#718096"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="ml-2 text-xs leading-3 text-gray-600">
                        Veevents.com/cosutmeparty
                      </p>
                    </div>
                    <div className="flex items-center mt-7">
                      <button className="py-2 px-3 bg-gradient-to-br from-indigo-400 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="4.5"
                            cy="3.5"
                            r={2}
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.5 10.5V9.5C1.5 8.39543 2.39543 7.5 3.5 7.5H5.5C6.60457 7.5 7.5 8.39543 7.5 9.5V10.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 5.125C7.79289 5.125 7.625 5.29289 7.625 5.5C7.625 5.70711 7.79289 5.875 8 5.875V5.125ZM11 5.875C11.2071 5.875 11.375 5.70711 11.375 5.5C11.375 5.29289 11.2071 5.125 11 5.125V5.875ZM9.875 4C9.875 3.79289 9.70711 3.625 9.5 3.625C9.29289 3.625 9.125 3.79289 9.125 4H9.875ZM9.125 7C9.125 7.20711 9.29289 7.375 9.5 7.375C9.70711 7.375 9.875 7.20711 9.875 7H9.125ZM8 5.875H11V5.125H8V5.875ZM9.125 4V7H9.875V4H9.125Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Book a Seat
                        </p>
                      </button>
                      <button className="py-2 ml-3 px-3 bg-gray-700 hover:bg-gray-600 ease-in duration-150 rounded-sm flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx={3}
                            cy={6}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={3}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx={9}
                            cy={9}
                            r="1.5"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 5.3499L7.64998 3.6499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.34998 6.6499L7.64998 8.3499"
                            stroke="white"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-xs leading-3 text-white ml-1">
                          Share Event
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="opacity-50 w-full h-0.5 border border-gray-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
