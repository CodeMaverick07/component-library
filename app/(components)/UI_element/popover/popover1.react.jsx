import React from "react";

function MyApp() {
    return (
        <div className="flex items-center justify-center py-8 px-4">
            <div tabIndex={0} aria-label="popup" className="md:max-w-xl bg-white max-w-sm relative shadow rounded">
                <div className="md:pl-10 pl-6 md:pr-14 pr-6 md:py-12 py-6 md:flex items-center border-b border-gray-200">
                    <div className="md:w-48 w-32 md:h-28 h-20 flex flex-shrink-0">
                        <img src="https://i.ibb.co/N7dTgr7/Group-5.png" alt="image of laptop" className="w-full h-full" />
                    </div>
                    <div className="md:ml-12 md:mt-0 mt-4">
                        <h1 tabIndex={0} role="heading" className="md:text-2xl text-xl font-semibold leading-6 text-gray-800">
                            Change your data
                        </h1>
                        <p tabIndex={0} role="contentinfo" className="pt-2 text-sm leading-5 text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="md:px-6 px-4 md:py-7 py-5 flex md:flex-row relative z-40 flex-col-reverse items-center justify-between">
                    <div className="md:mt-0 mt-8">
                        <svg height={16} viewBox="0 0 112 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={104} cy={8} r="7.5" fill="#F3F4F6" stroke="#E5E7EB" />
                            <circle cx={72} cy={8} r="7.5" fill="#F3F4F6" stroke="#E5E7EB" />
                            <circle cx={40} cy={8} r="7.5" fill="#F3F4F6" stroke="#E5E7EB" />
                            <circle cx={8} cy={8} r={8} fill="#4338CA" />
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <button aria-label="Skip Intro" role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 text-sm leading-none text-gray-600 hover:text-gray-700 py-3 px-4 mr-6 focus:outline-none rounded">
                            Skip intro
                        </button>
                        <button aria-label="Next Step" role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm leading-none text-white bg-indigo-600 hover:bg-indigo-700 rounded py-3 px-4 flex items-center focus:outline-none">
                            Next Step
                            <div className="ml-5 flex items-center justify-center w-4 h-4 hover:bg-indigo-800 bg-indigo-700 rounded-full">
                                <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.97062 6.46876L5.51937 4.2847C5.56044 4.2495 5.59339 4.20583 5.61599 4.15669C5.63859 4.10755 5.65029 4.0541 5.65029 4.00001C5.65029 3.94593 5.63859 3.89248 5.61599 3.84334C5.59339 3.7942 5.56044 3.75053 5.51937 3.71533L2.97062 1.53126C2.72734 1.32283 2.35156 1.49564 2.35156 1.81595V6.1847C2.35156 6.50501 2.72734 6.67783 2.97062 6.46876Z" fill="white" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="absolute inset-0 mt-32 -ml-4 z-0">
                    <svg width={17} height={37} viewBox="0 0 17 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 18.5L16.5 0.746479L16.5 36.2535L0 18.5Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
