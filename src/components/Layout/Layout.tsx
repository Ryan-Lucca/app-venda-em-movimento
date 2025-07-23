import styles from './Layout.module.css';
import BottomNavBar from '../BottomNavBar/BottomNavBar.tsx';
import Header from '../Header/Header.tsx';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  let showHeader = true;
  let reload = true;
  let title: string | undefined = undefined;

  switch (location.pathname) {
    case '/carteira':
      title = "Carteira";
      break;
    case '/meta':
      reload = false;
      title = "Meta";
      break;
    case '/hub':
      showHeader = false;
      break;
    // você pode adicionar mais cases se quiser títulos personalizados
  }

  return (
    <div className={styles.container}>
      <Header reload={reload} show={showHeader} title={title} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
}
