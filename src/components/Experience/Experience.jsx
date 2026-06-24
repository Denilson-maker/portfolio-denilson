import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    period: '2024 — 2025',
    type: 'Ensino',
    role: 'Docente de Programação, Matemática & Física',
    company: 'Instituto Técnico RUSETH · Luanda, Angola',
    bullets: [
      'Lecionei Técnicas de Linguagem de Programação, introduzindo lógica computacional e algoritmos.',
      'Conduzi aulas de Matemática com foco em raciocínio lógico e resolução de problemas.',
      'Estruturei conteúdos de Física relacionando teoria com aplicações práticas e experimentais.',
      'Desenvolvi planos de aulas, avaliações e materiais pedagógicos institucionais.',
      'Monitorizei o desempenho académico e forneci suporte individualizado quando necessário.',
    ],
  },
];

function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Experiência</p>
        <h2 className={styles.title}>
          Percurso <em>profissional</em>
        </h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.left}>
                <span className={styles.period}>{exp.period}</span>
                <span className={styles.type}>{exp.type}</span>
              </div>
              <div className={styles.right}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;