// components/EventCarousel.jsx
import React, { useEffect, useState } from 'react';
import './EventCarousel.css';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventCarousel = ({ events = [], show }) => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const updateTimers = () => {
      const now = new Date();
      const newTimers = events.map((event) => {
        const eventDate = new Date(`${event.date}T${event.time}`);
        const diff = eventDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return { days, hours, minutes, seconds };
      });
      setTimers(newTimers);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, [events]);

  if (!show || events.length === 0) return null;

  return (
    <div className="event-carousel-container">
      <h4 className="carousel-title">Upcoming Events</h4>
      <div className="event-carousel-scroll">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <p className="event-meta">
                <FaClock /> {event.date} {event.time}
              </p>
              <p className="event-meta">
                <FaMapMarkerAlt /> {event.location}
              </p>
              <div className="event-countdown">
                <div className="time-box">
                  <strong>{timers[index]?.days || 0}</strong>
                  <span>Days</span>
                </div>
                <div className="time-box">
                  <strong>{timers[index]?.hours || 0}</strong>
                  <span>Hrs.</span>
                </div>
                <div className="time-box">
                  <strong>{timers[index]?.minutes || 0}</strong>
                  <span>Min.</span>
                </div>
                <div className="time-box">
                  <strong>{timers[index]?.seconds || 0}</strong>
                  <span>Sec.</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
