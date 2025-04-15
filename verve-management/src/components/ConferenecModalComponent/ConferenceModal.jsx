import React from 'react';
import { Modal } from 'react-bootstrap';
import UpcomingConference from '../ConferencesComponent/UpcomingConference';

const ConferenceModal = ({ show, onHide, dynamicEvents = [] }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>Upcoming Conferences</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpcomingConference dynamicEvents={dynamicEvents} />
      </Modal.Body>
    </Modal>
  );
};

export default ConferenceModal;
