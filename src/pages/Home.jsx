// src/pages/Home.jsx
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to MySpaceDev</h1>
      <p>Your personal space to learn and build awesome projects.</p>
      <Link to="/signup" className={styles.ctaButton}>
        Get Started
      </Link>
    </div>
  );
}
