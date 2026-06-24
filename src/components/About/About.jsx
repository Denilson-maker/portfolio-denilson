import React from 'react';
import { FiCode, FiDatabase, FiServer, FiBookOpen } from 'react-icons/fi';
import styles from './About.module.css';
import foto from '../../assets/foto.jpg';


const specialties = [
  {
    icon: <FiCode />,
    title: 'Desenvolvimento Web Full Stack',
    desc: 'Usando React, Node.js, Express.js e MySQL para criar aplicações modernas, desde interfaces simples até sistemas de gestão completos.',
  },
  {
    icon: <FiServer />,
    title: 'Construção de APIs REST',
    desc: 'Arquitetura de APIs seguras e escaláveis com autenticação JWT, bcrypt e boas práticas de segurança.',
  },
  {
    icon: <FiDatabase />,
    title: 'Bases de Dados & Modelação',
    desc: 'Domínio avançado de MySQL Workbench, normalização de bases de dados e criação de stored procedures otimizadas.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Ensino de Programação',
    desc: 'Experiência a lecionar lógica computacional, algoritmos e pensamento estruturado a dezenas de estudantes.',
  },
];

function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Sobre Mim</p>
        <h2 className={styles.title}>
          Especializado <em>em</em>
        </h2>
        <div className={styles.grid}>
          <div className={styles.left}>
  <div className={styles.imgBox}>
    <img
      src={foto}
      alt="Denilson Barbosa"
      className={styles.imgPhoto}
    />
    <div className={styles.imgGlow}></div>
  </div>
</div>
          <div className={styles.right}>
            <p className={styles.bio}>
              Sou um Engenheiro Informático e Desenvolvedor Web Full Stack formado
              pela Universidade Independente de Angola. Tenho experiência no
              desenvolvimento de aplicações modernas com React, Node.js e MySQL,
              bem como na construção de APIs REST seguras e escaláveis. Sou
              proativo, organizado e apaixonado por resolver problemas complexos
              com soluções simples e eficientes.
            </p>
            <div className={styles.specialties}>
              {specialties.map((item, i) => (
                <div className={styles.specItem} key={i}>
                  <div className={styles.specIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.specTitle}>{item.title}</h3>
                    <p className={styles.specDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;