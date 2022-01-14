import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mudah Diakses Kapanpun',
    Svg: require('../../static/img/undraw_teacher.svg').default,
    description: (
      <>
        Dapat diakses dengan mudah di setiap waktu sehingga memudahkan pekerjaan.
      </>
    ),
  },
  {
    title: 'Fokus pada Materi',
    Svg: require('../../static/img/undraw_programming.svg').default,
    description: (
      <>
       Terdiri dari rangkuman materi, peraturan, dan ketentuan yang menjadi fokus utama.
      </>
    ),
  },
  {
    title: 'Bisa Dibawa Kemana Saja',
    Svg: require('../../static/img/undraw_reminders.svg').default,
    description: (
      <>
        Digital dan tanpa fisik sehingga bisa dibawa kemana saja di saat kita bekerja.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
