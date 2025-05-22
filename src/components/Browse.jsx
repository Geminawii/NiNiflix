import React from 'react';


const Browse = ({ data }) => {
  return (
    <div className="p-6 space-y-12 -mt-5">
      {data.map(({ category, movies }) => (
        <div key={category}>
          <h2 className="font-semibold text-xl text-white mb-1 flex justify-start">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {movies.map(({ id, title, thumbnail }) => (
              <div key={`${id}-${title}`} className="rounded-sm">
                <img
                  src={thumbnail}
                  alt={title}
                  className="w-full h-32 object-cover rounded-sm hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Browse;
