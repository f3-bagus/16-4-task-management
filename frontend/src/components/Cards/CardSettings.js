import React from "react";
import { Link } from "react-router-dom";
import Blank from "../../assets/img/blank.png";
// components

export default function CardSettings() {
  return (
    <>
      <div className="min-h-screen relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Settings</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4 flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={Blank}
                    alt="GoalTask Logo"
                    className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                  />
                </div>
                <div className="w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="grid-username"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="lucky.jesse"
                  />
                </div>
                <div className="w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="grid-email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="jesse@example.com"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-20 mb-6 border-b-2border-blueGray-300" />

            <div className="flex flex-wrap justify-end">



              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    {/* Menggunakan Link untuk mengarahkan ke rute "/change-password" */}
                    <Link
                      to="/auth/OtpChangePassword"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>


              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    {/* Menggunakan Link untuk mengarahkan ke rute "/change-password" */}
                    <Link
                      to="/auth/OtpChangeEmail"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      Change Email
                    </Link>
                  </div>
                </div>
              </div>

              


            </div>
          </form>
        </div>
      </div>
    </>
  );
}
