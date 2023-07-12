'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { format } from 'date-fns';

import useCountries from '@/app/hooks/useCountries';
// import { SafeListing, SafeReservation, SafeUser } from '@/app/types';

import HeartButton from '../HeartButton';
import Button from '../Button';
import { AiFillStar } from 'react-icons/ai';
// import ClientOnly from '../ClientOnly';

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = data.pricePerNight;
  const region = data.location.region;
  const country = data.location.label;

  const reservationDate = useMemo(() => {
    const start = new Date(data.availableDates.start);
    const end = new Date(data.availableDates.end);

    const startMonth = format(start, 'MMM');
    const endMonth = format(end, 'MMM');
    const startDay = format(start, 'd');
    const endDay = format(end, 'd');

    if (startMonth === endMonth) {
      return `${startMonth} ${startDay} - ${endDay}`;
    } else {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
    }
  }, [data]);

  return (
    <>
      <div
        key={data.id}
        onClick={() => router.push(`/listings/${data.id}`)}
        className='col-span-1 cursor-pointer group'
      >
        <div className='flex flex-col gap-2 w-full'>
          <div
            className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
          >
            <Image
              fill
              className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
              src={data.imageSrc}
              alt='Listing'
            />
            <div
              className='
            absolute
            top-3
            right-3
          '
            >
              <HeartButton listingId={data.id} currentUser={currentUser} />
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
              <div className='font-semibold text-lg'>
                {region}, {country}
              </div>
              <div className='flex items-center gap-1'>
                <AiFillStar />
                <span>{data.averageRating}</span>
              </div>
            </div>
            <div className='font-light text-neutral-500'>
              {data.location.distanceAway} away
            </div>
            <div className='font-light text-neutral-500'>{reservationDate}</div>
          </div>
          <div className='flex flex-row items-center gap-1'>
            <div className='font-semibold'>$ {price}</div>
            {!reservation && <div className='font-light'>night</div>}
          </div>
          {onAction && actionLabel && (
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={handleCancel}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ListingCard;
