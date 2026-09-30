import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { HERO_MEDIA } from '../data/media';
import usePageTitle from '../hooks/usePageTitle';

function Contact() {
  const { t } = useTranslation();
  usePageTitle(t('contact.title'));
  const email = t('footer.contactEmail');

  return (
    <>
      <Hero media={HERO_MEDIA.contact} title={t('contact.title')} lead={t('contact.lead')} short />

      <section className="section">
        <div className="shell">
          <div className="contact-list">
            <div>
              <h3>{t('contact.emailLabel')}</h3>
              <a className="contact-list__email" href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div>
              <h3>{t('contact.socialLabel')}</h3>
              <a
                href="https://www.instagram.com/nyush_robotics_club/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/robotics-club-at-nyu-shanghai"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link to="/wechat-code">{t('footer.wechat')}</Link>
            </div>

            <div>
              <h3>{t('contact.addressLabel')}</h3>
              <p>{t('contact.addressValue')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
