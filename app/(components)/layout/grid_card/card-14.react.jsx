"use client";
import React, { useState } from "react";
export default function IndexPage() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg p-5 bg-white dark:bg-gray-800 w-full">
          <h1 className="text-lg font-bold leading-3 text-gray-800 dark:text-gray-100">
            Select Payment Options
          </h1>
          <div className="pt-7">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={24}
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={33}
                    height={23}
                    rx="3.5"
                    fill="white"
                    stroke="#D9D9D9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7502 15.8579H8.6905L7.14594 9.79198C7.07263 9.51295 6.91697 9.26627 6.688 9.15001C6.11658 8.85784 5.4869 8.62531 4.79999 8.50804V8.2745H8.11807C8.57601 8.2745 8.91947 8.62531 8.97671 9.03274L9.77811 13.4083L11.8368 8.2745H13.8393L10.7502 15.8579ZM14.9842 15.8579H13.039L14.6408 8.2745H16.586L14.9842 15.8579ZM19.1027 10.3753C19.1599 9.96689 19.5034 9.73335 19.9041 9.73335C20.5338 9.67471 21.2197 9.79199 21.7921 10.0832L22.1356 8.45042C21.5631 8.21688 20.9335 8.09961 20.362 8.09961C18.474 8.09961 17.1002 9.15002 17.1002 10.6078C17.1002 11.7169 18.0733 12.2992 18.7602 12.65C19.5034 12.9998 19.7896 13.2334 19.7324 13.5832C19.7324 14.1079 19.1599 14.3414 18.5885 14.3414C17.9016 14.3414 17.2147 14.1665 16.586 13.8743L16.2426 15.5081C16.9295 15.7992 17.6726 15.9165 18.3595 15.9165C20.4765 15.9741 21.7921 14.9247 21.7921 13.3496C21.7921 11.3661 19.1027 11.2498 19.1027 10.3753ZM28.6 15.8579L27.0554 8.2745H25.3964C25.0529 8.2745 24.7095 8.50804 24.595 8.85784L21.7349 15.8579H23.7374L24.137 14.7498H26.5975L26.8265 15.8579H28.6ZM25.6826 10.3167L26.254 13.1747H24.6522L25.6826 10.3167Z"
                    fill="#172B85"
                  />
                </svg>
                <div className="flex flex-col pl-2">
                  <p className="text-sm font-semibold  leading-3 text-gray-800 dark:text-gray-100">
                    Ending with 7562
                  </p>
                  <p className="text-xs leading-3 pt-2 text-gray-600 dark:text-gray-400">
                    CVV: 822 | Expiry: 07/2021
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold leading-3 text-right text-gray-800 dark:text-gray-100">
                $12,300
              </p>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={24}
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <rect width={34} height={24} rx={4} fill="#1F72CD" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.09542 8.5L2.91431 15.7467H6.72254L7.19465 14.5913H8.27379L8.7459 15.7467H12.9377V14.8649L13.3112 15.7467H15.4795L15.8531 14.8462V15.7467H24.5709L25.6309 14.6213L26.6235 15.7467L31.1011 15.7561L27.91 12.1436L31.1011 8.5H26.6929L25.661 9.60463L24.6997 8.5H15.2159L14.4015 10.3704L13.568 8.5H9.76774V9.35186L9.34498 8.5H6.09542ZM6.83229 9.52905H8.6886L10.7986 14.4431V9.52905H12.8322L14.4619 13.0524L15.9639 9.52905H17.9873V14.7291H16.7561L16.746 10.6544L14.9511 14.7291H13.8498L12.0448 10.6544V14.7291H9.51203L9.03187 13.5633H6.43769L5.95851 14.728H4.60147L6.83229 9.52905ZM24.1198 9.52905H19.1137V14.726H24.0423L25.6309 13.0036L27.1621 14.726H28.7627L26.4362 12.1426L28.7627 9.52905H27.2315L25.651 11.2316L24.1198 9.52905ZM7.73532 10.4089L6.88064 12.4856H8.58901L7.73532 10.4089ZM20.3499 11.555V10.6057V10.6048H23.4736L24.8366 12.1229L23.4132 13.6493H20.3499V12.613H23.081V11.555H20.3499Z"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-col pl-2">
                  <p className="text-sm font-semibold  leading-3 text-gray-800 dark:text-gray-100">
                    Ending with 1881
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 pt-2">
                    CVV: 822 | Expiry: 07/2021
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold leading-3 text-right text-gray-800 dark:text-gray-100">
                $9,300
              </p>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={34}
                  height={24}
                  viewBox="0 0 34 24"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={33}
                    height={23}
                    rx="3.5"
                    fill="white"
                    stroke="#D9D9D9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z"
                    fill="#ED0006"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.179 16.8294C18.6369 15.6005 19.5614 13.7719 19.5614 11.73C19.5614 9.68801 18.6369 7.85941 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5772 5.02997C25.3221 5.02997 28.3579 8.02966 28.3579 11.73C28.3579 15.4303 25.3221 18.43 21.5772 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z"
                    fill="#F9A000"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.179 16.8294C18.6369 15.6005 19.5614 13.7719 19.5614 11.73C19.5614 9.68805 18.6369 7.85946 17.179 6.63055C15.7211 7.85946 14.7966 9.68805 14.7966 11.73C14.7966 13.7719 15.7211 15.6005 17.179 16.8294Z"
                    fill="#FF5E00"
                  />
                </svg>
                <div className="flex flex-col pl-2">
                  <p className="text-sm font-semibold  leading-3 text-gray-800 dark:text-gray-100">
                    Ending with 1929
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 pt-2">
                    CVV: 822 | Expiry: 07/2021
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold leading-3 text-right text-gray-800 dark:text-gray-100">
                $99,300
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
