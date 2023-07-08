'use client';

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl font-bold'>{title}</div>
      <div className='font-light'></div>
    </div>
  );
};

export default Heading;
