import React from 'react';

function PastEventInvolvementFair() {
  return (
    <>
      <div className="background-container">
        <img
          src="/images/Involvement Fair/Cropped Involvement Fair.JPG"
          alt="Background Image"
          className="image-with-shadow"
        />
        <div className="background-container-content">
          <h1>INVOLVEMENT FAIR!</h1>
          <h2>September 24th, 2024</h2>
        </div>
      </div>

      <div className="eventrecap">
        <h2>To be Updated!</h2>
        <p>...</p>
        <p>...</p>
        <img
          src="/images/Involvement Fair/Cropped Involvement Fair.JPG"
          alt="TESOL Group Photo"
        />
        <p>...</p>
      </div>

      <div className="clickable-columns">
        <a href="#" className="column">
          <img
            src="/images/Involvement Fair/Involvement Fair 1.JPG"
            alt="Annual Report"
          />
          <div className="column-text">
            <h3>Event</h3>
            <h2>Arduino Workshop</h2>
          </div>
          <span className="arrow">→</span>
        </a>
        <a href="#" className="column">
          <img
            src="/images/Involvement Fair/Involvement Fair 1.JPG"
            alt="Student Statistics"
          />
          <div className="column-text">
            <h3>Competition</h3>
            <h2>VEX</h2>
          </div>
          <span className="arrow">→</span>
        </a>
        <a href="#" className="column">
          <img
            src="/images/Involvement Fair/Involvement Fair 1.JPG"
            alt="Event Report"
          />
          <div className="column-text">
            <h3>EVENT</h3>
            <h2>Involvement Fair Highlights</h2>
          </div>
          <span className="arrow">→</span>
        </a>
      </div>
    </>
  );
}

export default PastEventInvolvementFair;
