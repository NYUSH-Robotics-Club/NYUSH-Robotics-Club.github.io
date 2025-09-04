import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.content')}</p>
    </section>
  );
}

export default Contact;
