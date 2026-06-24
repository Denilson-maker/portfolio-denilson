import React from 'react';
import {
  FiCode, FiLayout, FiServer, FiDatabase,
  FiLock, FiTerminal, FiWifi, FiGitBranch,
  FiTool, FiCpu, FiBookOpen, FiGlobe
} from 'react-icons/fi';
import { SiMysql, SiExpress, SiPostman, SiVercel, SiCisco } from 'react-icons/si';
import styles from './Skills.module.css';

const skillGroups = [
  {
    group: 'Frontend',
    skills: [
      { icon: <FiLayout />, name: 'HTML5' },
      { icon: <FiCode />, name: 'CSS3' },
      { icon: <FiCode />, name: 'JavaScript ES6+' },
      { icon: <FiLayout />, name: 'React' },
      { icon: <FiLayout />, name: 'Context API' },
      { icon: <FiLayout />, name: 'Material UI' },
    ],
  },
  {
    group: 'Backend',
    skills: [
      { icon: <FiServer />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express.js' },
      { icon: <FiCode />, name: 'APIs REST' },
      { icon: <FiLock />, name: 'JWT' },
      { icon: <FiLock />, name: 'bcrypt' },
    ],
  },
  {
    group: 'Bases de Dados',
    skills: [
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <FiDatabase />, name: 'MySQL Workbench' },
      { icon: <FiDatabase />, name: 'SQL Avançado' },
      { icon: <FiDatabase />, name: 'Stored Procedures' },
      { icon: <FiDatabase />, name: 'Modelação de BD' },
    ],
  },
  {
    group: 'Redes',
    skills: [
      { icon: <FiWifi />, name: 'IPv4 / IPv6' },
      { icon: <FiWifi />, name: 'VLANs' },
      { icon: <FiWifi />, name: 'Routing & Switching' },
      { icon: <FiWifi />, name: 'NAT / ACLs' },
      { icon: <FiWifi />, name: 'DHCP / DNS' },
      { icon: <SiCisco />, name: 'Cisco Packet Tracer' },
    ],
  },
  {
    group: 'Ferramentas',
    skills: [
      { icon: <FiGitBranch />, name: 'Git & GitHub' },
      { icon: <SiPostman />, name: 'Postman' },
      { icon: <SiVercel />, name: 'Vercel' },
      { icon: <FiTerminal />, name: 'VS Code' },
      { icon: <FiTerminal />, name: 'Linux' },
    ],
  },
  {
    group: 'Engenharia de Software',
    skills: [
      { icon: <FiCpu />, name: 'Modelação UML' },
      { icon: <FiCpu />, name: 'Arquitetura Cliente-Servidor' },
      { icon: <FiBookOpen />, name: 'Levantamento de Requisitos' },
      { icon: <FiTool />, name: 'Testes de Software' },
      { icon: <FiBookOpen />, name: 'Documentação Técnica' },
    ],
  },
];

function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Minhas Habilidades</p>
        <h2 className={styles.title}>
          Stack <em>técnico</em>
        </h2>
        {skillGroups.map((group, i) => (
          <div className={styles.groupBlock} key={i}>
            <p className={styles.groupLabel}>{group.group}</p>
            <div className={styles.grid}>
              {group.skills.map((skill, j) => (
                <div className={styles.pill} key={j}>
                  <span className={styles.pillIcon}>{skill.icon}</span>
                  <span className={styles.pillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;