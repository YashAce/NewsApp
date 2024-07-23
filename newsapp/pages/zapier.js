/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles rendering logics for Zapier AI component.
**/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function ZapierAI() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const token = parsedUser.token;

      axios.post('/api/auth/verify', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(parsedUser);
      })
      .catch(error => {
        console.error('Token verification failed:', error);
        localStorage.removeItem('user');
      });
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.onload = () => {
      console.log('Zapier Interfaces script loaded');
    };
    script.onerror = () => {
      console.error('Error loading Zapier Interfaces script');
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-purple-600 p-4">
        <div className="w-4/5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 text-center mt-8">
          <h1 className="text-4xl text-white mb-6">Access Restricted</h1>
          <p className="text-white text-xl mb-6">You must be logged in to access this page.</p>
          <Link href="/" legacyBehavior>
            <a className="text-lg text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-700">Go Back Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-purple-600 p-4">
      <div className="w-4/5 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 text-center mt-8">
        <h1 className="text-4xl text-white mb-6">Zapier AI</h1>
        <Link href="/" legacyBehavior>
        <a className="absolute top-4 right-4 text-lg text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-700">Home</a>
        </Link>
        <div className="w-full mt-4">
          <zapier-interfaces-page-embed 
            page-id="clyx2k4pf00fetzdv26ii4rsv" 
            no-background="false" 
            style={{ maxWidth: '900px', height: '500px', margin: 'auto' }}>
          </zapier-interfaces-page-embed>
        </div>
        
      </div>
    </div>
  );
}
