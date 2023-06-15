import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MoviePage from "./pages/Movies";
import Net from "./pages/Net.jsx";
import Player from "./pages/Player";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        {/* <Route exact path="/new" element={<Player />} /> */}
        // <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Net />} />
      </Routes>
    </BrowserRouter>
  );
}