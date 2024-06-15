import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMP() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center ">
        <Link
          to="/admin/myproject"
          className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block focus:outline-none flex items-center"
        >
          My Project
        </Link>
        <div className="absolute right-0">
          <Link
            to="/admin/myproject"
            className="text-blueGray-400 hover:text-blueGray-500 focus:outline-none px-2"
          >
            <i className="fas fa-solid fa-plus"></i> {/* Icon Plus */}
            {/* Icon Chevron Down */}
          </Link>
          <button
            onClick={toggleDropdown}
            className="text-blueGray-400 hover:text-blueGray-500 focus:outline-none "
          >
            <i className="fas fa-solid fa-chevron-down"></i>{" "}
            {/* Icon Chevron Down */}
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="mt-3 w-48 bg-white rounded-md shadow-xl z-20">
          <Link
            to="/auth/login"
            className="block px-4 py-2 text-blueGray-700 hover:text-blueGray-500"
          >
            <i className="fas fa-solid fa-hashtag text-blueGray-400 mr-2 text-sm"></i>{" "}
            Login
          </Link>
          <Link
            to="/auth/register"
            className="block px-4 py-2 text-blueGray-700 hover:text-blueGray-500"
          >
            <i className="fas fa-solid fa-hashtag text-blueGray-400 mr-2 text-sm"></i>{" "}
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
