import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Description from "./Description";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState([
    {
      title:"Le cristal magique",
      rate: 3,
      synopsis:
      "Latte n’est pas un petit hérisson ordinaire ! Elle déborde d’énergie et d’une imagination presque trop vive. Un jour, les animaux ...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/dGxUijZeGOiA7FN6tDxBpZWvpwY.jpg',
      trailerlink: (
        <iframe width="560"
         height="315" 
         src="https://www.youtube.com/embed/-I2jKMGs6-8" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen>

         </iframe>
      ),
      description: "Animation Movie",
      id: uuidv4(),
    },
    {
      title: "La Reine des neiges",
      rate: 5,
      synopsis:
      "Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-delà des portes d’Arendelle à la recherche de réponses sur le passé d’Elsa. Cette dernière...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/6zbuHXiuCdHZ57fZOlfUknpzCjU.jpg',
      trailerlink: (
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/uyP70r9PS6A" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
      ),
      description: "Animation Movie",
      id: uuidv4(),
    },
    {
      title: "La Grande Aventure des Mojicons 2",
      rate: 2,
      synopsis:
      "Moji et Brainpot embarquent pour une aventure inédite ! Le virus Mydoom...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/duaLZVCTrDOsqCoCNdvElf9d5vB.jpg',
      trailerlink: (
        <iframe width="560"
         height="315" 
        src="https://www.youtube.com/embed/oDu1ap2eb3A" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen>

        </iframe>
      ),
      description: "Animation Movie",
      id: uuidv4(),
    },
    {
      title: "Leo Da Vinci",
      rate: 4,
      synopsis:
      " Leo Da Vinci est un jeune inventeur vivant en Italie à la fin du Moyen-Âge, avec ses amis Lorenzo et la belle Lisa,...",
      posterurl:
      'https://image.tmdb.org/t/p/w185/1D0yvcGux9XGMQ1s6U9KwvTImPc.jpg',
      trailerlink: (
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/c4q-EQkLrk4" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
      ),
      description: "Animation Movie",
      id: uuidv4(),
    },
    {
      title: "Bigfoot Junior",
      rate: 3,
      synopsis:
      "Adam, un adolescent rêveur et solitaire, doté de pouvoirs surnaturels, décide de partir à la recherche de son père...",
      posterurl:
      'https://wwv.bonstreaming.com/wp-content/uploads/2017/12/1513002428_yctlz.jpg',
      trailerlink: (
        <iframe width="560" 
        height="315" 
        src="https://www.youtube.com/embed/TKNYU_M6O5Y" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
      ),
      description: "Animation Movie",
      id: uuidv4(),
    },
  ]);
  return (
    <div className="App">
      <Router>
        <MovieList movies={movies} />
        <Route
          path="/movie/:id"
          render={(props) => <Description {...props} movies={movies} />}
        />
      </Router>
    </div>
  );
}

export default App;