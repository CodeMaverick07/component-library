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
        <div className="sm:w-96 w-80 rounded shadow-lg dark:bg-gray-800 bg-white ">
          <div className="p-6">
            <p className="text-sm leading-none text-gray-500 dark:text-gray-400 tracking-tighter">
              Trend
            </p>
            <h1 className="text-gray-800 dark:text-gray-100 font-bold text-lg">
              Product Sale
            </h1>
          </div>
          <div className="w-full pt-7 flex items-center justify-center">
            <div className="w-full h-full">
              <canvas id="myChart" width={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
