import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function GetStarted() {
  const [name, setName]= useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    axios.post('/manga/register', {name, email, password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))
  };
  

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={registerUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white ${loading ? 'bg-gray-500' : 'bg-orange-700 hover:bg-orange-800'} focus:ring-4 focus:ring-orange-300 rounded-lg`}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
