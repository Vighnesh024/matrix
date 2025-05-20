import { useNavigate, useLocation, Outlet } from "react-router-dom";
import styles from "./Layout.module.css"; // create this CSS module

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Top Bar for Mobile */}
      <header className={styles.topBar}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          MySpaceDev
        </div>
        <div
          className={styles.messagesIcon}
          onClick={() => navigate("/messages")}
          title="Messages"
        >
          💬
        </div>
      </header>

      {/* Left Sidebar for Desktop */}
      <aside className={styles.leftSidebar}>
        <button
          className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          onClick={() => navigate("/")}
          title="Home"
        >
          🏠 Home
        </button>
        <button
          className={`${styles.navLink} ${location.pathname === "/search" ? styles.active : ""}`}
          onClick={() => navigate("/search")}
          title="Search"
        >
          🔍 Search
        </button>
        <button
          className={styles.navLink}
          onClick={() => alert("Add functionality coming soon")}
          title="Add"
        >
          ➕ Add
        </button>
        <button
          className={`${styles.navLink} ${location.pathname === "/reels" ? styles.active : ""}`}
          onClick={() => navigate("/reels")}
          title="Reels"
        >
          🎬 Reels
        </button>
        <button
          className={`${styles.navLink} ${location.pathname === "/profile" ? styles.active : ""}`}
          onClick={() => navigate("/profile")}
          title="Profile"
        >
          👤 Profile
        </button>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className={styles.bottomNav}>
        <button
          className={`${styles.iconButton} ${location.pathname === "/" ? styles.active : ""}`}
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          🏠
        </button>
        <button
          className={`${styles.iconButton} ${location.pathname === "/search" ? styles.active : ""}`}
          onClick={() => navigate("/search")}
          aria-label="Search"
        >
          🔍
        </button>
        <button
          className={styles.iconButton}
          onClick={() => alert("Add functionality coming soon")}
          aria-label="Add"
        >
          ➕
        </button>
        <button
          className={`${styles.iconButton} ${location.pathname === "/reels" ? styles.active : ""}`}
          onClick={() => navigate("/reels")}
          aria-label="Reels"
        >
          🎬
        </button>
        <button
          className={`${styles.iconButton} ${location.pathname === "/profile" ? styles.active : ""}`}
          onClick={() => navigate("/profile")}
          aria-label="Profile"
        >
          👤
        </button>
      </nav>
    </>
  );
}
