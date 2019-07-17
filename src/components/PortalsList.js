import React from 'react';
// styles
import styles from './PortalsList.module.css';

const PortalsList = ({ portalsList }) => (
  <ul>
    {portalsList.map(item => (
      <li className={styles.item} key={item.id}>
        {item}
      </li>
    ))}
  </ul>
);
export default PortalsList;
