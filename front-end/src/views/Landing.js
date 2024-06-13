import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="landing-main">
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <img src="/Assets/Logo.png" alt="GoalTask Logo" className="main-logo mx-auto" />
        <p className="text-xl mt-2">The world's #1 task management app.</p>
      </div>
      <div className="container mx-auto h-15vh px-4 text-center mt-6">
        <h2 className="text-4xl font-bold mt-10">
          Organize and ease your tasks.
        </h2>
        <p className="text-lg mt-2">
          Track your progress and stay on top of your goals.
        </p>
        <Link to="/register" className="btn btn-primary mt-6">
          Try Now
        </Link>
      </div>
    </div>
        
      </main>
      <Footer />
    </div>
  );
}
