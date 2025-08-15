import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function ClubDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchClub = async () => {
    const res = await api.get(`/clubs/${id}`);
    setClub(res.data.club);
    setLoading(false);
  };

  useEffect(() => { fetchClub(); /* eslint-disable-next-line */ }, [id]);

  const canApply = () => {
    if (!club) return false;
    if (club.registrationType !== "audition") return false;
    if (!club.registrationDeadline) return false;
    return new Date() < new Date(club.registrationDeadline);
  };
  const canJoinDirect = () => club?.registrationType === "direct";

  const apply = async () => {
    try {
      await api.post(`/clubs/${id}/apply`);
      alert("Applied!");
      fetchClub();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to apply");
    }
  };

  const join = async () => {
    try {
      await api.post(`/clubs/${id}/join`);
      alert("Joined!");
      fetchClub();
    } catch (e) {
      alert(e.response?.data?.message || "Failed to join");
    }
  };

  const configure = async (registrationType, registrationDeadline) => {
    try {
      await api.patch(`/clubs/${id}/configure-registration`, { registrationType, registrationDeadline });
      await fetchClub();
    } catch (e) {
      alert(e.response?.data?.message || "Failed");
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!club) return <div className="p-6">Club not found</div>;

  const deadlineText = club.registrationDeadline
    ? new Date(club.registrationDeadline).toLocaleString()
    : "—";

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{club.name}</h1>
      <p className="text-gray-700 mt-2 mb-4">{club.description || "No description"}</p>

      <div className="bg-white rounded shadow p-4 mb-6">
        <div className="flex gap-6 text-sm">
          <div><span className="font-semibold">Type:</span> {club.registrationType}</div>
          <div><span className="font-semibold">Deadline:</span> {deadlineText}</div>
          <div><span className="font-semibold">Members:</span> {club.members?.length || 0}</div>
          <div><span className="font-semibold">Applicants:</span> {club.applicants?.length || 0}</div>
        </div>

        <div className="mt-4 flex gap-3">
          {user && canApply() && (
            <button onClick={apply} className="bg-blue-600 text-white px-3 py-1 rounded">
              Apply Now
            </button>
          )}
          {user && canJoinDirect() && (
            <button onClick={join} className="bg-green-600 text-white px-3 py-1 rounded">
              Join Club
            </button>
          )}
          {!canApply() && club.registrationType === "audition" && (
            <span className="text-sm text-gray-600">Applications closed</span>
          )}
          {club.registrationType === "closed" && (
            <span className="text-sm text-gray-600">Registrations opening soon</span>
          )}
        </div>

        {(user?.role === "admin" || user?.role === "core_member") && (
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Admin/Core: Configure Registration</h3>
            <div className="flex gap-2 flex-wrap">
              <button onClick={() => configure("direct")} className="border px-3 py-1 rounded">Set Direct Join</button>
              <button onClick={() => configure("closed")} className="border px-3 py-1 rounded">Set Closed</button>
              <button onClick={() => {
                const iso = prompt("Enter audition deadline (ISO, e.g., 2025-09-01T18:30:00.000Z)");
                if (iso) configure("audition", iso);
              }} className="border px-3 py-1 rounded">Open Auditions</button>
            </div>
          </div>
        )}
      </div>

      {/* TODO: list this club's events (optional extra fetch) */}
    </div>
  );
}
