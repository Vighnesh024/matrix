import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './App.module.css';

function Home() {
  return <h2>Welcome to your Social Media Feed</h2>;
}

function Profile() {
  return <h2>User Profile Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Signup() {
  return <h2>Signup Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Social Media App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
