import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

const MovieList = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(1);
  const [addmovie, setAddmovie] = useState({
    title: "",
    rate: "",
    synopsis: "",
    posterurl: "",
    description: "",
    trailerlink: "",
    id: uuidv4(),
  });
  const [show, setShow] = useState(false);

  const [listMovies, setlistMovies] = useState([]);
  const handleMovie = (e) => {
    setAddmovie({ ...addmovie, [e.target.name]: e.target.value });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewMovie = () => {
    setlistMovies([...listMovies, addmovie]);
    setAddmovie({
      title: "",
      rate: 0,
      synopsis: "",
      posterurl: "",
      description: "",
      trailerlink: "",
      id: uuidv4(),
    });
    setShow(false);
  };
  movies = [...movies, ...listMovies];

  return (
    <div>
      <div>
        <div>
          <Button variant="warning" onClick={handleShow}>
            Do you want to add a movie ?
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Title</label>
              <br />
              <input
                value={addmovie.title}
                type="text"
                name="title"
                placeholder="Enter The Title"
                onChange={handleMovie}
              />
              <br />
              <label>Description</label>
              <br />
              <select
                id="description"
                name="description"
                onChange={handleMovie}
              >
                <option value={addmovie.description}>Animation</option>
                <option value={addmovie.description}>Action</option>
                <option value={addmovie.description}>Drama</option>
                <option value={addmovie.description}>Comedian</option>
                <option value={addmovie.description}>Romantic</option>
                <option value={addmovie.description}>Musical</option>
              </select>
              <br />
              <label>Synopsis</label>
              <br />
              <input
                value={addmovie.synopsis}
                name="synopsis"
                type="text"
                placeholder="Enter The Synopsis"
                onChange={handleMovie}
                maxlength="129"
              />
              <br />
              <label>Poster Url</label>
              <br />
              <input
                value={addmovie.posterurl}
                type="text"
                name="posterurl"
                placeholder="Enter The Poster Url"
                onChange={handleMovie}
              />
              <br />
              <label>Rate</label>
              <br />
              <input
                value={addmovie.rate}
                type="number"
                name="rate"
                max="5"
                min="1"
                placeholder="Enter The Rate"
                onChange={handleMovie}
              />
              <br />
              <label>Trailer</label>
              <br />
              <input
                value={addmovie.trailerlink}
                type="text"
                name="trailerlink"
                placeholder="Enter The Trailer Link"
                onChange={handleMovie}
              />
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={addNewMovie}>
                Add The Movie
              </Button>
            </Modal.Footer>
          </Modal>
          <div />
        </div>
      </div>
      <Search search={setSearch} star={star} setStar={setStar} />
      <div className="container">
        {movies
          .filter(
            (el) =>
              el.title.toUpperCase().includes(search.toUpperCase().trim()) &&
              el.rate >= star
          )
          .map((el) => (
            <MovieCard movie={el} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;