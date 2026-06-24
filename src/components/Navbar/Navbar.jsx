import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        Denilson<span>.</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {['services', 'about', 'skills', 'portfolio', 'experience', 'contact'].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="contact" smooth={true} duration={600} offset={-70}>
        <button className={styles.cta}>Contratar</button>
      </Link>

      <div
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;