import styles from "./Home.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }
if (!user) {
  // If user not logged in, show nothing here, or redirect
  return null; // Or you can redirect to login if you want here
}

  // Helper to check if current path starts with target (for active state)
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <div className={styles.instagramLayout}>
      {/* Left Sidebar */}
      <aside className={styles.leftSidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
          <div>
            <strong>{user.email.split("@")[0]}</strong>
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
              View Profile
            </p>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <button
            className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`${styles.navLink} ${isActive("/reels") ? styles.active : ""}`}
            onClick={() => navigate("/reels")}
          >
            Reels
          </button>
          <button
            className={`${styles.navLink} ${isActive("/messages") ? styles.active : ""}`}
            onClick={() => navigate("/messages")}
          >
            Messages
          </button>
          <button
            className={`${styles.navLink} ${isActive("/profile") ? styles.active : ""}`}
            onClick={() => navigate("/profile")}
          >
            Profile
          </button>
        </nav>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className={styles.feed}>
        <Outlet />
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
