import React, { useState } from 'react';
import NavigationBar from '../Navbar';
import AddEventModal from '../AddEventModal';
import ConferenceModal from '../ConferenecModalComponent/ConferenceModal';
import HeroImage from '../../assets/images/hero-img.png';
import './HeroSection.css';

const HeroSection = ({ events, onAddEvent }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConferenceModal, setShowConferenceModal] = useState(false);

  const handleAddEvent = (newEvent) => {
    onAddEvent(newEvent);
    setShowAddModal(false);
  };

  return (
    <div className="hero-container">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="hero-navbar-wrapper">
          <NavigationBar
            onConferencesClick={() => setShowConferenceModal(true)} // ✅ Show modal instead
            onAddEventClick={() => setShowAddModal(true)}
          />
        </div>

        <div className="hero-heading">
          <h1>UPCOMING CONFERENCES</h1>
        </div>
      </div>

      {/* Conference Modal */}
      <ConferenceModal
        show={showConferenceModal}
        onHide={() => setShowConferenceModal(false)}
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
