import Container from '@/app/components/Container';
import EmptyState from '@/app/components/EmptyState';

import getListings from '@/app/actions/getListings';
import getCurrentUser from '@/app/actions/getCurrentUser';
import ListingCard from './components/Listings/ListingCard';
// import ClientOnly from './components/ClientOnly';

const Home = async ({ searchParams }) => {
  const listings = await getListings(searchParams);

  console.log(listings);

  if (listings.length === 0) {
    return (
      // <ClientOnly>
      <EmptyState showReset />
      // </ClientOnly>
    );
  }

  return (
    // <ClientOnly>
    <Container>
      <div
        className='
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          '
      >
        {listings.map((listing) => (
          <ListingCard key={listing.id} data={listing} />
        ))}

        {/* <ListingCard data={listings} /> */}
      </div>
    </Container>
    // </ClientOnly>
  );
};

export default Home;
