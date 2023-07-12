import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';

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
    </Container>
  );
};

export default Home;
