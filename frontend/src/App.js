import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// layouts
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts
import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
import Index from "./views/Index.js";

function App() {
  return (
    <Routes>
      {/* add routes with layouts */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/auth/*" element={<Auth />} />
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Landing />} />
      {/* add redirect for first page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
