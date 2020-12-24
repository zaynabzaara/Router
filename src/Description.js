import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
const Description = (props) => {
  console.log(props);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    setMovie(props.movies.filter((el) => el.id === props.match.params.id)[0]);
  });
  return (
    <div className="trailer">
      <h1 style={{ color: "sienna" }}>Movie Description</h1>
      {movie && <h1 style={{ color: "springgreen"}}> {movie.title} </h1>}
      {movie && <h2 style={{ color: "lime"}}>{movie.description}</h2>}
      {movie && <p>{movie.trailerlink}</p>}

      <Button variant="warning" onClick={() => props.history.goBack()}>
       GO BACK
      </Button>
    </div>
  );
};
export default Description;
