import { useAuth } from "../context/AuthContext";
import marvelDesktop from "../assets/marvel-desktop.jpg"; // Wide landscape for desktop
import marvelMobile from "../assets/marvel-mobile.jpg"; // Tall poster for mobile
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-marvelRed"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Desktop Background - Hidden on Mobile */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${marvelDesktop})`,
            backgroundPosition: "center center",
          }}
          aria-hidden="true"
        />

        {/* Mobile Background - Hidden on Desktop */}
        <div
          className="absolute inset-0 block md:hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${marvelMobile})`,
            backgroundPosition: "center top", // Adjust if your mobile image needs top alignment
          }}
          aria-hidden="true"
        />

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />

        {/* Hero Content - Perfectly Centered */}
        <div className="absolute left-1/2 top-[24%] transform -translate-x-1/2 z-20 w-full flex flex-col items-center justify-center pointer-events-none sm:hidden">
          <span
            className="text-white text-xs mb-4 font-medium tracking-widest uppercase pointer-events-auto"
            style={{ letterSpacing: "0.2em" }}
          >
            WELCOME
          </span>
          <button
            className="text-white text-3xl font-extrabold tracking-widest uppercase bg-transparent border-none shadow-none p-0 hover:text-marvelRed focus:outline-none pointer-events-auto"
            style={{ letterSpacing: "0.25em" }}
          >
            Avenger
          </button>
        </div>
      </section>

      {/* ================= AVENGERS SLIDER SECTION ================= */}
      <section className="py-12 sm:py-20 bg-black w-full">
        <ImageSlider />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 sm:py-12 text-center bg-black/50 backdrop-blur-sm">
        <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
          © 2025 Marvel Auth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Reusable Feature Card Component
function FeatureCard({ title, desc }) {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:border-marvelRed/70 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-marvelRed/20">
      <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-marvelRed group-hover:text-red-400 transition">
        {title}
      </h3>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
