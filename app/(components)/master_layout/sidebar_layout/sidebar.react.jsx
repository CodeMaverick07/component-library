"use client";
import React, { useState } from "react";

function MyApp() {
  const [sidebar, setsidebar] = useState(true);
  return (
    <div className="flex flex-no-wrap">
      <div className="absolute border-r sm:relative h-full z-20">
        <div className="flex w-full">
          <div className="flex items-center justify-center flex-col w-full py-6 px-3 bg-gray-100 h-full">
            <svg
              width={51}
              height={32}
              viewBox="0 0 51 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 17.0551C0.0330737 25.2688 6.72481 32 14.9453 32C23.1861 32 29.8902 25.2959 29.8902 17.0551V14.9453C29.8902 11.5521 32.6511 8.79118 36.0444 8.79118C39.4381 8.79118 42.1985 11.5521 42.1985 14.9453C42.1985 15.9163 42.9859 16.7037 43.9569 16.7037H49.2319C50.2033 16.7037 50.9902 15.9163 50.9902 14.9453C50.9902 6.70457 44.2861 0 36.0449 0C27.8041 0 21.0995 6.70457 21.0995 14.9453V17.0551C21.0995 20.4489 18.3386 23.2088 14.9458 23.2088C11.5526 23.2088 8.79167 20.4489 8.79167 17.0551C8.79167 16.0842 8.00432 15.2968 7.03333 15.2968H1.75833C0.787351 15.2973 0 16.0842 0 17.0551Z"
                fill="currentColor"
              />
            </svg>
            <div aria-orientation="vertical" className="rounded py-10">
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <div className="flex items-center">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 0.5H7.16667V7.16667H0.5V0.5ZM0.5 8.83333H7.16667V15.5H0.5V8.83333ZM8.83333 0.5H15.5V7.16667H8.83333V0.5ZM8.83333 8.83333H15.5V15.5H8.83333V8.83333ZM10.5 2.16667V5.5H13.8333V2.16667H10.5ZM10.5 10.5V13.8333H13.8333V10.5H10.5ZM2.16667 2.16667V5.5H5.5V2.16667H2.16667ZM2.16667 10.5V13.8333H5.5V10.5H2.16667Z"
                      fill="#4338CA"
                    />
                  </svg>
                </div>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666992 18.3333C0.666992 16.5652 1.36937 14.8695 2.61961 13.6193C3.86986 12.3691 5.56555 11.6667 7.33366 11.6667C9.10177 11.6667 10.7975 12.3691 12.0477 13.6193C13.2979 14.8695 14.0003 16.5652 14.0003 18.3333H12.3337C12.3337 17.0073 11.8069 15.7355 10.8692 14.7978C9.93151 13.8601 8.65974 13.3333 7.33366 13.3333C6.00758 13.3333 4.73581 13.8601 3.79813 14.7978C2.86044 15.7355 2.33366 17.0073 2.33366 18.3333H0.666992ZM7.33366 10.8333C4.57116 10.8333 2.33366 8.59584 2.33366 5.83334C2.33366 3.07084 4.57116 0.833344 7.33366 0.833344C10.0962 0.833344 12.3337 3.07084 12.3337 5.83334C12.3337 8.59584 10.0962 10.8333 7.33366 10.8333ZM7.33366 9.16668C9.17533 9.16668 10.667 7.67501 10.667 5.83334C10.667 3.99168 9.17533 2.50001 7.33366 2.50001C5.49199 2.50001 4.00033 3.99168 4.00033 5.83334C4.00033 7.67501 5.49199 9.16668 7.33366 9.16668ZM14.237 12.2525C15.4081 12.7799 16.402 13.6344 17.0991 14.7131C17.7963 15.7918 18.1671 17.0489 18.167 18.3333H16.5003C16.5005 17.37 16.2225 16.4271 15.6996 15.618C15.1767 14.8089 14.4312 14.1681 13.5528 13.7725L14.2362 12.2525H14.237ZM13.6637 2.84418C14.5033 3.19026 15.2211 3.77796 15.7262 4.5327C16.2312 5.28745 16.5007 6.17521 16.5003 7.08334C16.5007 8.22695 16.0734 9.32937 15.3024 10.174C14.5315 11.0187 13.4726 11.5446 12.3337 11.6483V9.97084C12.9511 9.88241 13.5239 9.59836 13.9681 9.16039C14.4122 8.72242 14.7042 8.15361 14.8013 7.53746C14.8983 6.9213 14.7953 6.29026 14.5073 5.73697C14.2193 5.18368 13.7615 4.7373 13.2012 4.46334L13.6637 2.84418Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={20}
                  height={16}
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49967 4.28251L12.4997 15.9492L15.5488 8.83334H19.1663V7.16668H14.4505L12.4997 11.7175L7.49967 0.0508423L4.45051 7.16668H0.833008V8.83334H5.54884L7.49967 4.28251Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16699 0.708338V2.385C4.87866 2.795 2.33366 5.6 2.33366 9C2.33366 12.6817 5.31866 15.6667 9.00033 15.6667C10.5412 15.6667 11.9587 15.1442 13.0887 14.2667L14.2745 15.4525C12.8378 16.6275 11.0003 17.3333 9.00033 17.3333C4.39783 17.3333 0.666992 13.6025 0.666992 9C0.666992 4.67917 3.95616 1.12584 8.16699 0.708338ZM17.292 9.83334C17.1253 11.5092 16.4637 13.0392 15.4528 14.2733L14.267 13.0883C14.9837 12.1658 15.4637 11.0508 15.6153 9.83334H17.2928H17.292ZM9.83533 0.708338C13.772 1.09917 16.902 4.23 17.2937 8.16667H15.6162C15.2403 5.15167 12.8503 2.76167 9.83533 2.385V0.707504V0.708338Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.07617 16.3533L0.667002 17.3333L1.647 12.9242C1.00161 11.717 0.664941 10.3689 0.667002 8.99999C0.667002 4.39749 4.39784 0.666656 9.00034 0.666656C13.6028 0.666656 17.3337 4.39749 17.3337 8.99999C17.3337 13.6025 13.6028 17.3333 9.00034 17.3333C7.63146 17.3354 6.28335 16.9987 5.07617 16.3533ZM5.31784 14.5925L5.862 14.8842C6.82746 15.4001 7.90566 15.6689 9.00034 15.6667C10.3189 15.6667 11.6078 15.2757 12.7041 14.5431C13.8005 13.8106 14.6549 12.7694 15.1595 11.5512C15.6641 10.333 15.7961 8.99259 15.5389 7.69939C15.2817 6.40618 14.6467 5.2183 13.7144 4.28594C12.782 3.35359 11.5941 2.71866 10.3009 2.46142C9.00773 2.20419 7.66729 2.33621 6.44911 2.84079C5.23094 3.34538 4.18975 4.19986 3.4572 5.29619C2.72466 6.39252 2.33367 7.68145 2.33367 8.99999C2.33367 10.1117 2.6045 11.1817 3.117 12.1383L3.40784 12.6825L2.862 15.1383L5.31784 14.5925Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={16}
                  height={19}
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7355 12.6667L15.7372 13.2675C15.799 13.3045 15.8502 13.3569 15.8857 13.4195C15.9212 13.4822 15.9399 13.553 15.9399 13.625C15.9399 13.697 15.9212 13.7678 15.8857 13.8305C15.8502 13.8931 15.799 13.9455 15.7372 13.9825L8.42888 18.3675C8.29927 18.4454 8.15092 18.4865 7.99972 18.4865C7.84851 18.4865 7.70016 18.4454 7.57055 18.3675L0.262216 13.9825C0.200421 13.9455 0.149271 13.8931 0.113755 13.8305C0.0782389 13.7678 0.0595703 13.697 0.0595703 13.625C0.0595703 13.553 0.0782389 13.4822 0.113755 13.4195C0.149271 13.3569 0.200421 13.3045 0.262216 13.2675L1.26388 12.6667L7.99972 16.7083L14.7355 12.6667ZM14.7355 8.75001L15.7372 9.35084C15.799 9.38783 15.8502 9.44022 15.8857 9.50287C15.9212 9.56553 15.9399 9.63632 15.9399 9.70834C15.9399 9.78036 15.9212 9.85115 15.8857 9.91381C15.8502 9.97647 15.799 10.0288 15.7372 10.0658L7.99972 14.7083L0.262216 10.0658C0.200421 10.0288 0.149271 9.97647 0.113755 9.91381C0.0782389 9.85115 0.0595703 9.78036 0.0595703 9.70834C0.0595703 9.63632 0.0782389 9.56553 0.113755 9.50287C0.149271 9.44022 0.200421 9.38783 0.262216 9.35084L1.26388 8.75001L7.99972 12.7917L14.7355 8.75001ZM8.42805 1.09084L15.7372 5.47584C15.799 5.51284 15.8502 5.56521 15.8857 5.62787C15.9212 5.69053 15.9399 5.76132 15.9399 5.83334C15.9399 5.90536 15.9212 5.97615 15.8857 6.03881C15.8502 6.10147 15.799 6.15385 15.7372 6.19084L7.99972 10.8333L0.262216 6.19084C0.200421 6.15385 0.149271 6.10147 0.113755 6.03881C0.0782389 5.97615 0.0595703 5.90536 0.0595703 5.83334C0.0595703 5.76132 0.0782389 5.69053 0.113755 5.62787C0.149271 5.56521 0.200421 5.51284 0.262216 5.47584L7.57055 1.09084C7.70016 1.01297 7.84851 0.971832 7.99972 0.971832C8.15092 0.971832 8.29927 1.01297 8.42888 1.09084H8.42805ZM7.99972 2.77667L2.90555 5.83334L7.99972 8.89001L13.0939 5.83334L7.99972 2.77667Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                className="cursor-pointer w-9 h-9 focus:bg-indigo-100 text-gray-600 focus:text-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded flex items-center justify-center mb-4"
                onClick={() => setsidebar(true)}
              >
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3337 15.6667H0.666992V14H1.50033V8.19249C1.50033 4.03582 4.85866 0.666656 9.00033 0.666656C13.142 0.666656 16.5003 4.03582 16.5003 8.19249V14H17.3337V15.6667ZM3.16699 14H14.8337V8.19249C14.8337 4.95666 12.222 2.33332 9.00033 2.33332C5.77866 2.33332 3.16699 4.95666 3.16699 8.19249V14ZM6.91699 16.5H11.0837C11.0837 17.0525 10.8642 17.5824 10.4735 17.9731C10.0828 18.3638 9.55286 18.5833 9.00033 18.5833C8.44779 18.5833 7.91789 18.3638 7.52719 17.9731C7.13649 17.5824 6.91699 17.0525 6.91699 16.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          {sidebar && (
            <div className="flex justify-start flex-col transition duration-150 ease-in-out bg-white">
              <div className="flex items-center py-6 pr-12 pl-4 border-b cursor-pointer">
                <svg
                  onClick={() => setsidebar(false)}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.636L15.778 7.05L10.828 12Z"
                    fill="#1F2937"
                  />
                </svg>
                <span className="pl-2 text-base font-medium leading-none text-gray-800">
                  Overview
                </span>
              </div>
              <ul aria-orientation="vertical" className="rounded py-7 mx-4">
                <li className="cursor-pointer bg-indigo-100 py-1 rounded">
                  <span className="text-sm pl-2 py-2 font-medium leading-none text-indigo-700">
                    Campaigns
                  </span>
                </li>
                <li className="cursor-pointer py-1 mt-5">
                  <span className="text-sm pl-2 py-2 font-medium leading-none text-gray-600">
                    Statistics
                  </span>
                </li>
                <li className="cursor-pointer py-1 mt-5">
                  <span className="text-sm pl-2 py-2 font-medium leading-none text-gray-600">
                    Favourites
                  </span>
                </li>
                <li className="cursor-pointer py-1 mt-5">
                  <span className="text-sm pl-2 py-2 font-medium leading-none text-gray-600">
                    Workflows
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-full" />
    </div>
  );
}

export default MyApp;
