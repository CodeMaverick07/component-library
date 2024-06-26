"use client";
import React, { useEffect } from "react";

export default function IndexPage() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="sm:w-6/12 flex flex-wrap items-center  rounded py-6 px-8">
          <div className="w-64 h-36 bg-white dark:bg-gray-800  rounded py-6 px-8 mt-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Total Users
                </p>
                <p className="text-4xl font-semibold leading-9 pt-4 text-gray-800 dark:text-gray-100">
                  40,699
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-users"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#0284C7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.57018 8.47159L4.55468 6.48709L6.20434 8.13734L8.04593 6.29575L7.00001 5.24984H9.91668V8.1665L8.87076 7.12059L6.20434 9.787L4.55468 8.13734L3.11093 9.5805C3.76625 10.5668 4.77204 11.2672 5.92448 11.5395C7.07692 11.8119 8.28981 11.636 9.31737 11.0474C10.3449 10.4588 11.1103 9.50162 11.4584 8.36974C11.8065 7.23787 11.7112 6.01599 11.192 4.95172C10.6727 3.88744 9.7683 3.06037 8.66195 2.63811C7.55561 2.21584 6.3301 2.22996 5.23378 2.67761C4.13747 3.12526 3.25233 3.97295 2.75774 5.04891C2.26315 6.12487 2.1961 7.34862 2.57018 8.47217V8.47159ZM1.67301 9.38042L1.66718 9.37459L1.66951 9.37225C1.33697 8.6256 1.16563 7.8172 1.16668 6.99984C1.16668 3.77809 3.77826 1.1665 7.00001 1.1665C10.2218 1.1665 12.8333 3.77809 12.8333 6.99984C12.8333 10.2216 10.2218 12.8332 7.00001 12.8332C4.62584 12.8332 2.58418 11.4157 1.67301 9.38042Z"
                    fill="#0D9488"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold leading-3 pl-2 text-green-600">
                5.2%
              </p>
              <p className="text-xs font-medium leading-3 pl-1 text-gray-500 dark:text-gray-400">
                Up from Yesterday
              </p>
            </div>
          </div>
          <div
            className="w-64 h-36 bg-white dark:bg-gray-800 rounded 2xl:mx-9 lg:mx-2 
          mt-4  py-6 px-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Total Users
                </p>
                <p className="text-4xl font-semibold leading-9 pt-4 text-gray-800 dark:text-gray-100">
                  40,699
                </p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 3V19H21V21H3V3H5ZM20.293 6.293L21.707 7.707L16 13.414L13 10.415L8.707 14.707L7.293 13.293L13 7.586L16 10.585L20.293 6.293Z"
                    fill="#059669"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.4298 5.52841L9.44532 7.51291L7.79566 5.86266L5.95407 7.70424L6.99999 8.75016L4.08332 8.75016L4.08332 5.83349L5.12924 6.87941L7.79566 4.213L9.44532 5.86266L10.8891 4.4195C10.2337 3.43316 9.22796 2.73284 8.07552 2.46046C6.92308 2.18808 5.71019 2.364 4.68263 2.95259C3.65507 3.54117 2.8897 4.49838 2.54161 5.63026C2.19353 6.76213 2.28876 7.98401 2.80801 9.04828C3.32727 10.1126 4.2317 10.9396 5.33805 11.3619C6.44439 11.7842 7.6699 11.77 8.76622 11.3224C9.86253 10.8747 10.7477 10.027 11.2423 8.95109C11.7369 7.87513 11.8039 6.65138 11.4298 5.52783L11.4298 5.52841ZM12.327 4.61958L12.3328 4.62541L12.3305 4.62775C12.663 5.3744 12.8344 6.1828 12.8333 7.00016C12.8333 10.2219 10.2217 12.8335 6.99999 12.8335C3.77824 12.8335 1.16666 10.2219 1.16666 7.00016C1.16666 3.77841 3.77824 1.16683 6.99999 1.16683C9.37416 1.16683 11.4158 2.58433 12.327 4.61958Z"
                    fill="#DC2626"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold leading-3 pl-2 text-red-600">
                2.6%
              </p>
              <p className="text-xs font-medium leading-3 pl-1 text-gray-500 dark:text-gray-400">
                Up from Yesterday
              </p>
            </div>
          </div>
          <div className="w-64 h-36 bg-white dark:bg-gray-800 rounded  mt-4 px-8 py-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Total Users
                </p>
                <p className="text-4xl font-semibold leading-9 pt-4 text-gray-800 dark:text-gray-100">
                  40,699
                </p>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 6.41384L0.757004 3.17184L2.172 1.75684L5.414 4.99984H20.656C20.8119 4.99983 20.9656 5.03625 21.1049 5.1062C21.2442 5.17616 21.3652 5.2777 21.4582 5.40273C21.5513 5.52776 21.6139 5.67282 21.6409 5.82632C21.6679 5.97983 21.6587 6.13753 21.614 6.28684L19.214 14.2868C19.1523 14.4929 19.0257 14.6736 18.8531 14.802C18.6805 14.9305 18.4711 14.9999 18.256 14.9998H6V16.9998H17V18.9998H5C4.73479 18.9998 4.48043 18.8945 4.2929 18.7069C4.10536 18.5194 4 18.2651 4 17.9998V6.41384ZM6 6.99984V12.9998H17.512L19.312 6.99984H6ZM5.5 22.9998C5.10218 22.9998 4.72065 22.8418 4.43934 22.5605C4.15804 22.2792 4 21.8977 4 21.4998C4 21.102 4.15804 20.7205 4.43934 20.4392C4.72065 20.1579 5.10218 19.9998 5.5 19.9998C5.89783 19.9998 6.27936 20.1579 6.56066 20.4392C6.84197 20.7205 7 21.102 7 21.4998C7 21.8977 6.84197 22.2792 6.56066 22.5605C6.27936 22.8418 5.89783 22.9998 5.5 22.9998ZM17.5 22.9998C17.1022 22.9998 16.7206 22.8418 16.4393 22.5605C16.158 22.2792 16 21.8977 16 21.4998C16 21.102 16.158 20.7205 16.4393 20.4392C16.7206 20.1579 17.1022 19.9998 17.5 19.9998C17.8978 19.9998 18.2794 20.1579 18.5607 20.4392C18.842 20.7205 19 21.102 19 21.4998C19 21.8977 18.842 22.2792 18.5607 22.5605C18.2794 22.8418 17.8978 22.9998 17.5 22.9998Z"
                    fill="#EA580C"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.57018 8.47159L4.55468 6.48709L6.20434 8.13734L8.04593 6.29575L7.00001 5.24984H9.91668V8.1665L8.87076 7.12059L6.20434 9.787L4.55468 8.13734L3.11093 9.5805C3.76625 10.5668 4.77204 11.2672 5.92448 11.5395C7.07692 11.8119 8.28981 11.636 9.31737 11.0474C10.3449 10.4588 11.1103 9.50162 11.4584 8.36974C11.8065 7.23787 11.7112 6.01599 11.192 4.95172C10.6727 3.88744 9.7683 3.06037 8.66195 2.63811C7.55561 2.21584 6.3301 2.22996 5.23378 2.67761C4.13747 3.12526 3.25233 3.97295 2.75774 5.04891C2.26315 6.12487 2.1961 7.34862 2.57018 8.47217V8.47159ZM1.67301 9.38042L1.66718 9.37459L1.66951 9.37225C1.33697 8.6256 1.16563 7.8172 1.16668 6.99984C1.16668 3.77809 3.77826 1.1665 7.00001 1.1665C10.2218 1.1665 12.8333 3.77809 12.8333 6.99984C12.8333 10.2216 10.2218 12.8332 7.00001 12.8332C4.62584 12.8332 2.58418 11.4157 1.67301 9.38042Z"
                    fill="#0D9488"
                  />
                </svg>
              </div>
              <p className="text-xs font-semibold leading-3 pl-2 text-green-600">
                5.2%
              </p>
              <p className="text-xs font-medium leading-3 pl-1 text-gray-500 dark:text-gray-400">
                Up from Yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
