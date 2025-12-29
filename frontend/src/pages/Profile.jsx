import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const avengerData = [
  { name: "Ant-Man", file: "Antman.jpg" },
  { name: "Black Panther", file: "BlackPanther.jpg" },
  { name: "Black Widow", file: "Blackwidow.jpg" },
  { name: "Captain America", file: "CaptainAmerica.jpg" },
  { name: "Captain Marvel", file: "CaptainMarvel.jpg" },
  { name: "Daredevil", file: "Daredevil.jpg" },
  { name: "Deadpool", file: "Deadpool.jpg" },
  { name: "Doctor Strange", file: "DoctorStrange.jpg" },
  { name: "Hawkeye", file: "Hawkeye.jpg" },
  { name: "Hulk", file: "Hulk.jpg" },
  { name: "Iron Man", file: "Ironman.jpg" },
  { name: "Spider-Man", file: "Spiderman.jpg" },
  { name: "Thor", file: "Thor.jpg" },
  { name: "Loki", file: "Loki.jpg" },
  { name: "Winter Soldier", file: "WinterSoldier.jpg" },
  { name: "Wasp", file: "Wasp.jpg" },
  { name: "War Machine", file: "WarMachine.jpg" },
  { name: "Vision", file: "Vision.jpg" },
  { name: "She-Hulk", file: "SheHulk.jpg" },
  { name: "Shang-Chi", file: "Shangchi.jpg" },
  { name: "Ms. Marvel", file: "MsMarvel.jpg" },
  { name: "Groot", file: "Groot.jpg" },
  { name: "Moon Knight", file: "MoonKnight.jpg" },
  { name: "Kate Bishop", file: "Kate Bishop.jpg" },
  { name: "Iron Heart", file: "IronHeart.jpg" },
  { name: "Falcon", file: "Falcon.jpg" },
  { name: "Scarlet Witch", file: "Scarlet Witch.jpg" },
];

const imageModules = import.meta.glob("../assets/*.{jpg,png,jpeg,svg}", {
  eager: true,
});

function getImageSrc(file) {
  const entry = Object.entries(imageModules).find(([path]) =>
    path.endsWith(`/${file}`)
  );
  return entry ? entry[1].default : "";
}

const userIconSrc = getImageSrc("user-icon.png");

export default function Profile() {
  const { user } = useAuth();
  const { favorites, remove } = useFavorites();

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-6">
            Access Denied
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300">
            Please log in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* User Info Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <img
                src={userIconSrc || "https://via.placeholder.com/128?text=User"}
                alt="User Avatar"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-2xl transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {user.name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="rounded-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-8 sm:mb-10 text-center">
            Your Favorite Avengers
          </h3>

          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg sm:text-xl">
                No favorite Avengers selected yet.
              </p>
              <p className="text-gray-500 mt-2 text-base sm:text-lg">
                Start building your team!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {favorites
                .filter((fav) => fav.type === "hero")
                .map((fav) => {
                  const avenger = avengerData.find(
                    (a) => a.name === fav.itemId
                  );
                  if (!avenger) return null;
                  const imgSrc = getImageSrc(avenger.file);

                  return (
                    <div
                      key={fav._id || fav.itemId}
                      onClick={() => remove(fav._id || fav.itemId)}
                      className="group cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    >
                      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={imgSrc}
                          alt={fav}
                          className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-white text-center mt-4 text-base sm:text-lg font-semibold">
                        {fav.itemId}
                      </p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
