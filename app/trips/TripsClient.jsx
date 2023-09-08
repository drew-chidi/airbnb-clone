'use client';

import axios from 'axios';
import Heading from '../components/Heading';
import Container from '../components/Container';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import ListingCard from '../components/Listings/ListingCard';

const TripsClient = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success(`Reservation cancelled`);
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );

  return (
    <div>
      <Container>
        <Heading
          title='Trips'
          subtitle="where you've been and where you are going"
        />
        <div className='mt-a0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {reservations.map((reservation) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              actionId={reservation.id}
              reservation={reservation}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel={'Cancel reservation'}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TripsClient;
