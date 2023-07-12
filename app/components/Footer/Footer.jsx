import React from 'react';
import {
  AiOutlineCopyrightCircle,
  AiOutlineHeart,
  AiOutlineSearch,
} from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { FiDollarSign } from 'react-icons/fi';
import { BsChevronUp } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { PiDot } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className='fixed w-full bg-white z-10 shadow-sm bottom-0 text-sm text-[#717171]'>
      {/* LARGER SCREENS */}
      <div className='py-4 border-t-[1px]'>
        <div className='hidden md:block md:px-10 xl:px-20'>
          <div className='flex flex-row justify-between items-center'>
            <ul className='flex flex-row items-center gap-2 flex-wrap'>
              <li className='flex flex-row items-center gap-2'>
                <AiOutlineCopyrightCircle className='text-[#717171]' />
                <span>2023 Airbnb, Inc.</span>
              </li>
              <li className='leading-tight inline-block text-center my-auto'>
                <PiDot />
              </li>
              <li className='hover:underline cursor-pointer'>Terms</li>
              <li className='inline-block'>
                {' '}
                <PiDot />
              </li>
              <li className='hover:underline cursor-pointer'>Sitemap</li>
              <li className='leading-tight text-center'>
                {' '}
                <PiDot />
              </li>
              <li className='hover:underline cursor-pointer'>Privacy</li>
              <li>
                {' '}
                <PiDot />
              </li>
              <li className='flex flex-row items-center gap-2'>
                <span className='hover:underline cursor-pointer'>
                  Your Privacy Choices
                </span>
                <span>
                  <svg width='26' height='12' fill='none'>
                    <rect
                      x='0.5'
                      y='0.5'
                      width='25'
                      height='11'
                      rx='5.5'
                      fill='#fff'
                    ></rect>
                    <path d='M14 1h7a5 5 0 010 10H11l3-10z' fill='#06F'></path>
                    <path
                      d='M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5'
                      stroke='#06F'
                      stroke-linecap='round'
                    ></path>
                    <path
                      d='M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5'
                      stroke='#fff'
                      stroke-linecap='round'
                    ></path>
                    <rect
                      x='0.5'
                      y='0.5'
                      width='25'
                      height='11'
                      rx='5.5'
                      stroke='#06F'
                    ></rect>
                  </svg>
                </span>
              </li>
              <li className='hover:underline cursor-pointer'>Destination</li>
            </ul>

            <div className=''>
              {/* Support and Resources */}
              <ul className='flex flex-row items-center flex-wrap gap-3 font-semibold'>
                <li className='flex flex-row items-center gap-1.5'>
                  <span>
                    <TbWorld />
                  </span>
                  <span className='hover:underline cursor-pointer'>
                    English (US)
                  </span>
                </li>
                <li className='flex flex-row items-center gap-1.5'>
                  <span>
                    <FiDollarSign />
                  </span>
                  <span className='hover:underline cursor-pointer'>USD</span>
                </li>
                <li className='flex flex-row items-center gap-1'>
                  <span className='hover:underline cursor-pointer'>
                    Support & Resources
                  </span>
                  <span>
                    <BsChevronUp />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SMALL SCREENS */}
        <div className='md:hidden '>
          <ul className='flex justify-center items-center gap-8'>
            <li className='flex flex-col justify-center items-center'>
              <AiOutlineSearch size={30} />
              <span>Explore</span>
            </li>
            <li className='flex flex-col justify-center items-center'>
              <AiOutlineHeart size={30} />
              <span>Wishlists</span>
            </li>
            <li className='flex flex-col justify-center items-center'>
              <RxAvatar size={30} />
              <span>Log in</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
