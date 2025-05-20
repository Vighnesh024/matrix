import styles from "./Profile.module.css"; // adjust if path differs
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  const username = user.email.split("@")[0];

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>{user.email[0].toUpperCase()}</div>
          <button className={styles.changePhotoBtn}>Change Profile Photo</button>
        </div>

        <div className={styles.profileDetails}>
          <h2 className={styles.username}>{username}</h2>
          <div className={styles.stats}>
            <div><strong>12</strong><span>Posts</span></div>
            <div><strong>89</strong><span>Followers</span></div>
            <div><strong>75</strong><span>Following</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
