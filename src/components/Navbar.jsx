// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
