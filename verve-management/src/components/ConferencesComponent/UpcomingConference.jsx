import React from 'react';
import './UpcomingConference.css';
import conference1 from '../../assets/images/conference1.jpg';
import conference2 from '../../assets/images/conference2.jpg';
import conference3 from '../../assets/images/conference3.jpg';
import conference4 from '../../assets/images/conference4.png';
import conference5 from '../../assets/images/conference5.jpeg';
import conference6 from '../../assets/images/conference6.jpg';
import conference7 from '../../assets/images/conference7.jpeg';
import conference8 from '../../assets/images/conference8.jpg';
import conference9 from '../../assets/images/conference9.jpg';
import conference10 from '../../assets/images/conference10.jpg';

const conferences = [
  {
    title: "5th Annual WealthTech Forum and Awards 2025",
    location: "Conrad Dubai",
    date: "14/05/2025 9:00 AM – 15/05/2025 4:00 PM",
    image: conference1
  },
  {
    title: "4th Edition CX & Loyalty Summit MENA & Awards 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 3:00 PM",
    image: conference2
  },
  {
    title: "4th Annual FUTURE BANKS SUMMIT 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 6:00 PM",
    image: conference3
  },
  {
    title: "5th Annual WealthTech Forum and Awards 2025",
    location: "Conrad Dubai",
    date: "14/05/2025 9:00 AM – 15/05/2025 4:00 PM",
    image: conference4
  },
  {
    title: "4th Edition CX & Loyalty Summit MENA & Awards 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 3:00 PM",
    image: conference5
  },
  {
    title: "4th Annual FUTURE BANKS SUMMIT 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 6:00 PM",
    image: conference6
  },
  {
    title: "5th Annual WealthTech Forum and Awards 2025",
    location: "Conrad Dubai",
    date: "14/05/2025 9:00 AM – 15/05/2025 4:00 PM",
    image: conference7
  },
  {
    title: "4th Edition CX & Loyalty Summit MENA & Awards 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 3:00 PM",
    image: conference8
  },
  {
    title: "4th Annual FUTURE BANKS SUMMIT 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 6:00 PM",
    image: conference9
  },
  {
    title: "4th Annual FUTURE BANKS SUMMIT 2025",
    location: "Conrad Dubai",
    date: "17/06/2025 8:00 AM – 18/06/2025 6:00 PM",
    image: conference10
  },
];

export default function UpcomingConference({ dynamicEvents = [] }) {
    const allEvents = [...dynamicEvents, ...conferences]; // dynamic on top
  
    return (
      <section className="py-5 bg-light">
        <div className="container conference-pattern-section">
          <h1 className="text-center fw-bold mb-5">
            Upcoming <span className="text-danger">Conferences</span>
          </h1>
  
          <div className="row g-4">
            {allEvents.map((conf, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow border-0 overflow-hidden">
                  <div className="card-img-container position-relative">
                    <img
                      src={conf.image}
                      className="card-img-top"
                      alt={conf.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                      Conference
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{conf.title}</h5>
                    <div className="text-muted mb-2">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {conf.location}
                    </div>
                    <div className="text-muted mb-3">
                      <i className="bi bi-calendar-event-fill me-2"></i>
                      {conf.date} {conf.time && `• ${conf.time}`}
                    </div>
                    <div className="mt-auto">
                      <button className="btn btn-outline-danger rounded-pill w-100 py-2 fw-medium">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
