import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function statusBadge(type, deadline) {
  const now = new Date();
  const d = deadline ? new Date(deadline) : null;

  if (type === "direct") return <span className="text-green-700 bg-green-100 px-2 py-0.5 rounded">Direct Join</span>;
  if (type === "audition") {
    if (!d) return <span className="text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded">Auditions (date TBA)</span>;
    if (d > now) return <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded">Auditions Open</span>;
    return <span className="text-gray-700 bg-gray-200 px-2 py-0.5 rounded">Closed</span>;
  }
  return <span className="text-gray-700 bg-gray-200 px-2 py-0.5 rounded">Coming Soon</span>;
}

export default function Clubs() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/clubs");
      setClubs(res.data.clubs || []);
    })();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clubs</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {clubs.map(c => (
          <div key={c._id} className="bg-white rounded shadow p-4">
            <h3 className="font-semibold text-lg mb-1">{c.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{c.description}</p>
            <div className="mb-3">{statusBadge(c.registrationType, c.registrationDeadline)}</div>
            <Link className="text-blue-600 underline" to={`/clubs/${c._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
