import mockData from '@/mockdata/data.json';

export default function getListingById(params) {
  try {
    const listing = mockData.listings.filter(
      (item) => item.id === params.listingId
    );
    return {
      listing,
    };
  } catch (error) {
    throw new Error(error);
  }
}
