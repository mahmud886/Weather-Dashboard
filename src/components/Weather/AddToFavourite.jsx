import { useContext, useEffect, useState } from 'react';
import RedHeartIcon from '../../assets/heart-red.svg';
import HeartIcon from '../../assets/heart.svg';
import { FavouriteContext, WeatherContext } from '../../context';

export default function AddToFavourite() {
  const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavorites = () => {
    const found = favourites.find((f) => f.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const found = favourites.find((f) => f.location === location);
    setIsFavourite(found);
  });
  return (
    <div className='md:col-span-2'>
      <div className='flex items-center justify-end space-x-6'>
        <button
          onClick={handleFavorites}
          className='text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]'>
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt='heart' />
        </button>
      </div>
    </div>
  );
}
