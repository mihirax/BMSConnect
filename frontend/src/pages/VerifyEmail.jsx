import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const [status, setStatus] = useState("verifying");
  const [message, setMessage] = useState("Verifying your email, please wait...");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token found.");
      return;
    }

    const verify = async () => {
      try {
        const res = await api.post(`/auth/verify-email/${token}`);
        setStatus("success");
        setMessage(res.data.message);
      } catch (err) {
        setStatus("error");
        setMessage(err.response?.data?.message || "Verification failed.");
      }
    };

    verify();
  }, [token]);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        {status === "success" ? (
          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-800 mb-6">{message}</p>
            <Link to="/login" className="inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Go to Login
            </Link>
          </div>
        ) : (
          <h2 className={`text-2xl font-bold mb-4 ${status === 'error' ? 'text-red-600' : 'text-gray-700'}`}>
            {status === 'error' ? 'Error' : 'Verifying...'}
          </h2>
        )}
      </div>
    </div>
  );
}