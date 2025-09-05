import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/videos/Contact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>{t('contact.title')}</h1>
        <p>Get in touch with the NYU Shanghai Robotics Club!</p>
        <p>
          <a href="mailto:shanghai.robotics@nyu.edu">shanghai.robotics@nyu.edu</a>
        </p>
      </div>
    </>
  );
}

export default Contact;
