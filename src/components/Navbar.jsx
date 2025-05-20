import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const getActiveClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MySpaceDev</div>
      <div className={styles.navLinks}>
        {!user && (
          <>
            <NavLink to="/login" className={getActiveClass}>
              Login
            </NavLink>
            <NavLink to="/signup" className={getActiveClass}>
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
