
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Amenities from './components/Amenities';
import Location from './components/Location';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Payment from './components/Payment';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import VirtualAssistant from './components/VirtualAssistant';
import BookingModal from './components/BookingModal';
import RoomsPage from './pages/RoomsPage';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>('Not Specified');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBooking = (roomType: string = 'Not Specified') => {
    setSelectedRoom(roomType);
    setIsBookingOpen(true);
  };

  const navigateTo = (page: 'home' | 'rooms') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
      />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onBook={openBooking} />
            <About />
            <Amenities />
            <WhyChooseUs />
            <Location />
            <Gallery />
            <FAQ />
            <Contact />
          </>
        ) : (
          <RoomsPage onBook={openBooking} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      <FloatingCTA onBook={() => openBooking()} />
      <VirtualAssistant />
      
      {isBookingOpen && (
        <BookingModal 
          selectedRoom={selectedRoom} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
