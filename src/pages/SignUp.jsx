import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="px-6 py-10 mt-24">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            تسجيل حساب جديد
          </div>

          <div className="mt-10">
            <form action="#">
              <div className="flex flex-col mb-6">
                <label
                  for="email"
                  className="ml-auto mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  المعرف
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <input
                    id="name"
                    type="text"
                    name="namme"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="المعرف"
                  />
                </div>
                {/* <p className="mt-1 text-sm text-red-600">
                  We can't find a user with that e-mail address.
                </p> */}
              </div>
              <div className="flex flex-col mb-6">
                <label
                  for="email"
                  className="ml-auto mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  الايميل
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="البريد الالكتروني"
                  />
                </div>
                {/* <p className="mt-1 text-sm text-red-600">
                  We can't find a user with that e-mail address.
                </p> */}
              </div>
              <div className="flex flex-col mb-6">
                <label
                  for="password"
                  className="ml-auto mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  الرمز
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="الرمز الالكتروني"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-gray-600 hover:bg-gray-800 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">ألتسجيل</span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to={"/sign_in"}
              className="inline-flex items-center font-bold text-blue-500 underline hover:text-blue-700 text-xs text-center"
            >
              <span className="ml-2">لديك حساب بالفعل ؟ الدخول</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
