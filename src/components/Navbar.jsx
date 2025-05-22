import { useEffect, useState } from "react";

const NavBar = ({ profile }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log("Scroll Y:", window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      } flex justify-between items-center px-8 py-4 text-white`}
    >
      <div className="flex items-center space-x-8 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="w-32 h-10"
        />

        <div className="hidden md:flex space-x-4 text-xs">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            TV Shows
          </a>
          <a href="#" className="hover:text-gray-400">
            Movies
          </a>
          <a href="#" className="hover:text-gray-400">
            Games
          </a>
          <a href="#" className="hover:text-gray-400">
            New & Popular
          </a>
          <a href="#" className="hover:text-gray-400">
            My List
          </a>
          <a href="#" className="hover:text-gray-400">
            Browse by Languages
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search cursor-pointer hover:text-gray-400"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>

        <a href="#" className="hover:text-gray-400 cursor-pointer">
          Kids
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-bell cursor-pointer hover:text-gray-400"
          viewBox="0 0 16 16"
        >
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
        </svg>

        {profile ? (
          <img
            src={profile.image}
            alt={profile.name}
            className="w-8 h-8 rounded-md cursor-pointer"
          />
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-md"></div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
