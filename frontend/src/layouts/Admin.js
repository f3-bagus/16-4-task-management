import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.js"; // Adjust the path as needed

// components
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
import History from "../views/admin/History.js";
import DetailProject from "../components/DetailProject/DetailProject.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <HeaderStats />

      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/maps"
              element={
                <PrivateRoute>
                  <Maps />
                </PrivateRoute>
              }
            />
            <Route
              path="/today"
              element={
                <PrivateRoute>
                  <Today />
                </PrivateRoute>
              }
            />
            <Route
              path="/upcoming"
              element={
                <PrivateRoute>
                  <Upcoming />
                </PrivateRoute>
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <PrivateRoute>
                  <AkunSetting />
                </PrivateRoute>
              }
            />
            <Route
              path="/myproject"
              element={
                <PrivateRoute>
                  <Myproject />
                </PrivateRoute>
              }
            />
            <Route
              path="/detailproject"
              element={
                <PrivateRoute>
                  <DetailProject />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
