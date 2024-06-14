import React from 'react';

export default function Footer() {
  return (
    <footer className="landing-footer py-2 text-center bg-blue-100 border-t border-blue-300">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <img src="/Assets/Logo.png" alt="GoalTask Logo" className="h-8 mr-2" />
        <p className="text-gray-500 mt-2">&copy; 2024 GoalTask. All rights reserved.</p>
      </div>
    </footer>
  );
}
