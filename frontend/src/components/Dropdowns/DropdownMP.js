import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddProject from "../AddProject/AddProject";
export default function DropdownMP() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  const openAddProject = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
  };
  return (
    <div className="relative">
      <div className="flex items-center">
        <Link
          to="/admin/myproject"
          className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block focus:outline-none flex items-center"
        >
          My Project
        </Link>
        <div className="absolute right-0">
          <button
            onClick={openAddProject}
            className="text-blueGray-400 hover:text-blueGray-500 focus:outline-none px-2"
          >
            <i className="fas fa-solid fa-plus"></i>
          </button>
          {/* Modal AddProject */}
          {showAddProjectModal && <AddProject onClose={closeAddProjectModal} />}
          <button
            onClick={toggleDropdown}
            className="text-blueGray-400 hover:text-blueGray-500 focus:outline-none transition-transform duration-800 ease-out-in"
          >
            <i
              className={`fas fa-solid ${
                dropdownOpen ? "fa-chevron-down" : "fa-chevron-right"
              }`}
            ></i>
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="mt-3 w-48 bg-white rounded-md shadow-xl z-20">
          <Link
            to="/admin/detailproject"
            className="block px-4 py-2 text-blueGray-700 hover:text-blueGray-500"
          >
            <i className="fas fa-solid fa-hashtag text-blueGray-400 mr-2 text-sm"></i>{" "}
            My work
          </Link>
          {/* <Link
            to="/auth/register"
            className="block px-4 py-2 text-blueGray-700 hover:text-blueGray-500"
          >
            <i className="fas fa-solid fa-hashtag text-blueGray-400 mr-2 text-sm"></i>{" "}
            Register
          </Link> */}
        </div>
      )}
    </div>
  );
}
