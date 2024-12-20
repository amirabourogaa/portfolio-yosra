import React from 'react';
import styles from './Details.module.css'

const Details = () => {
  return (
    <div className={styles.details}>
      <h1>Presentation of This Project:</h1>
      <h2>Personal Portfolio</h2>
      <p>This portfolio showcases my skills, projects, and experiences as a developer. It is designed to be responsive, visually appealing, and user-friendly.</p>
      <h3>Technologies Used:</h3>
      <ul>
      <ul className={styles.list}>
        <li><strong>CSS:</strong> Global styles and responsive design.</li>
        <li><strong>CSS Modules:</strong> Scoped styling for specific components.</li>
        <li><strong>CSS-in-JS:</strong> Dynamic styling using styled-components.</li>
        <li><strong>UI Libraries:</strong> Material-UI for pre-designed components.</li>
      </ul>
      </ul>
    </div>
  );
};

export default Details;