import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Portfolio.module.css';

const projects = [
  {
    emoji: '🎓',
    tags: ['React', 'Node.js', 'MySQL', 'JWT'],
    title: 'Sistema Integrado de Gestão Académica',
    desc: 'Sistema completo para gestão académica com autenticação, controlo de acessos e APIs REST para integração de módulos. Desenvolvido como projeto de licenciatura.',
    github: '#',
    demo: '#',
  },
  {
    emoji: '🧾',
    tags: ['React', 'Node.js', 'MySQL', 'JWT', 'bcrypt'],
    title: 'Sistema de Faturação Web',
    desc: 'Plataforma de gestão de clientes, produtos e faturas com autenticação segura, APIs REST para operações CRUD e base de dados MySQL.',
    github: '#',
    demo: '#',
  },
  {
    emoji: '✅',
    tags: ['React', 'Node.js', 'Express.js'],
    title: 'TaskHelpers',
    desc: 'Aplicação web para gestão de tarefas e produtividade com operações CRUD, gestão de estados e interface responsiva. Publicado em produção.',
    github: '#',
    demo: '#',
  },
  {
    emoji: '🌐',
    tags: ['React', 'CSS3', 'Vercel'],
    title: 'Portfólio Profissional',
    desc: 'Website responsivo para apresentação profissional com interface moderna, adaptável a dispositivos móveis e publicado no Vercel.',
    github: '#',
    demo: '#',
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
                  <a href={project.github} className={styles.cardLink}>
                    <FiGithub /> Código
                  </a>
                  <a href={project.demo} className={styles.cardLink}>
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