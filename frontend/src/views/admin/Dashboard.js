import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
        <div className="container mx-auto max-w-md px-4 text-center">
        <img src="/Assets/Logo.png" alt="GoalTask Logo" className="main-logo mx-auto w-1/3" />
        </div>
      </div> 
    </>
  );
}
