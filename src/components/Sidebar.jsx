// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const getActiveClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.sidebar}>
      <NavLink to="/messages" className={getActiveClass}>Messages</NavLink>
      <NavLink to="/create" className={getActiveClass}>Create</NavLink>
      <NavLink to="/search" className={getActiveClass}>Search</NavLink>
      <NavLink to="/reels" className={getActiveClass}>Reels</NavLink>
      <NavLink to="/notifications" className={getActiveClass}>Notifications</NavLink>
    </nav>
  );
}
