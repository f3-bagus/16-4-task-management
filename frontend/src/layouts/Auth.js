import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "../components/Navbars/AuthNavbar.js";
// import FooterSmall from "../components/Footers/FooterSmall.js";

// views
import Login from "../views/auth/Login.js";
import Register from "../views/auth/Register.js";
import VerifyAcc from "../views/auth/VerifyAcc.js";
import SuccesVerif from "../views/auth/SuccesVerif.js";
export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${
                require("../assets/img/register_bg_2.png").default
              })`,
            }}
          ></div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-account" element={<VerifyAcc />} />
            <Route path="/succesverif" element={<SuccesVerif />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </section>
      </main>
    </>
  );
}
