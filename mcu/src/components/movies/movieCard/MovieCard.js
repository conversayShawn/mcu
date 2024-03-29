import React from "react";
import "./MovieCard.css";
import Card from "@mui/material/Card";

const MovieCard = () => {
  return (
    <Card className="movieContainer">
      {movieList.map((movie) => (
        <img src={movie.img} alt={movie.title} />
      ))}
    </Card>
  );
};

const movieList = [
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "X-Men",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
    title: "Spiderman",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Hulk",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "X2: X-Men United",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Spiderman 2",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "X-Men: The Last Stand",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Spiderman 3",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01_3.jpg",
    title: "Iron Man",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_crd_01_2.jpg",
    title: "The Incredible Hulk",
  },
  {
    img: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_crd_01_3.jpg",
    title: "Iron Man 2",
  },
];

export default MovieCard;
