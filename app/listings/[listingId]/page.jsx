import getListingById from '@/app/actions/getListingById';
import getReservations from '@/app/actions/getReservations';

import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';

const ListingPage = async ({ params }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div className='max-w-screen-lg mx-auto'>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ListingPage;
