import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [otherListings, setOtherListings] = useState([]);
  const [cardListings, setCardListings] = useState([]);
  SwiperCore.use([Navigation]);
  
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=3');
        const data = await res.json();
        setOfferListings(data);
        fetchCardListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCardListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=card&limit=3');
        const data = await res.json();
        setCardListings(data);
        fetchOtherListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchOtherListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=other&limit=3');
        const data = await res.json();
        setOtherListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find that <span className='text-blue-300 animate-glowing'>rare collectible</span>
          <br />
          here with ease
        </h1>
        <div className='text-slate-500 text-xs sm:text-sm'>
          CollectorsHub is the best place to find you that collectible you have been looking for.
          <br />
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-cyan-900 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {cardListings && cardListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recently listed cards</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=card'}>Show more</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {cardListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {otherListings && otherListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Other listed collectibles</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=other'}>Show more</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {otherListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}