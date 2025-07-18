import styles from './Layout.module.css';
import BottomNavBar from '../BottomNavBar/BottomNavBar.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <nav className={styles.nav}>
        <BottomNavBar />
      </nav>
    </div>
  );
}

