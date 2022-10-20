import React from "react";
import MovieItems from "./MovieItem";
import { List } from "./dataFile/MoviesList";

export default function Movies({theme}) {
  return (
    <div className="col md-4 raw" style={{backgroundColor: theme}}>
      {List.map((movies) => {
        return (
          <div key={movies.id} className="three my-3">
            <MovieItems
              imageUrl={movies.img.src}
              imageAlt={movies.img.alt}
              year={movies.year}
              title={`${movies.id}- ${movies.title}`}
              distributor={movies.distributor}
              amount={movies.amount}
            />
          </div>
        );
      })}
    </div>
  );
}
