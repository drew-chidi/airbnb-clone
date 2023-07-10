import mockData from '@/mockdata/data.json';

export default async function getListings(params) {
  console.log(mockData);
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

    const listings = mockData.User.flatMap((user) => user.listings).filter(
      (listing) => {
        if (userId && listing.userId !== userId) {
          return false;
        }

        if (category && listing.category !== category) {
          return false;
        }

        if (roomCount && listing.roomCount < roomCount) {
          return false;
        }

        if (guestCount && listing.guestCount < guestCount) {
          return false;
        }

        if (bathroomCount && listing.bathroomCount < bathroomCount) {
          return false;
        }

        if (locationValue && listing.locationValue !== locationValue) {
          return false;
        }

        if (startDate && endDate) {
          const reservationsOverlap = listing.reservations.some(
            (reservation) =>
              (reservation.endDate >= startDate &&
                reservation.startDate <= startDate) ||
              (reservation.startDate <= endDate &&
                reservation.endDate >= endDate)
          );

          if (reservationsOverlap) {
            return false;
          }
        }

        return true;
      }
    );

    const safeListings = listings?.map((listing) => ({
      ...listing,
      createdAt: new Date(listing.createdAt).toISOString(),
    }));

    return safeListings;
  } catch (error) {
    throw new Error(error);
  }
}
