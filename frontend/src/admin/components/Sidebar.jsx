// src/admin/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Admin Panel</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-700 text-orange-500' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/manga"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-700 text-orange-500' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                }
              >
                Manga
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-700 text-orange-500' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/moderation"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg ${isActive ? 'bg-gray-700 text-orange-500' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                }
              >
                Content Moderation
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
