import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function OurWork() {
  const [movies, setMovies] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/db.json");
      const json = await response.json();
      return json.movies;
    };

    fetchMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));
  }, [movies]);

  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      {movies?.map((movie) => (
        <Movie
          title={movie.title}
          img={movie.mainImg}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </Work>
  );
}

//Movie component
const Movie = ({ title, id, img }) => {
  return (
    <MovieStyle>
      <h2>{title}</h2>
      <div className="line"></div>
      <Link to={`/work/${id}`}>
        <img src={img} alt="athlete" />
      </Link>
    </MovieStyle>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const MovieStyle = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
