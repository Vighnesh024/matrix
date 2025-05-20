import styles from "./Home.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className={styles.container}>
        <h1>Welcome to MySpaceDev</h1>
        <p>Your personal space to learn and build awesome projects.</p>
        <a href="/signup" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    );
  }

  return (
    <div className={styles.instagramLayout}>
      {/* Left Sidebar */}
      <aside className={styles.leftSidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            {user.email[0].toUpperCase()}
          </div>
          <div>
            <strong>{user.email.split("@")[0]}</strong>
            <p>View Profile</p>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Stories</a>
          <a href="#" className={styles.navLink}>Messages</a>
          <a href="#" className={styles.navLink}>Settings</a>
        </nav>
      </aside>

      {/* Center Feed */}
      <main className={styles.feed}>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
            <strong>{user.email.split("@")[0]}</strong>
          </div>
          <div className={styles.postImage}>
            <img
              src="https://via.placeholder.com/600x400.png?text=Sample+Post"
              alt="Sample Post"
            />
          </div>
          <div className={styles.postActions}>
            <button>❤️ Like</button>
            <button>💬 Comment</button>
          </div>
        </div>
        {/* Add more posts here */}
      </main>

      {/* Right Sidebar */}
      <aside className={styles.rightSidebar}>
        <h3>Suggestions</h3>
        <ul className={styles.suggestionsList}>
          <li>DevFriend1</li>
          <li>CoderGal</li>
          <li>OpenAI_Bot</li>
        </ul>
      </aside>
    </div>
  );
}
