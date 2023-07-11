import ToasterProvider from './providers/ToasterProvider';
import RegisterModal from './components/Modals/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import LoginModal from './components/Modals/LoginModal';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        <div className='pb-20 pt-28'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
