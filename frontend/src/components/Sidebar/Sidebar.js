/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GLMendatar from "../../assets/img/GL-mendatar.png";
import AddTask from "../../views/admin/AddTask/AddTask.js"; // Sesuaikan dengan path AddTask.js
import NotificationDropdown from "../Dropdowns/NotificationDropdown.js";
import UserDropdown from "../Dropdowns/UserDropdown.js";
import DropdownMP from "../Dropdowns/DropdownMP.js";
import axios from "axios";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  // AddTask config start
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const openAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const closeAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get(
          "http://localhost:3000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsername(response.data.user.username);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link to="/">
            <img
              src={GLMendatar}
              alt="GL Mendatar"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            />
          </Link>
          {/* User */}

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link to="/">
                    <img
                      src={GLMendatar}
                      alt="GL Mendatar"
                      className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                    />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/* Akun */}

              <li className="py-3 flex-col md:flex-row list-none items-center hidden md:flex">
                <UserDropdown /> <p className="ml-2">{username}</p>
              </li>

              {/* add task */}
              {/* List item untuk tombol "Add Task" */}
              <li className=" flex-col md:flex-row list-none items-center hidden md:flex">
                <button
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 outline-none focus:outline-none"
                  onClick={openAddTaskModal}
                >
                  <i
                    className={
                      "fa-solid fa-plus mr-2 text-sm outline-none focus:outline-none"
                    }
                  ></i>
                  Add Task
                </button>
              </li>

              {/* Modal AddTask */}
              {showAddTaskModal && <AddTask onClose={closeAddTaskModal} />}

              <hr className="my-2 md:min-w-full" />

              {/* Today */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/today") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/today"
                >
                  <i
                    className={
                      "fas fa-clipboard-list mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/today") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Today
                </Link>
              </li>

              {/* Upcoming */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/upcoming") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/upcoming"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/upcoming") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Upcoming
                </Link>
              </li>

              {/* History Task */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/history") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/history"
                >
                  <i
                    className={
                      "fa-solid fa-clock-rotate-left mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/history") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  History Task
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <DropdownMP />
          </div>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <li className="items-center">
              <Link
                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                to="/admin/setting"
              >
                <i className="fas fa-solid fa-gear text-blueGray-400 mr-2 text-sm"></i>{" "}
                Setting
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
