import React from 'react';

interface City {
  id: string;
  name: string;
  country: string;
  region: string;
  description?: string;
}

interface Props {
  city: City;
  onClose: () => void;
  onAddToWishlist: (city: City) => void;
}

//had chatgpt add tailwind because i don't got that kinda time
export const CityInfo: React.FC<Props> = ({ city, onClose, onAddToWishlist }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{city.name}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-sm"> close</button>
      </div>
      <p className="text-gray-600 mb-2">{city.region}, {city.country}</p>
      {city.description && (
        <p className="text-gray-700 mb-4">{city.description}</p>
      )}
      <button
        onClick={() => {
          onAddToWishlist(city);
          onClose();
        }}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Add to Wishlist
      </button>
    </div>
  );
};
