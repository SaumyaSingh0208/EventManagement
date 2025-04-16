// ✅ HeroSection.jsx
import React, { useState } from 'react';
import NavigationBar from '../Navbar';
import AddEventModal from '../AddEventModal';
import MiniCarouselModal from '../MiniCarouselModal/MiniCarouselModal';
import HeroImage from '../../assets/images/hero-img.png';
import './HeroSection.css';

const HeroSection = ({ events, onAddEvent }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalData, setModalData] = useState({ visible: false, category: '' });

  const handleAddEvent = (newEvent) => {
    onAddEvent(newEvent);
    setShowAddModal(false);
  };

  const handleModalOpen = (category) => {
    setModalData({ visible: true, category });
  };

  const handleModalClose = () => {
    setModalData({ visible: false, category: '' });
  };

  const filteredEvents = events.filter((event) => {
    return event.category === modalData.category;
  });

  return (
    <div className="hero-container">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="hero-navbar-wrapper">
          <NavigationBar
            onConferencesHover={() => handleModalOpen("Conferences")}
            onBespokeHover={() => handleModalOpen("Bespoke")}
            onAddEventClick={() => setShowAddModal(true)}
          />
        </div>

        <div className="hero-heading">
          <h1>UPCOMING CONFERENCES</h1>
        </div>
      </div>

      {/* Mini Carousel Modal */}
      <MiniCarouselModal
        show={modalData.visible}
        onClose={handleModalClose}
        dynamicEvents={filteredEvents}
      />

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onEventCreate={handleAddEvent}
      />
    </div>
  );
};

export default HeroSection;
