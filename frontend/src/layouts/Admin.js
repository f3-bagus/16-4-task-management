import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views
import Dashboard from "../views/admin/Dashboard.js";
import Maps from "../views/admin/Maps.js";
import Today from "../views/admin/Today.js";
import Upcoming from "../views/admin/Upcoming.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <HeaderStats />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/today" element={<Today />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
