import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [clubs, setClubs] = useState([]);
  const [form, setForm] = useState({
    name: "", description: "", location: "",
    startAt: "", endAt: "", registrationDeadline: "",
    club: "", category: "general", capacity: 0, visibility: "public",
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await api.get("/clubs");
      setClubs(res.data.clubs || []);
    })();
  }, []);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        capacity: Number(form.capacity || 0),
        startAt: new Date(form.startAt).toISOString(),
        endAt: new Date(form.endAt).toISOString(),
        registrationDeadline: new Date(form.registrationDeadline).toISOString(),
      };
      const res = await api.post("/events", payload);
      navigate(`/events/${res.data.event._id}`);
    } catch (e) {
      alert(e.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <form onSubmit={submit} className="bg-white p-4 rounded shadow grid gap-3">
        <input className="border p-2" name="name" placeholder="Event Name" value={form.name} onChange={change} />
        <textarea className="border p-2" name="description" placeholder="Description" value={form.description} onChange={change} />
        <input className="border p-2" name="location" placeholder="Location" value={form.location} onChange={change} />

        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Start At
            <input className="border p-2 w-full" type="datetime-local" name="startAt" value={form.startAt} onChange={change} />
          </label>
          <label className="text-sm">End At
            <input className="border p-2 w-full" type="datetime-local" name="endAt" value={form.endAt} onChange={change} />
          </label>
        </div>

        <label className="text-sm">Registration Deadline
          <input className="border p-2 w-full" type="datetime-local" name="registrationDeadline" value={form.registrationDeadline} onChange={change} />
        </label>

        <div className="grid md:grid-cols-2 gap-3">
          <label className="text-sm">Visibility
            <select className="border p-2 w-full" name="visibility" value={form.visibility} onChange={change}>
              <option value="public">public</option>
              <option value="private">private</option>
            </select>
          </label>
          <label className="text-sm">Category
            <input className="border p-2 w-full" name="category" value={form.category} onChange={change} />
          </label>
        </div>

        <label className="text-sm">Club
          <select className="border p-2 w-full" name="club" value={form.club} onChange={change}>
            <option value="">Select club</option>
            {clubs.map(c => <option value={c._id} key={c._id}>{c.name}</option>)}
          </select>
        </label>

        <label className="text-sm">Capacity
          <input className="border p-2 w-full" type="number" name="capacity" value={form.capacity} onChange={change} />
        </label>

        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Create Event</button>
      </form>
    </div>
  );
}
