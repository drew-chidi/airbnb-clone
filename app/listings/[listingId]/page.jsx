import getListingById from '@/app/actions/getListingById';

import EmptyState from '@/app/components/EmptyState';

const ListingPage = ({ params }) => {
  const listing = getListingById(params);

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div className='max-w-screen-lg mx-auto'>My Individual Listing Page</div>
  );
};

export default ListingPage;
