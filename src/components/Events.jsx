import React, { useState } from 'react';

function Events() {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      price: "$22.00",
      imgSrc: "assets/images/meeting-01.jpg",
      altText: "New Lecturer Meeting",
      date: { month: "Nov", day: 10 },
      title: "New Lecturers Meeting",
      subtitle: "Morbi in libero blandit lectus cursus ullamcorper.",
      link: "meeting-details.html",
    },
    {
      id: 2,
      price: "$36.00",
      imgSrc: "assets/images/meeting-02.jpg",
      altText: "Online Teaching",
      date: { month: "Nov", day: 24 },
      title: "Online Teaching Techniques",
      subtitle: "Morbi in libero blandit lectus cursus ullamcorper.",
      link: "meeting-details.html",
    },
    {
      id: 3,
      price: "$14.00",
      imgSrc: "assets/images/meeting-03.jpg",
      altText: "Higher Education",
      date: { month: "Nov", day: 26 },
      title: "Higher Education Conference",
      subtitle: "Morbi in libero blandit lectus cursus ullamcorper.",
      link: "meeting-details.html",
    },
    {
      id: 4,
      price: "$50.00",
      imgSrc: "assets/images/meeting-04.jpg",
      altText: "Student Training",
      date: { month: "Nov", day: 30 },
      title: "Student Training Meetup",
      subtitle: "Morbi in libero blandit lectus cursus ullamcorper.",
      link: "meeting-details.html",
    },
  ]);

  return (
    <div>
      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Upcoming Meetings</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>Meeting Categories</h4>
                <ul>
                  <li><a href="#">Global Diplomacy</a></li>
                  <li><a href="#">International Relations</a></li>
                  <li><a href="#">Crisis Simulations</a></li>
                  <li><a href="#">Sustainable Development</a></li>
                  <li><a href="#">Human Rights & Social Justice</a></li>
                </ul>
                <div className="main-button-red">
                  <a href="meetings.html">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {meetings.map((meeting) => (
                  <div className="col-lg-6" key={meeting.id}>
                    <div className="meeting-item">
                      <div className="thumb">
                        <div className="price">
                          <span>{meeting.price}</span>
                        </div>
                        <a href={meeting.link}>
                          <img
                            src={meeting.imgSrc}
                            alt={meeting.altText}
                          />
                        </a>
                      </div>
                      <div className="down-content">
                        <div className="date">
                          <h6>
                            {meeting.date.month} <span>{meeting.date.day}</span>
                          </h6>
                        </div>
                        <a href={meeting.link}>
                          <h4>{meeting.title}</h4>
                        </a>
                        <p>{meeting.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
