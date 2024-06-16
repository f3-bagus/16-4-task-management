import { useState, React } from "react";
import { Link } from "react-router-dom";

export default function Myproject() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-start">My Projects</h1>
        <p className="pt-2 text-blueGray-400 text-start">Free plan</p>

        <div className="mt-6 flex items-center ">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search projects"
              className="w-full border border-blueGray-400 rounded py-2 px-3"
            />
          </div>

          <div className="ml-4">
            <button className="p-3 text-blueGray-400">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <hr className="my-4 md:min-w-full" />

        <div className="mt-6">
          <p className="text-gray-700">2 projects</p>
          <div className="mt-2 p-4 bg-gray-50 flex items-center justify-between">
            <div>
              <i className="fa fa-hashtag text-gray-400 mr-2"></i>
              My work <i className="fa fa-bullseye text-red-500"></i>
            </div>
            <div className="text-gray-400 hover:text-gray-600">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="mt-2 p-4 bg-gray-50 flex items-center justify-between">
            <div>
              <i className="fa fa-hashtag text-gray-400 mr-2"></i>
              Home <i className="fa fa-home text-green-500"></i>
            </div>
            <div className="text-gray-400 hover:text-gray-600">
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
