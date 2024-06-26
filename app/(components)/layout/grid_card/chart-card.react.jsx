"use client";
import React, { useEffect } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
export default function Index() {
  useEffect(() => {});
  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script
          defer
          src="https://cdn.tuk.dev/dev/light-dark-switch.js"
        ></script>
      </Helmet>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="sm:w-1/2 bg-white shadow p-6 dark:bg-gray-800">
          <div className="flex w-full justify-between items-center">
            <p className="text-lg leading-none text-right text-gray-800 dark:text-gray-100">
              Tickets sold
            </p>
            <div className="relative bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pt-1 pb-2 px-3 rounded-sm mt-4 sm:mt-0">
              <select className="text-xs text-gray-600 dark:text-gray-400 dark:bg-gray-700 w-24 h-full bg-transparent focus:outline-none">
                <option className="leading-none">Weekly</option>
                <option className="leading-none">Monthly</option>
                <option className="leading-none">Daily</option>
              </select>
            </div>
          </div>
          <div className="mt-5 w-full">
            <canvas id="check" />
          </div>
        </div>
      </div>
    </>
  );
}
