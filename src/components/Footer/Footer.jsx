import React from 'react';
import { Link } from 'react-scroll';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* TOP */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>Denilson<span>.</span></div>
            <p className={styles.brandDesc}>
              Desenvolvedor Web Full Stack especializado em React, Node.js e MySQL.
              Disponível para projetos e oportunidades em Luanda, Angola.
            </p>
            <div className={styles.contacts}>
              <a href="mailto:denilsonmecanico07@gmail.com" className={styles.contactItem}>
                <FiMail /> denilsonmecanico07@gmail.com
              </a>
              <a href="tel:+244944832074" className={styles.contactItem}>
                <FiPhone /> 944 832 074
              </a>
              <span className={styles.contactItem}>
                <FiMapPin /> Morro Bento, Luanda · Angola
              </span>
            </div>
          </div>

          <div className={styles.linksCol}>
            <p className={styles.colTitle}>Navegação</p>
            <ul className={styles.linksList}>
              {[
                { to: 'services', label: 'Serviços' },
                { to: 'about', label: 'Sobre' },
                { to: 'skills', label: 'Skills' },
                { to: 'portfolio', label: 'Portfólio' },
                { to: 'experience', label: 'Experiência' },
                { to: 'contact', label: 'Contacto' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={600}
                    offset={-70}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <p className={styles.colTitle}>Stack</p>
            <ul className={styles.linksList}>
              {['React', 'Node.js', 'Express.js', 'MySQL', 'JavaScript', 'APIs REST'].map((tech) => (
                <li key={tech}><span>{tech}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Denilson Barbosa · Todos os direitos reservados
          </p>
          <button
            className={styles.backTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Voltar ao topo
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;