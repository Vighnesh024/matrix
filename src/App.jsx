import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Search from "./pages/Search";
import Reels from "./pages/Reels";
import Notifications from "./pages/Notifications";
import { useAuth } from "./contexts/AuthContext";  // Import your auth context hook

export default function App() {
  const { user } = useAuth(); // Get current logged-in user

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" replace />}
              />
              <Route path="/messages" element={<Messages />} />
              <Route path="/search" element={<Search />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
