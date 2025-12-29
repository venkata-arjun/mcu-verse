import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import avengersLogo from "../assets/avengers-logo.png";
import { useState } from "react";

export default function MainLayout() {
  const { user, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
      credentials: "include",
    });
    setUser(null);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="w-full bg-black shadow-lg border-b border-marvelRed/30">
        <div className="w-full">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center h-12"
              aria-label="Avengers Home"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={avengersLogo}
                alt="Avengers Logo"
                className="h-16 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
                style={{ maxHeight: "64px" }}
              />
            </Link>

            {/* Hamburger for mobile */}
            <button
              className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-marvelRed"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span
                className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Navigation */}
            <nav className="hidden sm:flex items-center space-x-4 sm:space-x-8">
              <Link
                to="/gallery"
                className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-marvelRed font-semibold transition px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-marvelRed"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-black border-b border-marvelRed/30 shadow-lg z-50 w-full absolute left-0">
            <nav className="flex flex-col items-center py-4 space-y-2">
              <Link
                to="/gallery"
                className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-marvelRed font-semibold transition px-4 py-2 rounded-md hover:bg-white/10 w-full text-center"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="w-full py-0">
        <Outlet />
      </main>
    </div>
  );
}
