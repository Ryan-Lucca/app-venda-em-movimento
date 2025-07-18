import { useState } from "react";
import styles from "./BottomNavBar.module.css";
import { Icon } from "../../assets/icon"; 
import { IconNames } from "../../assets/icon/icons-svg";

const tabs = [
  { name: "Início", icon: "home" },
  { name: "Carteira", icon: "carteira" },
  { name: "Meta", icon: "meta" },
  { name: "Hub", icon: "hub" },
] satisfies { name: string; icon: IconNames }[];

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState("Início");

  return (
    <nav className={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <div
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className={`${styles.iconWrapper} ${
                isActive ? styles.active : ""
              }`}
            >
              <span
                className={`${styles.icon} ${
                  isActive ? styles.iconActive : ""
                }`}
              >
                <Icon
                  name={tab.icon}
                  size={24}
                  color={isActive ? "#fff" : "#1F1F1F"}
                />
              </span>
              <span
                className={`${styles.label} ${
                  isActive ? styles.labelActive : styles.labelInactive}`}
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
