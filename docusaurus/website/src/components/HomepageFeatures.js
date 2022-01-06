import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Lectures',
    description: (
      <>
        5.10pm-7.00pm on Fridays at <u>60FA 110 </u><br />
        <strong> Each week </strong> consists of a lecture. <br />
        Lectures will be held <strong> in person</strong> . <br />
        The class will be recorded, we will post the link to the recorded lectures to the 
        <a href="https://campuswire.com/c/G7204E992/"> class campuswire</a>
      </>
    ),
  },
  {
    title: 'Resources',
    description: (
      <>
        This class is quite broad and hence there is no one textbook.
        Each lecture/topic will hence be accompanied with online reading material and chapters of relevant textbooks. 
      </>
    ),
  },
  {
    title: 'Course Staff & Office Hours',
    description: (
      <>
        Instructor: <a href="https://www.lerrelpinto.com/"> Lerrel Pinto</a><br />
        <i>office hours: Wed 4-5pm</i><br />
        Assistants: Ben Evans & Sneha Silwal <br />
        <i>office hours: Mon & Fri 4-5pm</i><br />
        <strong>OH will be held over Zoom.</strong><br />
     </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
