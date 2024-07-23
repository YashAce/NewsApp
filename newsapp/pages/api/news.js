/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles news api.
**/

import axios from 'axios';

export default async function handler(req, res) {
  const { category } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

  try {
    console.log("newssss",category)
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
    console.log("news",response.data.articles)
    res.status(200).json(response.data.articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
