import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './Contact.module.css';

const contacts = [
  { icon: <FiMail />, label: 'Email', value: 'denilsonmecanico07@gmail.com' },
  { icon: <FiPhone />, label: 'Telefone', value: '944 832 074' },
  { icon: <FiMapPin />, label: 'Localização', value: 'Morro Bento, Luanda · Angola' },
];

function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Contacto</p>
        <h2 className={styles.title}>
          Vamos <em>trabalhar juntos</em>
        </h2>
        <div className={styles.row}>
          <div className={styles.infoCol}>
            {contacts.map((c, i) => (
              <div className={styles.item} key={i}>
                <div className={styles.icon}>{c.icon}</div>
                <div>
                  <p className={styles.label}>{c.label}</p>
                  <p className={styles.value}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>
              Pronto para o próximo <em>projeto?</em>
            </h3>
            <p className={styles.ctaDesc}>
              Tens um projeto em mente ou precisas de um desenvolvedor full stack?
              Envia-me uma mensagem e vamos conversar sobre como posso ajudar.
            </p>
            <a href="mailto:denilsonmecanico07@gmail.com" className={styles.btn}>
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;