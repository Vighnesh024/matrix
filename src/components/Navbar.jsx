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
        <NavLink to="/" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/messages" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Messages
        </NavLink>

        <NavLink to="/create" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Create
        </NavLink>

        <NavLink to="/search" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Search
        </NavLink>

        <NavLink to="/reels" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Reels
        </NavLink>

        <NavLink to="/notifications" className={getActiveClass} onClick={() => setMenuOpen(false)}>
          Notifications
        </NavLink>

        {user ? (
          <>
            <NavLink to="/profile" className={getActiveClass} onClick={() => setMenuOpen(false)}>
              Profile
            </NavLink>
            <button
              onClick={() => {
                auth.signOut();
                setMenuOpen(false);
              }}
              className={styles.logoutButton}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={getActiveClass} onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
            <NavLink to="/signup" className={getActiveClass} onClick={() => setMenuOpen(false)}>
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
