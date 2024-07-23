/**
@CreatedBy    : Yashwanth S
@CreatedTime  : July 21 2024
@ModifiedBy   : Yashwanth S
@ModifiedTime : July 21 2024
@Description  : This file handles ui for home page.
**/

import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Weather from '../components/Weather.jsx';
import News from '../components/navbar.jsx';


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
