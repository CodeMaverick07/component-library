"use client";
import React, { useEffect } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
import Chart from "chart.js/auto";

export default function IndexPage() {
  useEffect(() => {
    let ctx = document.getElementById("myChart").getContext("2d");
  });
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
        <div className="md:w-96 rounded shadow-lg p-6 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-gray-800 dark:text-gray-100 font-bold text-lg">
              Expenditure
            </h1>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-2 rounded-full mr-1 h-1 bg-purple-500" />
                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100">
                  AlphaSquad
                </p>
              </div>
              <div className="flex items-center ml-5">
                <div className="w-2 rounded-full mr-1 h-1 bg-pink-500" />
                <p className="text-xs leading-3 text-gray-800 dark:text-gray-100">
                  TUK
                </p>
              </div>
            </div>
          </div>
          <div className="w-full pt-7 flex items-center justify-center">
            <div className="w-64">
              <canvas id="myChart" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
