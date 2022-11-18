import { useState } from "react";
import {  Link } from "react-router-dom";

import host from "../gamesLogo/host.jpg";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-black shadow-xl">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              <Link to={"/"}>
                <img src={host} alt="host logo" className="w-20 h-20" />
              </Link>
              <div className="md:hidden flex items-center justify-center gap-4">
                <Link to={"/cart"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-shopping-cart w-8 h-8"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </Link>
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white hover:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white hover:text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
                <li className="text-white font-medium hover:text-indigo-200 text-center mx-4">
                  <Link to={"/games"}>الالعاب</Link>
                </li>
                <li className="text-white font-medium hover:text-indigo-200 text-center">
                  <Link to={"/phone"}>الهواتف والاكسسوارات</Link>
                </li>
                <li className="text-white font-medium hover:text-indigo-200 text-center">
                  <Link to={"/computer_parts"}>الكومبيوتر وملحقاته</Link>
                </li>
                <li className="text-white font-medium hover:text-indigo-200 text-center">
                  <Link to={"/conect"}>الدعم الفني</Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden">
                <Link
                  to={"/sign_in"}
                  className="inline-block font-medium w-full  py-2 text-center text-white border border-solid hover:border-gray-300 hover:text-gray-300 rounded-md shadow "
                >
                  الدخول
                </Link>
                <Link
                  to={"/sign_up"}
                  className="inline-block font-medium w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-300"
                >
                  التسجيل
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-1 md:inline-flex">
            <Link
              to={"/sign_in"}
              className="px-4 py-2 mx-2 font-bold text-white border border-solid hover:border-gray-300 hover:text-gray-300 rounded-md shadow"
            >
              الدخول{" "}
            </Link>
            <Link
              to={"/sign_up"}
              className="px-5 py-2 font-bold text-gray-800 bg-white rounded-md shadow hover:bg-gray-300"
            >
              التسجيل
            </Link>
          </div>
          <div className="hidden space-x-1 md:inline-flex">
            <Link to={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart w-8 h-8"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    
    </>
  );
}
