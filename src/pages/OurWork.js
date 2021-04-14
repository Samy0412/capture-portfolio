import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

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
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
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
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={`/work/${id}`}>
        <Hide>
          <motion.img variants={photoAnim} src={img} alt="athlete" />
        </Hide>
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
const MovieStyle = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
