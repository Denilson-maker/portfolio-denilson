import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    period: '2026',
    type: 'Desenvolvimento',
    role: 'Desenvolvedor Full Stack',
    company: 'Sistema de Faturação Web',
    bullets: [
      'Desenvolvi sistema de gestão de clientes, produtos e faturas.',
      'Implementei autenticação segura com JWT e bcrypt.',
      'Desenvolvi APIs REST para operações CRUD.',
      'Modelei e administrei a base de dados MySQL.',
    ],
  },
  {
    period: '2026',
    type: 'Redes',
    role: 'Técnico de Redes',
    company: 'Laboratórios e Projetos CCNA',
    bullets: [
      'Configuração de VLANs, Routing e Switching.',
      'Implementação de NAT, DHCP e DNS.',
      'Aplicação de ACLs e segurança de redes.',
      'Diagnóstico de problemas de conectividade com Cisco Packet Tracer.',
    ],
  },
  {
    period: '2025',
    type: 'Desenvolvimento',
    role: 'Desenvolvedor Full Stack (Projeto Académico)',
    company: 'Sistema Integrado de Gestão Académica',
    bullets: [
      'Analisei requisitos funcionais e não funcionais.',
      'Modelei a base de dados relacional.',
      'Desenvolvi frontend e backend da aplicação.',
      'Implementei autenticação e controlo de acessos.',
      'Criei APIs REST para integração dos módulos.',
    ],
  },
  {
    period: '2024 — 2025',
    type: 'Ensino',
    role: 'Docente de Programação, Matemática & Física',
    company: 'Instituto Técnico RUSETH · Luanda, Angola',
    bullets: [
      'Lecionei Técnicas de Linguagem de Programação, introduzindo lógica computacional e algoritmos.',
      'Conduzi aulas de Matemática com foco em raciocínio lógico e resolução de problemas.',
      'Estruturei conteúdos de Física relacionando teoria com aplicações práticas.',
      'Desenvolvi planos de aulas, avaliações e materiais pedagógicos institucionais.',
    ],
  },
  {
    period: '2024',
    type: 'Bases de Dados',
    role: 'Administrador de Bases de Dados',
    company: 'Projetos Académicos',
    bullets: [
      'Modelação de bases de dados e criação de esquemas relacionais.',
      'Desenvolvimento de consultas SQL e stored procedures.',
      'Gestão, manutenção e otimização de bases de dados MySQL.',
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