import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/api";
import googleIcon from "../assets/google-icon.jpg";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
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
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setUser(data.user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-2 py-8 sm:px-4 sm:py-12">
      <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 ring-1 ring-white/5 hover:ring-white/20 transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome Back
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
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
                className="w-full px-3 py-3 xs:px-4 xs:py-3.5 sm:px-5 sm:py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-marvelRed focus:border-marvelRed focus:bg-white/5 transition-all duration-300 shadow-inner shadow-black/50 text-sm xs:text-base"
                required
                autoComplete="email"
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
                className="w-full px-3 py-3 xs:px-4 xs:py-3.5 sm:px-5 sm:py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-marvelRed focus:border-marvelRed focus:bg-white/5 transition-all duration-300 shadow-inner shadow-black/50 text-sm xs:text-base"
                required
                autoComplete="current-password"
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
              className="w-full bg-marvelRed hover:bg-red-600 text-white font-bold py-3 xs:py-3.5 sm:py-4 rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-marvelRed/30 hover:shadow-marvelRed/50 hover:shadow-2xl tracking-wide uppercase text-xs xs:text-sm sm:text-base transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 sm:my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs xs:text-sm">
              <span className="px-4 xs:px-6 bg-black text-gray-500 font-medium">
                or continue with
              </span>
            </div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 xs:gap-4 border border-white/20 hover:border-marvelRed bg-black/50 hover:bg-marvelRed/10 text-white font-medium py-3 xs:py-4 rounded-xl transition-all duration-300 shadow hover:shadow-marvelRed/40 group"
          >
            <img
              src={googleIcon}
              alt="Google"
              className="w-7 h-7 xs:w-9 xs:h-9 sm:w-10 sm:h-10"
            />
            <span className="text-xs xs:text-sm sm:text-base">
              Continue with Google
            </span>
          </button>

          {/* Footer */}
          <p className="text-center text-xs xs:text-sm text-gray-500 mt-8 sm:mt-10">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-bold text-marvelRed hover:text-red-400 hover:underline transition"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
