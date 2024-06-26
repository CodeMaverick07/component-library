"use client";
import React, { useState } from "react";
function Index() {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="flex-col md:flex-row flex items-center md:justify-center flex-wrap">
        {/*Code Block for white tooltip starts*/}
        <div
          className="relative mt-20 md:mt-0"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">
            <svg
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-circle"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus == 1 && (
            <div
              role="tooltip"
              className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded"
            >
              <svg
                className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-gray-800 pb-1">
                Keep track of follow ups
              </p>
              <p className="text-xs leading-4 text-gray-600 pb-3">
                Reach out to more prospects at the right moment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-50 cursor-pointer">
                  Learn More
                </span>
                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-5 py-1 text-xs">
                  Got it
                </button>
              </div>
            </div>
          )}{" "}
        </div>
        {/*Code Block for white tooltip ends*/}
        {/*Code Block for indigo tooltip starts*/}
        <div
          className="relative my-28 md:my-0 md:mx-40"
          onMouseEnter={() => setTooltipStatus(2)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">
            <svg
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-circle"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus == 2 && (
            <div
              role="tooltip"
              className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-indigo-700 p-4 rounded"
            >
              <svg
                className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#4c51bf"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-white pb-1">
                Keep track of follow ups
              </p>
              <p className="text-xs leading-4 text-white pb-3">
                Reach out to more prospects at the right moment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white cursor-pointer">
                  Learn More
                </span>
                <button className="bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-indigo-700 px-5 py-1 text-xs">
                  Got it
                </button>
              </div>
            </div>
          )}{" "}
        </div>
        {/*Code Block for indigo tooltip ends*/}
        {/*Code Block for gray tooltip starts*/}
        <div
          className="relative"
          onMouseEnter={() => setTooltipStatus(3)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">
            <svg
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-circle"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus == 3 && (
            <div
              role="tooltip"
              className="z-20 -mt-20 w-64 absolute transition duration-150 ease-in-out left-0 ml-8 shadow-lg bg-gray-800 p-4 rounded"
            >
              <svg
                className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#2D3748"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-sm font-bold text-white pb-1">
                Keep track of follow ups
              </p>
              <p className="text-xs leading-4 text-white pb-3">
                Reach out to more prospects at the right moment.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white cursor-pointer">
                  Learn More
                </span>
                <button className="bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 rounded text-gray-600 px-5 py-1 text-xs">
                  Got it
                </button>
              </div>
            </div>
          )}{" "}
        </div>
        {/*Code Block for gray tooltip ends*/}
      </div>
    </>
  );
}
export default Index;
