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

export const CityInfo: React.FC<Props> = ({ city, onClose, onAddToWishlist }) => {
  return (
    <div>
    <h2>{city.name}</h2>
    <p>{city.region}, {city.country}</p>
    <p>
        {city.description}
    </p>
    <button onClick={() => {onAddToWishlist(city); onClose();}}>Add to Wishlist</button>
    </div>
  );
};
