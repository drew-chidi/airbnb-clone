import ToasterProvider from './providers/ToasterProvider';
import RegisterModal from './components/Modals/RegisterModal';
import './globals.css';
import { Nunito, Open_Sans } from 'next/font/google';
import LoginModal from './components/Modals/LoginModal';
import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

const open_sans = Open_Sans({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={open_sans.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {/* <Navbar /> */}
        <div className='pb-20 pt-28'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
