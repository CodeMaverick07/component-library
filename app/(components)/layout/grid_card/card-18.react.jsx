"use client";
import React, { useState } from "react";
export default function IndexPage() {
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="bg-white dark:bg-gray-800 md:w-96 rounded px-5 py-5 w-full shadow">
          <p className="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
            Reviews
          </p>
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <img
                  className="w-8 h-8 rounded-full shadow"
                  src="https://i.ibb.co/6rj5KQ1/card-1.png"
                  alt="profile"
                />
                <div className="ml-3">
                  <p className="text-sm leading-4 text-gray-800 dark:text-gray-100 font-semibold">
                    Mike Scarn
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">
                    Marketing Manager, IMC
                  </p>
                  <p className="text-sm leading-4 text-gray-800 dark:text-gray-100 my-3">
                    Incredible job and outstanding work
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                    6 days ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={11}
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
                    fill="#EAB308"
                  />
                </svg>
                <p className="text-sm leading-none text-yellow-500 ml-1">5</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <img
                  className="w-8 h-8 rounded-full shadow"
                  src="https://i.ibb.co/3pLWb3j/card-2.png"
                  alt="profile"
                />
                <div className="ml-3">
                  <p className="text-sm leading-4 text-gray-800 dark:text-gray-100 font-semibold">
                    Jim Halpert
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">
                    Head of Talent, Creative Co
                  </p>
                  <p className="text-sm leading-5 text-gray-800 dark:text-gray-100 my-3">
                    Amazing as always. Very challenging work, with revisions and
                    she made it all to perfection. Third time working together
                    and there will be a lot more!
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                    10 days ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={11}
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
                    fill="#EAB308"
                  />
                </svg>
                <p className="text-sm leading-none text-yellow-500 ml-1">4.5</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <img
                  className="w-8 h-8 rounded-full shadow"
                  src="https://i.ibb.co/4WQN47c/card-3.png"
                  alt="profile"
                />
                <div className="ml-3">
                  <p className="text-sm leading-4 text-gray-800 dark:text-gray-100 font-semibold">
                    Dwight Schrute
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">
                    Project Manager, J&amp;Ds
                  </p>
                  <p className="text-sm leading-4 text-gray-800 dark:text-gray-100 my-3 w-10/12">
                    It was a breeze coordinating with the team, definitely
                    recommended
                  </p>
                  <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
                    6 days ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={11}
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
                    fill="#EAB308"
                  />
                </svg>
                <p className="text-sm leading-none text-yellow-500 ml-1">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
