"use client";
import React, { useEffect } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
export default function IndexPage() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
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
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 w-80  rounded shadow-lg dark:bg-gray-800 bg-white p-4">
          <p className=" text-lg font-bold leading-3 dark:text-gray-100 text-gray-800">
            Runtime Comparison
          </p>
          <input
            type="date"
            className="mt-3 w-full text-xs leading-3 text-gray-600 py-2 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 px-2 focus:ouline-none"
          />
          <div className="w-full pt-7 flex items-center justify-center">
            <div className="w-full h-full">
              <canvas id="myChart" width="250px" height="181px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
