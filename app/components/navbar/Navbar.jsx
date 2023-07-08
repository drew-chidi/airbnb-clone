'use client';
import Container from '../../app/components/Container';
import Logo from './Logo';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div>
            <Logo />
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
