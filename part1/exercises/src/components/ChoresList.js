
import React from 'react';
import styles from './ChoresList.module.css';

export default function ChoresList () {
   return(
      <div>
    <h3 className={styles.ChoresHeading}>The songs i liked the most!</h3>
    
            <li className={styles.ChoresText}>1.Fire spreading around my room</li>
            <li className={styles.ChoresText}>2.Dance dance dance with my hands hands</li>
         
    </div>
   );
}
