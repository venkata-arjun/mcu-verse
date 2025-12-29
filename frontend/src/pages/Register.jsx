import { useState } from "react";
import { apiRequest } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await apiRequest("/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 ring-1 ring-white/5 hover:ring-white/20 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Create Account
            </h1>
            <p className="mt-3 text-base text-gray-400">Join us in seconds</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Tony Stark"
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-marvelRed focus:border-marvelRed focus:bg-white/5 transition-all duration-300 shadow-inner shadow-black/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tony@starkindustries.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-marvelRed focus:border-marvelRed focus:bg-white/5 transition-all duration-300 shadow-inner shadow-black/50"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="jarvis"
                value={form.password}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-marvelRed focus:border-marvelRed focus:bg-white/5 transition-all duration-300 shadow-inner shadow-black/50"
                required
              />
            </div>

            {error && (
              <div className="bg-red-950/40 border border-red-800/60 text-red-300 text-sm rounded-xl px-5 py-4 text-center backdrop-blur-sm shadow-lg shadow-red-900/30">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-marvelRed hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-marvelRed/30 hover:shadow-marvelRed/50 hover:shadow-2xl tracking-wide uppercase text-sm transform hover:-translate-y-0.5 active:translate-y-0 sm:text-base"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Divider - Optional Google signup */}
          <div className="relative my-8 sm:my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-black text-gray-500 font-medium">
                or
              </span>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 sm:text-base">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-marvelRed hover:text-red-400 hover:underline transition-colors duration-200"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
