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
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between">
      <Link to="/" className="font-bold">BMS Connect</Link>
      <div className="flex items-center gap-4">
        <Link to="/clubs">Clubs</Link>
        <Link to="/events">Events</Link>

        {(user?.role === "admin" || user?.role === "core_member") && (
          <Link to="/create-club" className="underline">Create Club</Link>
        )}
        {(user?.role === "admin" || user?.role === "core_member" || user?.role === "club_head") && (
          <Link to="/create-event" className="underline">Create Event</Link>
        )}

        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
        )}
      </div>
    </nav>
  );
}
