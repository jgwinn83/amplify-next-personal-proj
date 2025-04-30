"use client";

import { useEffect, useState } from 'react';
import { CityInfo } from './CityInfo';

interface City {
  id: string;
  name: string;
  country: string;
  region: string;
  description?: string;
}

export default function CityPage() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [wishlist, setWishlist] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
        const res = await fetch(
          'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&sort=-population',
          {
            headers: {
              'X-RapidAPI-Key': '6f6817ae24msh176a909ecca6f43p1c1850jsn5ca2783844c1',
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
          }
        );
        const json = await res.json();
        const data = json.data.map((city: any) => ({
          id: city.id,
          name: city.name,
          country: city.country,
          region: city.region,
        }));
        setCities(data);
    };

    fetchCities();
  }, []);

  return (
    <div>
      <h1>Best Cities to Visit</h1>
      <div>
        {cities.map((city) => (
          <div key={city.id} onClick={() => setSelectedCity(city)}>
            <h2>{city.name}</h2>
            <p>{city.region}, {city.country}</p>
            <button onClick={}>View City</button>
          </div>
        ))}
      </div>
    </div>
  );
}

