import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export const Header = () => {

  const navigate = useNavigate();
  const search = (e) =>{
e.preventDefault();
const queryterm = e.target.search.value;

e.target.reset();
return navigate(`/search?q=${queryterm}`)
  }
  return (
    <nav
      className="navbar navbar-expand-md fixed-top navbar-dark px-4"
      style={{ background: 'linear-gradient(to right, #4e54c8, #8f94fb)' }}
    >
      <div className="container-fluid">
        <NavLink to='/' className="navbar-brand fw-bold fs-3" >🎬 Movie Hunt</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/toprated">Top rated</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/moviespopular">Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/moviesupcoming">Upcoming</NavLink>
            </li>
          </ul>

         <form className="d-flex" role="search" onSubmit={search}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search movies..."
    name="search" // <--- this is required to get e.target.search.value
    aria-label="Search"
  />
  <button className="btn btn-light" type="submit">Search</button>
</form>

        </div>
      </div>
    </nav>
  );
};
