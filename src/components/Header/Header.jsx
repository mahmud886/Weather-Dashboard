import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Favourite from './Favourite.jsx';
import FavouriteListModal from './FavouriteListModal.jsx';
import Search from './Search';

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className='fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10'>
      <nav className='container flex items-center justify-between py-6'>
        <a href='./index.html'>
          <img className='h-9' src={Logo} alt='Weather App' />
        </a>

        <div className='flex items-center gap-4 relative'>
          <Search />
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavouriteListModal />}
        </div>
      </nav>
    </header>
  );
}
