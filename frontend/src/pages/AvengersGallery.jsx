import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HeroCard from "../components/HeroCard";

const avengerData = [
  { name: "Ant-Man", file: "Antman.jpg" },
  { name: "Black Panther", file: "BlackPanther.jpg" },
  { name: "Black Widow", file: "Blackwidow.jpg" },
  { name: "Captain America", file: "CaptainAmerica.jpg" },
  { name: "Captain Marvel", file: "CaptainMarvel.jpg" },
  { name: "Daredevil", file: "Daredevil.jpg" },
  { name: "Deadpool", file: "Deadpool.jpg" },
  { name: "Doctor Strange", file: "DoctorStrange.jpg" },
  { name: "Groot", file: "Groot.jpg" },
  { name: "Hawkeye", file: "Hawkeye.jpg" },
  { name: "Hulk", file: "Hulk.jpg" },
  { name: "Iron Man", file: "Ironman.jpg" },
  { name: "Loki", file: "Loki.jpg" },
  { name: "Spider-Man", file: "Spiderman.jpg" },
  { name: "Thor", file: "Thor.jpg" },
  { name: "Winter Soldier", file: "WinterSoldier.jpg" },
  { name: "Wasp", file: "Wasp.jpg" },
  { name: "War Machine", file: "WarMachine.jpg" },
  { name: "Vision", file: "Vision.jpg" },
  { name: "She-Hulk", file: "SheHulk.jpg" },
  { name: "Shang-Chi", file: "Shangchi.jpg" },
  { name: "Ms. Marvel", file: "MsMarvel.jpg" },
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

export default function AvengersGallery() {
  const { user } = useAuth();
  // useFavorites is now used inside HeroCard
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-black py-4 px-2 sm:py-8 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center text-red-600 mb-6 sm:mb-10">
          Avengers Assembled
        </h1>

        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-3 xs:gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-6 sm:gap-y-10 lg:gap-y-14">
          {avengerData.map(({ name, file }) => (
            <HeroCard key={name} hero={{ name }} imageSrc={getImageSrc(file)} />
          ))}
        </div>
      </div>
    </div>
  );
}
