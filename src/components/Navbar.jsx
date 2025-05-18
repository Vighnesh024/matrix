import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // <-- changed to NavLink
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

  // Helper function to handle active link class toggle
  const getActiveClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MySpaceDev</div>
      <div className={styles.navLinks}>
        <NavLink to="/" className={getActiveClass}>
          Home
        </NavLink>

        <NavLink to={user ? "/profile" : "/login"} className={getActiveClass}>
          Profile
        </NavLink>

        {user ? (
          <button
            onClick={() => auth.signOut()}
            className={styles.logoutButton}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "inherit",
              fontSize: "1rem",
            }}
          >
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
