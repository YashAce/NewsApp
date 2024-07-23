/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles rendering logics for news component.
**/

import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NewsWidget from './newswidget.jsx';

export default function News() {
  const [category, setCategory] = useState('technology');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/news?category=${category}`);
      const filteredArticles = response.data.filter(article => article.urlToImage);
      const sortedArticles = [
        ...filteredArticles,
        ...response.data.filter(article => !article.urlToImage)
      ];
      setArticles(sortedArticles);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch news data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews() //Load the newsWidget initially
  }, []);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-2 pt-0">
      <div className="w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl text-white mb-2">News</h1>
        <div className="flex space-x-4 mb-2">
          <select
            className="p-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
          <button
            onClick={fetchNews}
            className="p-1 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
        {loading && <p className="text-white text-xl">Loading...</p>}
        {!loading && articles.length === 0 && (
          <p className="text-white text-xl">Enter a category to get the latest news</p>
        )}
      </div>
      <div className="flex items-center justify-center w-full p-2">
        {!loading && articles.length > 0 && <NewsWidget articles={articles} />}
      </div>
    </div>
  );
}
