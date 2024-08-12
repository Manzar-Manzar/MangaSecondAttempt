import React, { useState } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/manga/login', {email, password})
    .then(result => {
      console.log(result);
      if(result.data ==="Success") 
      navigate('/'); // Redirect to a protected route after successful login
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account? <a href="/getStarted" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
