import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

import Login from "../views/auth/Login.js";
import Register from "../views/auth/Register.js";

export default function Auth() {
  return (
    <Router>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </Router>
  );
}
