import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreateClub() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/clubs", { name, description });
      navigate(`/clubs/${res.data.club._id}`);
    } catch (e) {
      alert(e.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Club</h1>
      <form onSubmit={submit} className="bg-white p-4 rounded shadow">
        <input className="border p-2 w-full mb-3" placeholder="Club Name"
               value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="border p-2 w-full mb-3" placeholder="Description"
                  value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
}
