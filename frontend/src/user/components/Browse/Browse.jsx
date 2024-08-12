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
