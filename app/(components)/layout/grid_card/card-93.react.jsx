"use client";
import React, { useEffect } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
export default function IndexPage() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var green_blue_gradient = ctx.createLinearGradient(0, 0, 0, 300);
    green_blue_gradient.addColorStop(0, "#6EE7B7");
    green_blue_gradient.addColorStop(1, "#38BDF8");
  }, []);
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script
          defer
          src="https://cdn.tuk.dev/dev/light-dark-switch.js"
        ></script>
      </Helmet>
      <div className="flex items-center justify-center py-8">
        <div className="sm:max-w-sm max-w-xs  rounded shadow dark:bg-gray-800 bg-white">
          <div className="sm:px-6 py-6 px-2 flex items-center">
            <p className="text-xl font-medium leading-5 md:pr-36 pr-24 text-gray-600 dark:text-gray-100">
              Goal Overview
            </p>
            <span>
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
                  d="M9 17.25C13.575 17.25 17.25 13.575 17.25 9C17.25 4.425 13.575 0.75 9 0.75C4.425 0.75 0.75 4.425 0.75 9C0.75 13.575 4.425 17.25 9 17.25ZM9.15 10.425C9.45 10.35 11.925 9.45 11.925 7.5C11.925 6.225 11.1 5.1 9.9 4.725C8.325 4.125 6.6 4.95 6.075 6.525C6 6.9 6.15 7.35 6.525 7.35C6.9 7.5 7.35 7.275 7.5 6.9C7.8 6.15 8.7 5.7 9.45 6C10.05 6.225 10.425 6.75 10.425 7.425C10.425 8.25 9.15 8.85 8.7 9C8.325 9.15 8.1 9.6 8.25 9.975C8.325 10.275 8.625 10.5 8.925 10.5C9 10.5 9.075 10.5 9.15 10.425ZM15.75 9C15.75 5.25 12.75 2.25 9 2.25C5.25 2.25 2.25 5.25 2.25 9C2.25 12.75 5.25 15.75 9 15.75C12.75 15.75 15.75 12.75 15.75 9ZM9.37499 12.15C9.44999 12.15 9.52499 12.225 9.52499 12.225C9.59999 12.3 9.67499 12.375 9.59999 12.45C9.67499 12.525 9.67499 12.675 9.67499 12.75C9.67499 12.975 9.59999 13.125 9.44999 13.275C9.29999 13.425 9.14999 13.5 8.92499 13.5C8.69999 13.5 8.54999 13.425 8.39999 13.275C8.24999 13.125 8.17499 12.975 8.17499 12.75C8.17499 12.6621 8.20073 12.6 8.22205 12.5485C8.23713 12.5121 8.24999 12.4811 8.24999 12.45C8.24999 12.375 8.32499 12.3 8.39999 12.225C8.47499 12.15 8.54999 12.075 8.62499 12.075C8.77499 12 8.92499 12 9.07499 12C9.11812 12.0431 9.13645 12.0615 9.1585 12.0692C9.1748 12.075 9.19312 12.075 9.22499 12.075C9.26249 12.075 9.28124 12.0938 9.29999 12.1125C9.31874 12.1312 9.33749 12.15 9.37499 12.15Z"
                  fill="#BABFC7"
                />
              </svg>
            </span>
          </div>
          <div className="sm:px-7 px-2 relative">
            <canvas id="myChart" width={150}>
              {" "}
            </canvas>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-14">
              <p className="text-5xl font-semibold leading-10 text-center text-gray-800 dark:text-gray-100">
                69%
              </p>
              <p className="text-2xl font-semibold leading-normal text-center pt-2 text-gray-500 dark:text-gray-400">
                complete
              </p>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 dark:border-gray-900 mt-8">
            <div className="flex items-center justify-center">
              <div className="py-4 sm:pr-12 pr-4">
                <p className="text-sm leading-none text-center text-gray-500 dark:text-gray-400">
                  Completed
                </p>
                <p className="text-xl font-semibold leading-5 py-3.5 text-center text-gray-800 dark:text-gray-100">
                  786,617
                </p>
              </div>
              <div className="py-4 border-l border-gray-200 dark:border-gray-900">
                <div className="sm:pl-12 pl-4">
                  <p className="text-sm leading-none text-center text-gray-500 dark:text-gray-400">
                    In progress
                  </p>
                  <p className="text-xl font-semibold leading-5 py-3.5 text-center text-gray-800 dark:text-gray-100">
                    76,617
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
