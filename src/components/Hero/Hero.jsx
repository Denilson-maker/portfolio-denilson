import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';
import foto from '../../assets/foto.jpg'; // ← adiciona este import no topo

const words = [
  'Desenvolvedor Web',
  'Engenheiro Informático',
  'React Developer',
  'Full Stack Dev',
];

function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        }
      }
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

 return (
  <section className={styles.hero} id="hero">

    {/* FOTO APARECE PRIMEIRO EM MOBILE */}
    <div className={styles.right}>
      <div className={styles.photoFrame}>
        <img
          src={foto}
          alt="Denilson Barbosa"
          className={styles.photo}
        />
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span className={styles.badgeTxt}>Disponível para oportunidades</span>
        </div>
      </div>
    </div>

    {/* TEXTO */}
    <div className={styles.left}>
      <p className={styles.greeting}>
        Olá, Seja Bem-Vindo(a)! <span>👋</span>
      </p>
      <h1 className={styles.name}>
        Denilson<br />
        <em>Barbosa</em>
      </h1>
      <div className={styles.typewriterWrap}>
        <span className={styles.twLabel}>Eu sou</span>
        <span className={styles.typewriter}>{text}</span>
      </div>
      <p className={styles.desc}>
        Engenheiro Informático e Desenvolvedor Web Full Stack com experiência
        em construção de APIs, otimização de bases de dados e interfaces
        responsivas. Proativo, organizado e com excelente capacidade de
        resolução de problemas.
      </p>
      <div className={styles.btns}>
        <Link to="portfolio" smooth={true} duration={600} offset={-70}>
          <button className={styles.btnAccent}>Ver Portfólio</button>
        </Link>
        <Link to="contact" smooth={true} duration={600} offset={-70}>
          <button className={styles.btnGhost}>Entrar em Contacto</button>
        </Link>
      </div>
      <div className={styles.stats}>
        <div>
          <div className={styles.statNum}>1+</div>
          <div className={styles.statLbl}>Ano de formação</div>
        </div>
        <div>
          <div className={styles.statNum}>3+</div>
          <div className={styles.statLbl}>Tecnologias core</div>
        </div>
        <div>
          <div className={styles.statNum}>2</div>
          <div className={styles.statLbl}>Ano de docência</div>
        </div>
      </div>
    </div>

  </section>
);
}

export default Hero;