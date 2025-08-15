import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

const ErrorMessage = ({ message }) => (
  <p className="text-red-500 text-xs mt-1">{message}</p>
);

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [infoMessage, setInfoMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setInfoMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    if (formData.password.length < 6) {
      setErrors({ password: "Password must be at least 6 characters" });
      return;
    }

    try {
      const res = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setInfoMessage(res.data.message);
    } catch (err) {
      const backendErrors = err.response?.data?.errors;
      if (backendErrors) {
        const newErrors = {};
        backendErrors.forEach(error => {
          newErrors[error.path] = error.msg;
        });
        setErrors(newErrors);
      } else {
        alert(err.response?.data?.message || "Registration failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
          Create a New Account
        </h2>
        {infoMessage ? (
          <p className="text-center text-green-600 bg-green-50 p-4 rounded-md">{infoMessage}</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Form inputs with error handling */}
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Register
            </button>
          </form>
        )}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}