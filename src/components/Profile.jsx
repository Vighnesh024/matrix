// src/components/Profile.jsx
import { auth } from "../firebase";

export default function Profile() {
  const user = auth.currentUser;

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <p>This is a protected profile page.</p>
    </div>
  );
}
