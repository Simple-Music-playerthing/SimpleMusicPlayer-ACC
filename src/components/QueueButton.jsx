import React from 'react';

// You'll pass a function to toggle the queue's visibility as a prop
const QueueButton = ({ toggleQueueVisibility }) => {
  return (
    <button
      onClick={toggleQueueVisibility}
      className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
      aria-label="View Queue"
    >
      {/* Icon for the queue, you might use a library like Heroicons */}
      <svg
        xmlns="hamburger.svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
      {/* Optional text: <span className="ml-2">Queue</span> */}
    </button>
  );
};

export default QueueButton;