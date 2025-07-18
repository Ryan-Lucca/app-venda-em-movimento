import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../../assets/icon';
import { IconNames } from '../../assets/icon/icons-svg';
import styles from './BottomNavBar.module.css';

const tabs = [
  { name: "Início", icon: "home", path: "/" },
  { name: "Carteira", icon: "carteira", path: "/carteira" },
  { name: "Meta", icon: "meta", path: "/meta" },
  { name: "Hub", icon: "hub", path: "/hub" },
] satisfies { name: string; icon: IconNames; path: string }[];

export default function BottomNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <div
            key={tab.name}
            onClick={() => navigate(tab.path)}
          >
            <div
              className={`${styles.iconWrapper} ${
                isActive ? styles.active : ""
              }`}
            >
              <span className={`${styles.icon} ${isActive ? styles.iconActive : ""}`}>
                <Icon name={tab.icon} size={24} color={isActive ? "#fff" : "#000"} />
              </span>
              <span className={`${styles.label} ${isActive ? styles.labelActive : styles.labelInactive}`}>
                {tab.name}
              </span>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
