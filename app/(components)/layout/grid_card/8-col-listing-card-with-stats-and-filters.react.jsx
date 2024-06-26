"use client";
import React, { useState } from "react";
function Index() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
          <p className="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">
            23 December, <span className="text-gray-500">Sunday</span>
          </p>
          <div className="relative">
            <div
              onclick={() => setShowDropdown(!showDropdown)}
              className="relative z-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-between w-full cursor-pointer text-xs form-select text-gray-600 dark:text-gray-400 md:p-3 p-2 rounded bg-transparent"
              data-menu
            >
              <p className="leading-3 tracking-normal font-normal text-sm">
                Show:
                <span className="text-indigo-700 dark:text-indigo-600 mr-2">
                  This week
                </span>
              </p>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden icon icon-tabler icon-tabler-chevron-up"
                  width={16}
                  height={16}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width={16}
                  height={16}
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
            {showDropdown && (
              <ul className="invisible z-10 transition duration-300 opacity-0 bg-white dark:bg-gray-700 shadow rounded mt-2 w-40 py-1 absolute">
                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                  Previous week
                </li>
                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">
                  Next week
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="xl:px-8 lg:px-8 md:px-8 px-4 py-4 bg-white dark:bg-gray-800">
          <div className="xl:flex lg:flex md:flex sm:flex">
            <div className="xl:w-1/4 w-full mb-2 xl:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Tasks Scheduled: 24
              </p>
            </div>
            <div className="xl:w-1/4 w-full mb-2 xl:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Tasks Pending: 15
              </p>
            </div>
            <div className="xl:w-1/4 w-full mb-2 xl:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">
                Tasks Completed: 09
              </p>
            </div>
          </div>
        </div>
        <div className="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul>
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                  Meeting
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
              <div className="flex flex-wrap items-center">
                <div className="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg"
                    alt
                  />
                </div>
                <p className="text-xs ml-1 text-gray-600 dark:text-gray-400">
                  +3 attendees
                </p>
              </div>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-red-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-red-500 font-normal">Urgent</span>
              </div>
            </div>
          </div>
          <div className="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
              <div className="flex flex-wrap items-center">
                <div className="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg"
                    alt
                  />
                </div>
                <div className="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg"
                    alt
                  />
                </div>
                <p className="text-xs ml-1 text-gray-600 dark:text-gray-400">
                  +3 attendees
                </p>
              </div>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-yellow-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-yellow-600 font-normal">
                  Personal
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 flex justify-between rounded bg-gray-100 dark:bg-gray-700">
            <div className="w-3/5">
              <p className="mb-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                UX Team Skype Session
              </p>
              <ul className="mb-5">
                <li className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                  - Create a competitive analysis report, create personas and
                  also design UX research reports.
                </li>
                <li className="text-xs text-gray-600 dark:text-gray-400">
                  - Sitemap and information architecture visualizing the
                  organized model of all the components and information
                  contained in product.
                </li>
              </ul>
            </div>
            <div className="w-3/12 flex flex-col items-end justify-between">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                9am - 10am
              </p>
              <div className="bg-gray-200 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-600 dark:text-gray-400 font-normal">
                  Meeting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Index;
