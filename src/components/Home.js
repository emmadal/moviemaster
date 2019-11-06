import React from "react";
import PopularMovies from "./PopularMovies";
import PopularTv from "./PopularTv";

export default function Home() {
  return (
    <div>
      <PopularMovies />
      <PopularTv />
    </div>
  );
}
