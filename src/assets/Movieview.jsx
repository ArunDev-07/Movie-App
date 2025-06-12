import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { convertminutes } from './Components/utils';
import './Movie.css'

export const Movieview = () => {
  const [movie, setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const params = useParams();

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setMovie(result);
        console.log(result);
      } catch (err) {
        console.error('Error fetching movie:', err);
      }
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    document.title = movie.title || 'Movie Details';
  }, [movie.title]);

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : '';

  return (
    <div className='cont pt-5'>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0 p-3">
            <div className="row g-4 align-items-start">
              {/* Left side image */}
              <div className="col-md-5">
                {image && (
                  <img
                    src={image}
                    alt={movie.title}
                    className="img-fluid rounded shadow"
                  />
                )}
              </div>

              {/* Right side content */}
              <div className="col-md-7">
                <h3 className="text-primary mb-3">{movie.title}</h3>
                <p className="text-muted" style={{ textAlign: 'justify' }}>
                  {movie.overview}
                </p>

                {movie.genres && (
                  <div className="mb-2">
                    <strong>Genres: </strong>
                    {movie.genres.map((genre) => (
                      <span className="badge bg-secondary me-1" key={genre.id}>
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-3">
                  <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} stars |{' '}
                  <i className="bi bi-chat-left-text-fill text-success"></i> {movie.vote_count} reviews
                </p>

                <table className="table table-sm mt-3">
                  <tbody>
                    <tr>
                      <th>Runtime</th>
                      <td>{convertminutes(movie.runtime)}</td>
                    </tr>
                    <tr>
                      <th>Release Date</th>
                      <td>{movie.release_date}</td>
                    </tr>
                    <tr>
                      <th>Revenue</th>
                      <td>${movie.revenue?.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th>Budget</th>
                      <td>${movie.budget?.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex gap-3 mt-4">
                  <Link to="/" className="btn btn-outline-primary">
                    Back to Home
                  </Link>
                  {movie.imdb_id && (
                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-warning"
                    >
                      View in IMDb
                    </a>
                  )}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
