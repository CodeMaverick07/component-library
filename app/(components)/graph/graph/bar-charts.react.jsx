"use client";
import React, { useEffect, useState } from "react";
// npm i react-helmet
import { Helmet } from "react-helmet";
import Chart from "chart.js"; // Import Chart library

export default function Index() {
  const [show, setShow] = useState(false); // Corrected useState initial value

  useEffect(() => {
    // Moved Chart initialization inside the useEffect hook
    const myBarChart = Chart(document.getElementById("chartjs-1"), {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            data: [25, 55, 100, 75, 60, 60, 120], // Corrected dataset length
            fill: false,
            backgroundColor: "#4338CA",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: { beginAtZero: true },
            },
          ],
        },
        legend: false, // Corrected legend property
      },
    });

    // Cleanup function
    return () => {
      myBarChart.destroy(); // Destroy the chart instance to prevent memory leaks
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script
          defer
          src="https://cdn.tuk.dev/dev/light-dark-switch.js"
        ></script>
      </Helmet>
      <div>
        <div className="flex items-center justify-center w-full h-full py-8 px-4">
          <div className="sm:w-1/2 2xl:flex w-11/12">
            <div className="w-full">
              <div className="flex w-full justify-between relative md:static">
                <h4 className="text-gray-600 dark:text-gray-400 font-bold text-base md:text-xl">
                  Registrations
                </h4>
                <div className="static sm:relative">
                  <div
                    onClick={() => setShow(!show)}
                    className="py-2 px-3 cursor-pointer flex items-center flex-no-wrap bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 ease-in duration-150 hover:bg-gray-200 relative w-auto"
                  >
                    <p className="text-gray-600 dark:text-gray-400 mr-2 text-xs">
                      12 Aug - 19 Aug
                    </p>
                    <div>
                      <button className="text-indigo-700 dark:text-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <rect
                            x="2.66666"
                            y="3.33337"
                            width="10.6667"
                            height="10.6667"
                            rx="1.33333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.6667 2V4.66667"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.33333 2V4.66667"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.66666 7.33333H13.3333"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.33334 9.99996H8.00001"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.99999 10V12"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    id="popup_calender"
                    className={show ? "w-full h-full " : "hidden "}
                  >
                    <div
                      onClick={() => setShow(!show)}
                      className="fixed w-full h-full inset-0  bg-transparent  z-40"
                    />
                    {/* Calendar content */}
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <canvas id="chartjs-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
