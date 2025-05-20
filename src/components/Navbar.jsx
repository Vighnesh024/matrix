import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getActiveClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MySpaceDev</div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>

        <NavLink to={user ? "/profile" : "/login"} className={getActiveClass}>
          Profile
        </NavLink>

        {user ? (
          <button onClick={() => auth.signOut()} className={styles.logoutButton}>
            Logout
          </button>
        ) : (
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
