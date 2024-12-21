import React, { useState } from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';

const Avatar = () => {
  const { signOut } = useClerk(); // Clerk's signOut method
  const { user } = useUser(); // Get the current user
  const [isOpen, setIsOpen] = useState(false); // Menu toggle state

  return (
    <div className="relative">
        
        <div className="relative">
          {/* Avatar Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={user?.imageUrl || 'https://via.placeholder.com/40'}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium text-white">{user?.firstName}</span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10" onMouseLeave={()=>setIsOpen(false)}>
              <a
                href="/my-job"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                My Job
              </a>
              <button
                onClick={() => signOut()}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
    </div>
  );
};

export default Avatar;
