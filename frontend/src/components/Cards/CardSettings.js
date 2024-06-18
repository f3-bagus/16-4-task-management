import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Blank from "../../assets/img/blank.png";
import axios from "axios";
export default function CardSettings() {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
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
        setEmail(response.data.user.email); // tambahkan baris ini
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  const [
    isEditingUsername,
    setIsEditingUsername,
    isEditingEmail,
    setIsEditingEmail,
  ] = useState(false);
  const [username, setUsername] = useState("lucky.jesse");
  const [profilePic, setProfilePic] = useState(Blank);

  const handleUsernameEdit = () => {
    setIsEditingUsername(!isEditingUsername);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(!isEditingEmail);
  };

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
                    src={profilePic}
                    alt="Profile"
                    className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                  />
                  <label
                    htmlFor="profilePicUpload"
                    className="edit-pic absolute bottom-0 right-0 bg-gray-600 text-white rounded-full p-2 cursor-pointer"
                  >
                    <FontAwesomeIcon color="black" icon={faEdit} />
                  </label>
                  <input
                    type="file"
                    id="profilePicUpload"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </div>

                <div className="w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-username"
                  ></label>
                  <div className="flex">
                    <input
                      type="text"
                      id="grid-username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={username}
                      onChange={handleUsernameChange}
                      disabled={!isEditingUsername}
                    />
                    <button
                      type="button"
                      onClick={handleUsernameEdit}
                      className="ml-2 px-3 py-1 text-sm bg-blueGray-600 text-white rounded"
                    >
                      {isEditingUsername ? "Save" : "Edit"}
                    </button>
                  </div>
                </div>

                <div className="w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  ></label>
                  <input
                    type="email"
                    id="grid-email"
                    value={email}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="jesse@example.com"
                    disabled={!isEditingEmail}
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
                      to="/auth/ChangePassword"
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
                      to="/auth/ChangeEmail"
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
