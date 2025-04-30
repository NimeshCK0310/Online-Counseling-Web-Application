import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import { AuthProvider } from "./context/AuthContext";
import Counselors from "./pages/Counselors";
import Booking from "./pages/Booking";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCounselors from "./pages/ManageCounselors";
import ManageBookings from "./pages/ManageBookings";
import ActivityList from "./pages/ActivityList";
import UploadActivity from "./pages/UploadActivity";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    // <AuthProvider>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Router>
        <Navbar />
        <main className="container mx-auto px-4 py-8 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/counselors" element={<Counselors />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/counselors" element={<ManageCounselors />} />
            <Route path="/admin/bookings" element={<ManageBookings />} />
            <Route path="/activities" element={<ActivityList />} />
            <Route path="/upload-activity" element={<UploadActivity />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
    // </AuthProvider>
  );
}

export default App;
