import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Use CSS Module

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
