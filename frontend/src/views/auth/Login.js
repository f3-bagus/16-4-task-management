import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        // Simpan token di localStorage atau state management
        localStorage.setItem("token", response.data.token);
        // Redirect ke halaman dashboard atau halaman yang diinginkan
        navigate("/admin/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">Sign in</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleLogin}>
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="email"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="password"
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-xs italic mb-4">
                    {error}
                  </div>
                )}

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative justify-between">
            <div className="w-full flex justify-between">
              <Link
                to="/auth/register"
                className="text-blueGray-200 text-start"
              >
                <small>Create new account</small>
              </Link>
              <Link
                to="/auth/ForgotPassword"
                className="text-blueGray-200 text-end"
              >
                <small>Forgot password?</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
