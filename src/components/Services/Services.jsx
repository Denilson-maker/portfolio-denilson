import React from 'react';
import { FiLayout, FiServer, FiDatabase, FiWifi } from 'react-icons/fi';
import styles from './Services.module.css';

const services = [
  {
    icon: <FiLayout />,
    title: 'Desenvolvimento Frontend',
    desc: 'Interfaces modernas e responsivas com React, HTML5 e CSS3. Design limpo e experiência de utilizador de alta qualidade.',
  },
  {
    icon: <FiServer />,
    title: 'Desenvolvimento Backend',
    desc: 'APIs REST robustas com Node.js e Express.js. Autenticação segura com JWT e bcrypt.',
  },
  {
    icon: <FiDatabase />,
    title: 'Bases de Dados',
    desc: 'Modelação, normalização e otimização de bases de dados MySQL. Queries avançadas e stored procedures.',
  },
  {
    icon: <FiWifi />,
    title: 'Redes & Sistemas',
    desc: 'Configuração de ambientes de desenvolvimento, redes LAN, DNS, DHCP e administração Linux e Windows.',
  },
];

function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Meus Serviços</p>
        <h2 className={styles.title}>
          O que eu <em>ofereço</em>
        </h2>
        <div className={styles.grid}>
          {services.map((srv, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{srv.icon}</div>
              <h3 className={styles.cardTitle}>{srv.title}</h3>
              <p className={styles.cardDesc}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;