import ToasterProvider from './providers/ToasterProvider';
import Modal from './components/Modals/Modal';
import RegisterModal from './components/Modals/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import LoginModal from './components/Modals/LoginModal';
import Navbar from './components/Navbar/Navbar';

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
        {children}
      </body>
    </html>
  );
}
