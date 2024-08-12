import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import browseManga from "../../../../../backend/src/data/browseManga.json"
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';

function Browse() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredManga = browseManga.filter(manga =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-700 px-4 py-8 min-h-screen">
      <div className="mb-8 flex justify-center">
        <form onSubmit={handleSearch} className="w-full max-w-md flex">
          <input
            type="text"
            placeholder="Search for manga..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-500 rounded-l-lg shadow-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-r-lg flex items-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Manga List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredManga.map((manga) => (
          <div key={manga.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Link to = '/chapter'>
            <img src={getImageUrl(manga.imageSrc)} alt={manga.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">{manga.title}</h2>
              <p className="text-gray-400">{manga.description}</p>
            </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Browse;
