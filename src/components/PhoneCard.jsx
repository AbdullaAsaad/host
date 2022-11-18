import React from "react";

export default function PhoneCard() {
  return (
    <div className="felx w-full">
      <h1 className="justify-center items-center flex w-full text-center text-3xl text-black font-bold">
        الهواتف والاكسسوارات
      </h1>
      <div className="m-auto mt-6 flex h-48 w-[90%] items-center justify-center gap-6 rounded-xl bg-gray-900 bg-opacity-70 text-center text-white  drop-shadow-2xl backdrop-blur-lg backdrop-filter">
        <div className="flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mouse"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="6" y="3" width="12" height="18" rx="4" />
            <line x1="12" y1="7" x2="12" y2="11" />
          </svg>
        </div>
        <div className="flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-keyboard"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <line x1="6" y1="10" x2="6" y2="10" />
            <line x1="10" y1="10" x2="10" y2="10" />
            <line x1="14" y1="10" x2="14" y2="10" />
            <line x1="18" y1="10" x2="18" y2="10" />
            <line x1="6" y1="14" x2="6" y2="14.01" />
            <line x1="18" y1="14" x2="18" y2="14.01" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
        </div>
        <div className="flex h-36 w-64 items-center justify-center rounded-md bg-white hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-device-desktop"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="4" width="18" height="12" rx="1" />
            <line x1="7" y1="20" x2="17" y2="20" />
            <line x1="9" y1="16" x2="9" y2="20" />
            <line x1="15" y1="16" x2="15" y2="20" />
          </svg>
        </div>
      </div>
    </div>
  );
}
