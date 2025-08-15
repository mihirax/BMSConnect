import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-primary font-bold text-xl">BMS Connect</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/clubs" className="text-gray-500 hover:text-primary">Clubs</Link>
            <Link to="/events" className="text-gray-500 hover:text-primary">Events</Link>
            {(user?.role === "admin" || user?.role === "core_member") && (
              <Link to="/create-club" className="text-gray-500 hover:text-primary">Create Club</Link>
            )}
            {(user?.role === "admin" || user?.role === "core_member" || user?.role === "club_head") && (
              <Link to="/create-event" className="text-gray-500 hover:text-primary">Create Event</Link>
            )}
            {user ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
            ) : (
              <Link to="/login" className="bg-primary text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}