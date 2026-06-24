import React from 'react';
import {
  FiCode, FiLayout, FiServer, FiDatabase,
  FiLock, FiTerminal, FiWifi, FiGitBranch
} from 'react-icons/fi';
import { SiMysql, SiExpress } from 'react-icons/si';
import styles from './Skills.module.css';

const skills = [
  { icon: <FiLayout />, name: 'HTML5' },
  { icon: <FiCode />, name: 'CSS3' },
  { icon: <FiCode />, name: 'JavaScript ES6+' },
  { icon: <FiLayout />, name: 'React' },
  { icon: <FiLayout />, name: 'Context API' },
  { icon: <FiLayout />, name: 'Material UI' },
  { icon: <FiServer />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express.js' },
  { icon: <FiCode />, name: 'APIs REST' },
  { icon: <FiLock />, name: 'JWT' },
  { icon: <FiLock />, name: 'bcrypt' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FiDatabase />, name: 'SQL Avançado' },
  { icon: <FiDatabase />, name: 'Stored Procedures' },
  { icon: <FiGitBranch />, name: 'Git' },
  { icon: <FiTerminal />, name: 'Linux' },
  { icon: <FiWifi />, name: 'TCP/IP' },
  { icon: <FiWifi />, name: 'DNS / DHCP' },
];

function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Minhas Habilidades</p>
        <h2 className={styles.title}>
          Stack <em>técnico</em>
        </h2>
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <div className={styles.pill} key={i}>
              <span className={styles.pillIcon}>{skill.icon}</span>
              <span className={styles.pillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;