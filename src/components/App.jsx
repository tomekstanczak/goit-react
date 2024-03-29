import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Movies from './movies/Movies';
import MoviesDetails from './movieDetails/MovieDetails';
import Reviews from './reviews/Reviews';
import Cast from './cast/Cast';
import NavLayout from './navLayout/NavLayout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
