import React from 'react';
import { FiGlobe } from 'react-icons/fi';
import styles from './Languages.module.css';

const languages = [
  {
    name: 'Português',
    level: 'Nativo',
    percent: 100,
  },
  {
    name: 'Inglês',
    level: 'Intermediário',
    percent: 40,
  },
];

function Languages() {
  return (
    <section className={styles.section} id="languages">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Idiomas</p>
        <h2 className={styles.title}>
          Línguas que <em>falo</em>
        </h2>
        <div className={styles.grid}>
          {languages.map((lang, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardTop}>
                <div className={styles.iconBox}>
                  <FiGlobe />
                </div>
                <div>
                  <h3 className={styles.langName}>{lang.name}</h3>
                  <p className={styles.langLevel}>{lang.level}</p>
                </div>
              </div>
              <div className={styles.barBg}>
                <div
                  className={styles.barFill}
                  style={{ width: `${lang.percent}%` }}
                ></div>
              </div>
              <p className={styles.percent}>{lang.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;