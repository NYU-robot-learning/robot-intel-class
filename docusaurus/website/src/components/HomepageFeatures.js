import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: (<a href="https://www.lerrelpinto.com/"> Lerrel Pinto </a>),
    image_path: './img/lerrel.jpeg',
    description: ('Instructor'),
  },
  {
    title: (<a href="https://www.strava.com/athletes/39605247?oq=ben%20eva/"> Ben Evans </a>),
    image_path: './img/ben.png',
    description: ('Course Assistant'),
  },
  {
    title: (<a href="http://www.ssilwal.com/"> Sneha Silwal </a>),
    image_path: './img/sneha.png',
    description: ('Course Assistant'),
  },
];

function Feature({title,image_path, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <img src={image_path}/>
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
