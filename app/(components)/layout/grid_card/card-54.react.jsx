import React from "react";
export default function IndexPage() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="max-w-md px-8 py-8 bg-gradient-to-tl from-indigo-500 to-purple-500 rounded-lg">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl font-semibold leading-tight text-white">
              AlphaBank
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 9.99975C16 13.6369 14.605 17.0796 12.071 19.6958C11.688 20.0916 11.054 20.1025 10.657 19.7207C10.454 19.5253 10.352 19.264 10.352 19.0038C10.352 18.7546 10.445 18.5043 10.633 18.3109C12.804 16.0676 14 13.1164 14 9.99975C14 6.88307 12.804 3.9319 10.633 1.68861C10.248 1.29478 10.259 0.662674 10.657 0.278822C11.054 -0.102039 11.688 -0.0920689 12.071 0.304744C14.605 2.92092 16 6.36362 16 9.99975ZM11 10.0002C11 7.57944 9.999 5.22648 8.252 3.54451C7.854 3.16365 7.221 3.17362 6.838 3.57043C6.454 3.96525 6.465 4.59835 6.862 4.98021C8.221 6.2873 9 8.11683 9 10.0002C9 11.8836 8.221 13.7131 6.862 15.0202C6.659 15.2156 6.557 15.4768 6.557 15.738C6.557 15.9873 6.65 16.2375 6.838 16.43C7.221 16.8268 7.854 16.8368 8.252 16.4559C9.999 14.7739 11 12.421 11 10.0002ZM4.597 6.53723C5.501 7.47143 6 8.70076 6 9.99987C6 11.299 5.501 12.5283 4.597 13.4625C4.213 13.8583 3.58 13.8693 3.183 13.4874C2.979 13.292 2.877 13.0308 2.877 12.7696C2.877 12.5203 2.971 12.2701 3.158 12.0777C4.244 10.956 4.244 9.04373 3.158 7.92209C2.774 7.52826 2.785 6.89615 3.183 6.5123C3.58 6.13044 4.213 6.14141 4.597 6.53723ZM1 9.0033C1.552 9.0033 2 9.44897 2 10.0003C2 10.5517 1.552 10.9973 1 10.9973C0.448 10.9973 0 10.5517 0 10.0003C0 9.44897 0.448 9.0033 1 9.0033Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-base font-medium leading-3 text-white mt-16">
            Henry Richardson
          </p>
          <p className="text-2xl font-semibold leading-4 text-white mt-4">
            4567 **** **** 4501
          </p>
          <div className="flex items-center mt-10">
            <p className="text-xl leading-tight text-white">
              04&nbsp;/&nbsp;23
            </p>
            <div className="flex items-center pl-24 sm:pl-48">
              <div className="flex items-center pr-2">
                <div className="w-5 h-5 bg-red-600 rounded-full z-10" />
                <div className="w-5 h-5 bg-yellow-500 -ml-2 z-0 rounded-full" />
              </div>
              <p className="text-sm font-semibold leading-3 text-white">
                mastercard
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
