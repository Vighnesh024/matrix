import styles from "./Home.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState("feed");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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
          <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
          <div>
            <strong>{user.email.split("@")[0]}</strong>
            <p onClick={() => setActiveSection("profile")}>View Profile</p>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <button
            className={`${styles.navLink} ${activeSection === "feed" ? styles.active : ""}`}
            onClick={() => setActiveSection("feed")}
          >
            Home
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "stories" ? styles.active : ""}`}
            onClick={() => setActiveSection("stories")}
          >
            Reels
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "messages" ? styles.active : ""}`}
            onClick={() => setActiveSection("messages")}
          >
            Messages
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "profile" ? styles.active : ""}`}
            onClick={() => setActiveSection("profile")}
          >
            Profile
          </button>
        </nav>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Feed */}
      <main className={styles.feed}>
        {activeSection === "feed" && (
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
        )}

        {activeSection === "stories" && <h2>Reels section coming soon...</h2>}
        {activeSection === "messages" && <h2>Messages section placeholder</h2>}
        {activeSection === "profile" && (
          <div>
            <h2>Change Profile Photo</h2>
            <p>
              Username: <strong>{user.email.split("@")[0]}</strong>
            </p>
            <p>Posts: 0</p>
            <p>Followers: 0</p>
            <p>Following: 0</p>
          </div>
        )}
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
