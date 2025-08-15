import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function EventDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    const res = await api.get(`/events/${id}`);
    setEvent(res.data.event);
    setLoading(false);
  };
  useEffect(() => { fetchEvent(); /* eslint-disable-next-line */ }, [id]);

  const canRegister = () => {
    if (!event) return false;
    if (event.status === "expired") return false;
    return new Date() < new Date(event.registrationDeadline);
  };

  const register = async () => {
    try {
      await api.post(`/events/${id}/register`);
      alert("Registered!");
      fetchEvent();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to register");
    }
  };

  const extend = async () => {
    const iso = prompt("New registration deadline (ISO)");
    if (!iso) return;
    try {
      await api.patch(`/events/${id}/extend-deadline`, { registrationDeadline: iso });
      await fetchEvent();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to extend");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!event) return <div className="p-6">Event not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.name}</h1>
      <p className="text-gray-700 my-2">{event.description || "No description"}</p>

      <div className="bg-white rounded shadow p-4 mb-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div><span className="font-semibold">Club:</span> <Link className="underline" to={`/clubs/${event.club?._id}`}>{event.club?.name}</Link></div>
          <div><span className="font-semibold">Location:</span> {event.location}</div>
          <div><span className="font-semibold">Start:</span> {new Date(event.startAt).toLocaleString()}</div>
          <div><span className="font-semibold">End:</span> {new Date(event.endAt).toLocaleString()}</div>
          <div><span className="font-semibold">Reg. Deadline:</span> {new Date(event.registrationDeadline).toLocaleString()}</div>
          <div><span className="font-semibold">Status:</span> {event.status}</div>
          <div><span className="font-semibold">Capacity:</span> {event.capacity || "—"}</div>
          <div><span className="font-semibold">Participants:</span> {event.participants?.length || 0}</div>
        </div>

        <div className="mt-4 flex gap-3">
          {user && canRegister() && (
            <button onClick={register} className="bg-blue-600 text-white px-3 py-1 rounded">
              Register
            </button>
          )}
          {!canRegister() && <span className="text-sm text-gray-600">Registration Closed</span>}
          {(user?.role === "admin" || user?.role === "core_member") && (
            <button onClick={extend} className="border px-3 py-1 rounded">
              Extend Deadline
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
