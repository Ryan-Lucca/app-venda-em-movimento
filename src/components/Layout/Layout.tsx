import styles from './Layout.module.css';
import BottomNavBar from '../BottomNavBar/BottomNavBar.tsx';
import Header from '../Header/Header.tsx';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  let showHeader = true;
  let reload = true;

  switch (location.pathname) {
    case '/meta':
      reload = false; 
      break;
    case '/hub':
      showHeader = true; 
      break;
  }
  return (
    <div className={styles.container}>
      <Header reload={reload} show={showHeader}/>
      <div className={styles.content}>
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
}

