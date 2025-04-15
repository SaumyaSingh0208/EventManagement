import React, { useState } from 'react';
import HeroSection from './components/HeroComponent/HeroSection';
import UpcomingConference from './components/ConferencesComponent/UpcomingConference';
import Footer from './components/FooterComponent/Footer';
import conferenceImages from './assets/conferenceImages'; // Helper file for images

const App = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    // If user didn't upload an image, assign a random one
    if (!newEvent.image) {
      const randomImage = conferenceImages[Math.floor(Math.random() * conferenceImages.length)];
      newEvent.image = randomImage;
    }

    setEvents((prev) => [newEvent, ...prev]); // prepend for newer first
  };

  return (
    <>
      {/* Hero section with events and modal */}
      <HeroSection events={events} onAddEvent={handleAddEvent} />

      {/* Upcoming conferences with both static and dynamic */}
      <UpcomingConference dynamicEvents={events} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
