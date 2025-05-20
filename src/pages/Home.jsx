import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Make sure this path is correct

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    // Not logged in: show original Get Started view
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

  // Logged in: show Stories + Messaging sidebar layout
  return (
    <div className={styles.appLayout}>
      <aside className={styles.sidebar}>
        <h3>Stories</h3>
        <ul>
          <li>Story 1</li>
          <li>Story 2</li>
          <li>Story 3</li>
        </ul>

        <h3>Messaging</h3>
        <ul>
          <li>Message from Alice</li>
          <li>Message from Bob</li>
        </ul>
      </aside>

      <main className={styles.mainContent}>
        <h2>Welcome back, {user.email}!</h2>
        <p>Start exploring your projects and messages.</p>
      </main>
    </div>
  );
}
