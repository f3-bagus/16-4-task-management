import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// components
// import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from "../components/Headers/HeaderStats";
import FooterAdmin from "../components/Footers/FooterAdmin";

// views
import Dashboard from "../views/admin/Dashboard";
import Maps from "../views/admin/Maps";
import Today from "../views/admin/Today";
import Upcoming from "../views/admin/Upcoming";
import AkunSetting from "../views/admin/AkunSetting.js";
import Myproject from "../views/admin/Myproject.js";

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
            <Route path="/setting" element={<AkunSetting />} />
            <Route path="/myproject" element={<Myproject />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
