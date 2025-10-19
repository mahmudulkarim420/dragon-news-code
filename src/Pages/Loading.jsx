import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-transparent border-t-pink-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-pink-400 rounded-full animate-spin-slow"></div>
        <span className="block text-center text-gray-600 font-medium mt-4 tracking-wide">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
