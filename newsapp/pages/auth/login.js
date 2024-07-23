/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles ui for login page.
**/

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      router.push('/');
    } catch (error) {
      console.error('Failed to login:', error);
      setError('Invalid email or password')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
        <h1 className="text-4xl text-white mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-3 mb-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-3 mb-4 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-3 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
