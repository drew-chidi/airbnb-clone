'use Client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div>Any Week</div>
        <div>
          <div>Add Guests</div>
          <div className='p-2 bg-rose-500'>Add Guests</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
