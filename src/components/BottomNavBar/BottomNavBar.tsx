import { useState } from 'react';
import styles from './BottomNavBar.module.css';

const tabs = [
  { name: 'Início', icon: '🏠' },
  { name: 'Carteira', icon: '👥' },
  { name: 'Meta', icon: '📊' },
  { name: 'Hub', icon: '✏️' },
];

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState('Início');

  return (
    <nav className={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        return (
          <div
            key={tab.name}
            className={styles.tabItem}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className={`${styles.iconWrapper} ${
                isActive ? styles.active : ''
              }`}
            >
              <span
                className={`${styles.icon} ${isActive ? styles.iconActive : ''}`}
              >
                {tab.icon}
              </span>
              <span
                className={`${styles.label} ${
                  isActive ? styles.labelActive : styles.labelInactive
                }`}
              >
                {tab.name}
              </span>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
