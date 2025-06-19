import styles from './Navigation.module.css';

export const setupMenuToggle = () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("navList");

  if (!hamburger || !navList) return;

  const expandedClass = styles.navListExpanded;

  hamburger.addEventListener("click", () => {
    navList.classList.toggle(expandedClass);
  });
}
