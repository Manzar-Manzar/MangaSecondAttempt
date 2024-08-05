import React, { useState } from 'react';

const Translator = () => {
  // State to handle form input
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [translations, setTranslations] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (originalText && translatedText) {
      setTranslations([...translations, { original: originalText, translated: translatedText }]);
      setOriginalText('');
      setTranslatedText('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Submit Translation</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="originalText" className="block text-sm font-medium text-gray-700">Original Text</label>
          <input
            type="text"
            id="originalText"
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="translatedText" className="block text-sm font-medium text-gray-700">Translated Text</label>
          <input
            type="text"
            id="translatedText"
            value={translatedText}
            onChange={(e) => setTranslatedText(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Submit
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Available Translations</h2>
        <ul className="list-disc pl-5">
          {translations.map((translation, index) => (
            <li key={index} className="mb-2">
              <p className="font-medium text-gray-800">Original: <span className="font-normal text-gray-600">{translation.original}</span></p>
              <p className="font-medium text-gray-800">Translated: <span className="font-normal text-gray-600">{translation.translated}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Translator;
