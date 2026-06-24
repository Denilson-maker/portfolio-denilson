import React from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';
import styles from './Courses.module.css';

const courses = [
  {
    title: 'CCNA Boot Camp',
    institution: 'IPVX',
    period: 'Mai 2026',
    topics: [
      'Fundamentos de redes de computadores',
      'Modelos OSI e TCP/IP',
      'Endereçamento IPv4 e IPv6 e Subnetting',
      'Configuração de Switches, VLANs e Trunking',
      'Protocolo STP (Spanning Tree Protocol)',
      'Configuração de Routers Cisco',
      'Roteamento estático e dinâmico (RIP e OSPF)',
      'NAT, DHCP, DNS e ACLs',
      'Segurança básica de redes e WLAN',
      'Troubleshooting com Cisco Packet Tracer',
    ],
  },
];

function Courses() {
  return (
    <section className={styles.section} id="courses">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Formação Complementar</p>
        <h2 className={styles.title}>
          Cursos & <em>Certificações</em>
        </h2>
        <div className={styles.grid}>
          {courses.map((course, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <FiAward />
                </div>
                <div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <div className={styles.meta}>
                    <span className={styles.institution}>{course.institution}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.period}>
                      <FiCalendar /> {course.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.topics}>
                {course.topics.map((topic, j) => (
                  <div className={styles.topic} key={j}>
                    <span className={styles.topicDot}></span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;