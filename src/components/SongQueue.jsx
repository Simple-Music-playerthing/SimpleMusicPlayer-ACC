import React from 'react';
// Import your song data
import { songs } from './songs.js'; 

// We can remove the sample data from the previous version.
// The component now expects the 'songs' array to be passed as a prop,
// but we'll use the imported 'songs' as a default fallback.

const SongQueue = ({ songsProp = songs, isVisible, closeQueue }) => {
  if (!isVisible) return null;

  return (
    // Overlay backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal / Window */}
      <div className="bg-gray-800 text-white w-full max-w-md h-3/4 md:h-2/3 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-2xl font-bold text-indigo-400">Current Queue</h2>
          <button
            onClick={closeQueue}
            className="text-gray-400 hover:text-white p-2 rounded-full transition duration-150"
            aria-label="Close Queue"
          >
            {/* Close Icon (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Song List */}
        <div className="flex-grow overflow-y-auto p-2 space-y-1">
          {songsProp.length > 0 ? (
            songsProp.map((song, index) => (
              <div
                // Use index as a key if the data doesn't have a unique ID, 
                // but ideally, use a unique ID for stability.
                key={index} 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition duration-150 group"
              >
                
                {/* Cover Art */}
                <img 
                  src={song.cover} 
                  alt={`${song.title} cover`} 
                  className="w-10 h-10 object-cover rounded mr-3 flex-shrink-0"
                  // Optional: Add a fallback if the image doesn't load
                  onError={(e) => { e.target.onerror = null; e.target.src = '/default-cover.png' }}
                />

                {/* Song Info */}
                <div className="flex flex-col min-w-0 flex-grow">
                  <span className="font-medium truncate text-base">{song.title}</span>
                  <span className="text-sm text-gray-400 truncate">{song.artist}</span>
                </div>
                
                {/* You may want to calculate/display duration later */}
                {/* <span className="text-sm text-gray-500 ml-4">Duration</span> */}
              </div>
            ))
          ) : (
            <p className="p-4 text-center text-gray-400">Your queue is empty!</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SongQueue;