import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import titles from "../content/titles";
import React, { useState, useEffect } from "react";
import Browse from "../components/Browse";
import categories from "../content/categories";

export default function Home() {
  const location = useLocation();
  const profile = location.state?.profile;

  const [current, setCurrent] = useState(0);
  const length = titles.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 10000);
    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(titles) || length === 0) {
    return (
      <div>
        <NavBar profile={profile} />
        <p className="p-8">No titles available</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="h-[90vh] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-20 ">
          <NavBar profile={profile} />
        </div>
        {titles.map((item, index) => (
          <div
            key={item.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-10" />
            {index === current && (
              <div className="absolute bottom-40 left-10 right-10 text-white max-w-full flex flex-col gap-6">
                <div className="flex flex-col items-start gap-4 max-w-xl text-left">
                  <img
                    src="https://vectorseek.com/wp-content/uploads/2023/10/Netflix-Series-Logo-Vector.png"
                    alt="Netflix Logo"
                    className="w-40"
                  />
                  <h1 className="text-5xl font-bold">{item.title}</h1>
                  <p className="text-lg">{item.description}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                      </svg>
                      Play
                    </button>
                    <button className="flex items-center gap-2 bg-gray-600 opacity-75 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z" />
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 .875-.252 1.02-.598.053-.12.104-.243.162-.367l.088-.416c.287-.07.345-.176.288-.469l-.738-3.468c-.194-.897-.105-1.319-.808-1.319zM8 4.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
                      </svg>
                      More Info
                    </button>
                  </div>
                  <div className="text-lg border bg-gray-700 border-l-white opacity-75 px-6 py-1 rounded-md">
                    {item.rating || "N/A"}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Browse data={categories} />
    </div>
  );
}
