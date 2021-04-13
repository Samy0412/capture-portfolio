import React, { useState, useEffect } from "react";
//styles
import styled from "styled-components";

//router
import { useParams } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch("/db.json");
      const json = await response.json();
      return json.movies.find((movie) => movie.id === id);
    };

    fetchMovieDetails()
      .then((movieDetails) => setMovie(movieDetails))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie"></img>
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.6rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetails;
