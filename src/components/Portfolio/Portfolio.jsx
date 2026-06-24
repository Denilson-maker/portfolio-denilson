import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Portfolio.module.css';

const projects = [
  {
    emoji: '🖥️',
    tags: ['React', 'Node.js', 'MySQL'],
    title: 'Sistema de Gestão Web',
    desc: 'Aplicação full stack com autenticação JWT, dashboard administrativo e API REST escalável.',
  },
  {
    emoji: '🔐',
    tags: ['Node.js', 'Express', 'JWT'],
    title: 'API REST com Autenticação',
    desc: 'Backend robusto com endpoints protegidos, bcrypt para passwords e gestão de utilizadores.',
  },
  {
    emoji: '🗄️',
    tags: ['MySQL', 'SQL', 'Workbench'],
    title: 'Modelação de Base de Dados',
    desc: 'Esquema normalizado com stored procedures, funções e queries otimizadas para performance.',
  },
];

function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Meu Portfólio</p>
        <h2 className={styles.title}>
          Projetos <em>desenvolvidos</em>
        </h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.thumb}>
                <span>{project.emoji}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span className={styles.tag} key={j}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.cardLinks}>
                  <a href="#!" className={styles.cardLink}>
                    <FiGithub /> Código
                  </a>
                  <a href="#!" className={styles.cardLink}>
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;