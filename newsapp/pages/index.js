/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles ui for home page.
**/

import { useEffect, useState } from 'react';
import NavBar from '../components/navbar.jsx';
import Weather from '../components/weather.jsx';
import News from '../components/news.jsx';


export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <div>
        <Weather />
        <News />
      </div>
    </div>

  );
}
