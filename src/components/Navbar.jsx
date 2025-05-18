import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MySpaceDev</div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to={user ? "/profile" : "/login"} className={styles.link}>
          Profile
        </Link>

        {user ? (
          <button
            onClick={() => auth.signOut()}
            className={styles.logoutButton}
            style={{ cursor: "pointer", background: "none", border: "none", color: "inherit", fontSize: "1rem" }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className={styles.link}>Login</Link>
            <Link to="/signup" className={styles.link}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
