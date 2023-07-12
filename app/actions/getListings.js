import mockData from '@/mockdata/data.json';

export default function getListings(params) {
  try {
    const {
      userId,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    const formattedListings = mockData.listings.map((listing) => ({
      ...listing,
    }));

    return formattedListings;
  } catch (error) {
    throw new Error(error);
  }
}
