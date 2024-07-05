import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-slate-100 shadow-md hover:shadow-lg hover:bg-slate-300 hover:scale-105 overflow-hidden rounded-lg w-full sm:w-[330px] transition-all'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://via.placeholder.com/300?text=No+Image'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
          <p className='text-sm text-gray-600 font-semibold line-clamp-2'>
            {listing.type === 'card' ? 'Card' : 'Other Collectible'}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-slate-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-slate-500 mt-2 font-semibold '>
          {listing.offer
              ? <span className='text-red-700'>Offer Price : </span>
              : <span className='text-slate-700'>Price : </span>}
            ₹
            {listing.offer
              ? listing.discountPrice
              : listing.regularPrice}
          </p>
        </div>
      </Link>
    </div>
  );
}