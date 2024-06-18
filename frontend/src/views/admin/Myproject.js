import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AddProject from "../../components/AddProject/AddProject";
export default function Myproject() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.preventDefault(); // Mencegah Link diaktifkan
    e.stopPropagation(); // Menghentikan propagasi klik ke Link
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setDropdownOpen(false);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Menghentikan propagasi klik ke Link
    navigate("/admin/myproject");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  const openAddProject = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-start">My Projects</h1>
        <p className="pt-2 text-blueGray-400 text-start">Free plan</p>

        <div className="mt-6 flex items-center">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search projects"
              className="w-full border border-blueGray-400 rounded py-2 px-3"
            />
          </div>

          <div className="ml-4">
            <button
              onClick={openAddProject}
              className="p-3 text-blueGray-400 focus:outline-none"
            >
              <i className="fa fa-plus"></i>
            </button>
            {/* Modal AddProject */}
            {showAddProjectModal && (
              <AddProject onClose={closeAddProjectModal} />
            )}
          </div>
        </div>
        <hr className="my-4 md:min-w-full" />
        <p className="text-gray-700">1 projects</p>
        <div className="mt-6">
          <div className="hover:bg-gray-200">
            <Link
              to="/admin/detailProject"
              className="relative mt-2 p-4 flex items-center justify-between w-full text-left border-b "
            >
              <div className="flex items-center text-blueGray-500">
                <i className="fa fa-hashtag mr-2"></i>
                My work
              </div>
              <div className="text-gray-400 hover:text-gray-600">
                <button onClick={toggleDropdown} className="focus:outline-none">
                  <i className="fa fa-ellipsis-h"></i>
                </button>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-8 w-48 bg-white border rounded shadow-lg z-10">
                  <button
                    onClick={handleDelete}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
