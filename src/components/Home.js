import React from "react";
import PopularMovies from "./PopularMovies";
import LatestMovies from "./LatestMovies";

export default function Home() {
  return (
    <div>
      <PopularMovies />
      <LatestMovies />
    </div>
  );
}
