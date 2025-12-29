import { useFavorites } from "../context/FavoritesContext";
import { useState, useEffect, useRef } from "react";

export default function HeroCard({ hero, imageSrc }) {
  const { add, remove, isFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(isFavorite(hero.name));
  const [isAnimating, setIsAnimating] = useState(false);

  const touchCount = useRef(0);
  const touchTimer = useRef(null);
  const longPressTimer = useRef(null);

  useEffect(() => {
    setFavorite(isFavorite(hero.name));
  }, [hero.name, isFavorite]);

  const toggleFavorite = (e) => {
    e?.stopPropagation();

    // Instantly update UI
    setFavorite((prev) => {
      const newFav = !prev;
      // Fire and forget async update
      setTimeout(() => {
        if (newFav) {
          add({ itemId: hero.name, type: "hero" });
        } else {
          remove(hero._id || hero.name);
        }
      }, 0);
      return newFav;
    });
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Double-tap / Double-click handler
  const handleTap = (e) => {
    if (e.target.closest("button")) return;

    touchCount.current += 1;

    if (touchCount.current === 1) {
      touchTimer.current = setTimeout(() => {
        touchCount.current = 0;
      }, 300);
    } else if (touchCount.current === 2) {
      clearTimeout(touchTimer.current);
      touchCount.current = 0;
      toggleFavorite(e);
    }
  };

  // Long press backup
  const handleTouchStart = (e) => {
    if (e.target.closest("button")) return;

    longPressTimer.current = setTimeout(() => {
      toggleFavorite(e);
    }, 600);
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
  };

  // Heart button
  const handleHeartClick = (e) => {
    e.stopPropagation();
    toggleFavorite();
  };

  useEffect(() => {
    return () => {
      clearTimeout(touchTimer.current);
      clearTimeout(longPressTimer.current);
    };
  }, []);

  return (
    <div
      className="group relative select-none w-full"
      onClick={handleTap}
      onDoubleClick={toggleFavorite}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Card */}
      <div
        className={`
          relative rounded-xl overflow-hidden shadow-xl bg-gray-900 
          transition-all duration-500 group-hover:shadow-2xl
          ${isAnimating ? "animate-ping-once" : ""}
        `}
      >
        {/* Tall, full-height image on all devices */}
        <div className="relative w-full h-80 xs:h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem]">
          <img
            src={imageSrc}
            alt={hero.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            draggable={false}
            loading="lazy"
          />

          {/* Subtle overlay on hover/tap */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 group-active:bg-black/50 transition-all duration-300" />

          {/* Favorite Button */}
          <button
            onClick={handleHeartClick}
            onTouchStart={(e) => e.stopPropagation()}
            className={`
              absolute top-4 right-4 z-10
              w-12 h-12
              sm:w-14 sm:h-14
              rounded-full flex items-center justify-center
              backdrop-blur-md shadow-lg
              transition-all duration-300 ease-in-out
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-red-500/50
              ${
                favorite
                  ? "bg-red-600 text-white shadow-red-500/50 scale-105"
                  : "bg-black/70 text-white hover:bg-red-600/90 group-hover:scale-105"
              }
            `}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md transition-all duration-300"
            >
              <path
                fill={favorite ? "#ffffff" : "none"}
                stroke={favorite ? "#dc2626" : "#f43f5e"}
                strokeWidth="2"
                d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero name below */}
      <p className="text-white text-center mt-5 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide px-2">
        {hero.name}
      </p>
    </div>
  );
}
