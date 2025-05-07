"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { CityInfo } from './CityInfo';

Amplify.configure(outputs);

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

  const handleAddToWishlist = (city: City) => {
    if (!wishlist.some(c => c.id === city.id)) {
      setWishlist([...wishlist, city]);
    }
  };

  return (
    <Authenticator>
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Best Cities to Visit</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div
            key={city.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer border"
            onClick={() => setSelectedCity(city)}
          >
            <h2 className="text-xl font-semibold text-gray-700">{city.name}</h2>
            <p className="text-gray-500">{city.region}, {city.country}</p>
            <button className="mt-2 text-blue-600 hover:underline">View City</button>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <CityInfo
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
              onAddToWishlist={handleAddToWishlist}
            />
          </div>
        </div>
      )}
    </div>
    </Authenticator>
  );
}


