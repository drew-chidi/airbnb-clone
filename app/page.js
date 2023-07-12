import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';
import { CiMap } from 'react-icons/ci';
import { BsMapFill } from 'react-icons/bs';

import getListings from '@/app/actions/getListings';
// import getCurrentUser from '@/app/actions/getCurrentUser';
import ListingCard from './components/Listings/ListingCard';

const Home = async ({ searchParams }) => {
  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div
        className='
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-4
            2xl:grid-cols-6
            gap-8
            pb-8
          '
      >
        {listings.map((listing) => (
          <ListingCard key={listing.id} data={listing} />
        ))}
      </div>
      <div className='relative w-full mx-auto'>
        <button className='border-none outline-0 fixed bottom-28 px-[19px] py-3.5  bg-[rgb(34,34,34)] flex justify-center items-center text-white rounded-2xl gap-1.5 mx-auto left-1/2 transition-transform hover:scale-105 -translate-x-1/2'>
          <span>Show map</span>
          <BsMapFill fill='white' size={16} />
        </button>
      </div>
    </Container>
  );
};

export default Home;
