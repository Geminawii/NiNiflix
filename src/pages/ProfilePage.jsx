import { useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const profiles = [
    {
      id: 1,
      name: "Teminire",
      image:
        "https://i.pinimg.com/736x/a4/c6/5f/a4c65f709d4c0cb1b4329c12beb9cd78.jpg",
    },
    {
      id: 2,
      name: "Eloho",
      image:
        "https://i.pinimg.com/736x/94/47/bd/9447bde81c28767be8111f445f85b9b8.jpg",
    },
    {
      id: 3,
      name: "Laolu",
      image:
        "https://i.pinimg.com/736x/fd/a7/9a/fda79a9471d43a39d2d8eabc8720f8aa.jpg",
    },
    {
      id: 4,
      name: "Guest",
      image:
        "https://i.pinimg.com/736x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg",
    },
  ];

const handleClick = (profile) => {
  setSelectedProfile(profile);
  setIsLoading(true);

  setTimeout(() => {
    setIsLoading(false);
    navigate("/home", { state: { profile } });
  }, 2000);
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-netflix transition-all duration-500">
      {!selectedProfile && (
        <h1 className="text-3xl mb-8 font-netflix">Who's watching?</h1>
      )}

      {!selectedProfile ? (
        <div className="flex space-x-14 mb-20 transition-all">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleClick(profile)}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src={profile.image}
                alt={`${profile.name}'s Profile`}
                className="w-32 h-32 rounded-md"
              />
              <p className="mt-2 text-gray-600">{profile.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center transition-all duration-500">
          <img
            src={selectedProfile.image}
            alt={selectedProfile.name}
            className="w-40 h-40 rounded-md mb-4 scale-110 transition-all duration-500"
          />
          <p className="text-xl text-gray-600">{selectedProfile.name}</p>

          {isLoading && (
            <div className="mt-8 relative h-16">
              <Loader />
            </div>
          )}
        </div>
      )}

      {!selectedProfile && (
        <div>
          <button className="px-16 py-2 border-2 border-gray-600 text-gray-600 rounded-none cursor-pointer ">
            MANAGE PROFILES
          </button>
        </div>
      )}
    </div>
  );
}
