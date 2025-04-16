import React, { useEffect, useState } from 'react';
import { upcomingEvents } from '../ConferencesComponent/UpcomingConference';
import { Modal, Carousel } from 'react-bootstrap';
import './MiniCarouselModal.css';

const MiniCarouselModal = ({ show, onClose, dynamicEvents = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filteredEvents, setFilteredEvents] = useState([...dynamicEvents, ...upcomingEvents]);
    const [selectedFilter, setSelectedFilter] = useState('Upcoming');
    const [countdown, setCountdown] = useState('');
  
    // Auto-rotate carousel
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % filteredEvents.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [filteredEvents]);
  
    // Countdown logic
    useEffect(() => {
      const timer = setInterval(() => {
        const currentEvent = filteredEvents[activeIndex];
        if (!currentEvent) return;
  
        const startDateStr = currentEvent.date.split('–')[0]?.trim();
        const startTime = new Date(startDateStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3'));
        const now = new Date();
        const diff = startTime - now;
  
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          setCountdown(`${days}d ${hours}h ${minutes}m`);
        } else {
          setCountdown('Event Started');
        }
      }, 1000);
      return () => clearInterval(timer);
    }, [filteredEvents, activeIndex]);
  
    const handleFilter = (type) => {
      setSelectedFilter(type);
      const now = new Date();
  
      if (type === 'Upcoming') {
        setFilteredEvents(upcomingEvents.filter(e => new Date(e.date.split('–')[0].trim()) > now));
      } else if (type === 'Past') {
        setFilteredEvents(upcomingEvents.filter(e => new Date(e.date.split('–')[1].trim()) < now));
      } else {
        setFilteredEvents(upcomingEvents.filter(e => e.date.includes(type)));
      }
      setActiveIndex(0);
    };
  
    return (
      <Modal show={show} onHide={onClose} centered size="lg" className="mini-carousel-modal">
        <Modal.Body className="d-flex p-0 rounded-4 overflow-hidden">
          {/* Carousel Content */}
          <div className="carousel-left p-4 bg-white w-75">
            <h4 className="fw-bold mb-2">Upcoming Events</h4>
            <hr className="mb-3" />
  
            <Carousel
              activeIndex={activeIndex}
              onSelect={(selected) => setActiveIndex(selected)}
              interval={null}
              indicators={false}
              fade
            >
              {filteredEvents.map((event, idx) => (
                <Carousel.Item key={idx}>
                  <div className="event-card shadow-sm rounded-4 bg-light overflow-hidden">
                    <img
                      src={event.image}
                      className="w-100 rounded-top"
                      alt={event.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="p-3">
                      <h5 className="fw-semibold mb-2">{event.title}</h5>
                      <p className="text-muted mb-1">
                        <i className="bi bi-geo-alt-fill me-2"></i>{event.location}
                      </p>
                      <p className="text-muted mb-2">
                        <i className="bi bi-calendar-event-fill me-2"></i>{event.date}
                      </p>
                      <div className="text-danger fw-semibold">{countdown}</div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
  
            {/* Carousel Controls */}
            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  setActiveIndex((prev) => (prev === 0 ? filteredEvents.length - 1 : prev - 1))
                }
              >
                ‹
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % filteredEvents.length)
                }
              >
                ›
              </button>
            </div>
          </div>
  
          {/* Filters on Right */}
          <div className="filter-right bg-light p-3 d-flex flex-column justify-content-center gap-3 border-start w-25">
            {['Upcoming', 'Past', '2024', '2025'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`btn rounded-pill fw-medium px-3 py-2 text-sm ${
                  selectedFilter === filter ? 'btn-danger text-white' : 'btn-outline-danger'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  
  export default MiniCarouselModal;