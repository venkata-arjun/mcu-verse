import React from "react";
import avengersLogo from "../assets/avengers-logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Import all images using Vite glob
const imageModules = import.meta.glob("../assets/*.{jpg,png,jpeg,svg}", {
  eager: true,
});

const characterNames = [
  "Ant-Man",
  "Black Panther",
  "Black Widow",
  "Captain America",
  "Captain Marvel",
  "Daredevil",
  "Deadpool",
  "Doctor Strange",
  "Groot",
  "Hawkeye",
  "Hulk",
  "Iron Man",
  "Loki",
  "Spider-Man",
  "Thor",
  "Winter Soldier",
  "Wasp",
  "War Machine",
  "Vision",
  "She-Hulk",
  "Shang-Chi",
  "Ms. Marvel",
  "Moon Knight",
  "Kate Bishop",
  "Iron Heart",
  "Falcon",
  "Scarlet Witch",
];

const filenames = [
  "Antman.jpg",
  "BlackPanther.jpg",
  "Blackwidow.jpg",
  "CaptainAmerica.jpg",
  "CaptainMarvel.jpg",
  "Daredevil.jpg",
  "Deadpool.jpg",
  "DoctorStrange.jpg",
  "Groot.jpg",
  "Hawkeye.jpg",
  "Hulk.jpg",
  "Ironman.jpg",
  "Loki.jpg",
  "Spiderman.jpg",
  "Thor.jpg",
  "WinterSoldier.jpg",
  "Wasp.jpg",
  "WarMachine.jpg",
  "Vision.jpg",
  "SheHulk.jpg",
  "Shangchi.jpg",
  "MsMarvel.jpg",
  "MoonKnight.jpg",
  "Kate Bishop.jpg",
  "IronHeart.jpg",
  "Falcon.jpg",
  "Scarlet Witch.jpg",
];

const images = filenames
  .map((name, idx) => {
    const entry = Object.entries(imageModules).find(([path]) =>
      path.endsWith(`/${name}`)
    );
    return {
      src: entry ? entry[1].default : null,
      alt: characterNames[idx],
    };
  })
  .filter((img) => img.src);

const ImageSlider = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (images.length === 0) return null;

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-6 px-2 sm:px-0">
        <span
          className="text-white text-[10px] font-light mb-3 block text-center"
          style={{ letterSpacing: "0.35em", opacity: 0.6 }}
        >
          C&nbsp;L&nbsp;I&nbsp;C&nbsp;K
        </span>
        <div className="w-full flex justify-center">
          <button
            onClick={() => (user ? navigate("/gallery") : navigate("/login"))}
            className="assemble-blink text-base xs:text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase bg-transparent border-none shadow-none p-0 hover:text-marvelRed focus:outline-none transition-all duration-200 w-full max-w-xs sm:max-w-none mb-2 text-center"
            style={{ letterSpacing: "0.35em", wordSpacing: "0.2em" }}
          >
            A S S E M B L E
          </button>
        </div>
      </div>
      {/* Custom keyframes for marquee and assemble button blink */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 140s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        .assemble-blink {
          color: #fff;
          animation: blink-assemble 1s steps(1, end) infinite;
        }
        @keyframes blink-assemble {
          0%,
          49% {
            color: #fff;
          }
          50%,
          100% {
            color: #e62429;
          }
        }
      `}</style>

      <section className="pt-12 pb-0 bg-black overflow-hidden relative">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-8 lg:px-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-14 drop-shadow-lg">
            Meet the Avengers
          </h2>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Marquee wrapper */}
          <div className="group overflow-x-auto w-full hide-scrollbar">
            <div className="flex animate-marquee gap-4 sm:gap-10 w-max min-w-full">
              {/* Original set + duplicated set for seamless loop */}
              {[...images, ...images].map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-40 h-64 xs:w-56 xs:h-80 sm:w-60 sm:h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-[26rem] xl:w-[22rem] xl:h-[30rem] object-cover rounded-xl border-4 border-transparent transition-all duration-500 shadow-lg"
                  />
                  <p className="mt-2 text-white text-base xs:text-lg sm:text-xl font-bold text-center drop-shadow-2xl">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hide scrollbar cross-browser */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </>
  );
};

export default ImageSlider;
