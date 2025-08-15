import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/events");
      setEvents(res.data.events || []);
    })();
  }, []);

  const badge = (status) => (
    <span className={`px-2 py-0.5 rounded text-sm ${status === "active" ? "bg-green-100 text-green-700":"bg-gray-200 text-gray-700"}`}>
      {status}
    </span>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {events.map(ev => (
          <div key={ev._id} className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-lg">{ev.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{ev.club?.name || ""}</p>
            <div className="text-sm mb-2">
              <div><span className="font-semibold">Starts:</span> {new Date(ev.startAt).toLocaleString()}</div>
              <div><span className="font-semibold">Reg. Deadline:</span> {new Date(ev.registrationDeadline).toLocaleString()}</div>
            </div>
            <div className="mb-3">{badge(ev.status)}</div>
            <Link to={`/events/${ev._id}`} className="text-blue-600 underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
