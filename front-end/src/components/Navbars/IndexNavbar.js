/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import GLMendatar from "../../assets/img/GL-mendatar.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img
                src={GLMendatar}
                alt="GL Mendatar"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              />
            </Link>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  to="/auth/login"
                  className="active:bg-blue-600 text-l font-base px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 "
                >
                  Log in
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/auth/register"
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-l font-base px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  Try Now <i className="fas fa-solid fa-arrow-right"></i>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/admin/dashboard"
                  className="active:bg-blue-600 text-l font-base w-10 h-10 flex items-center justify-center rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  <i className="fas fa-solid fa-house-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
