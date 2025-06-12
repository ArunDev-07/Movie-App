import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Card from './Card';
import useFetch from '../../hooks/Usefetch';

export const Search = ({ apipath }) => {
  const [searchparams] = useSearchParams();
  const queryterm = searchparams.get('q');
  const { data: movies } = useFetch(apipath, queryterm);

  useEffect(() => {
    document.title = `Search for ${queryterm}`;
  }, [queryterm]);

  return (
    <div className="cont pt-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          {movies.length === 0 ? (
            <>
              <h3 className="fw-bold text-danger">
                No results found for "{queryterm}"
              </h3>
              <Link to="/" className="btn btn-outline-primary mt-3">
                Go to Home Page
              </Link>
            </>
          ) : (
            <>
              <h3 className="fw-bold text-primary">
                Results for "{queryterm}"
              </h3>
              <p className="text-muted">{movies.length} movies found</p>
            </>
          )}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {movies.map((movie)=>{
        return (
          <Card key={movie.id}  movie={movie}/>
        )
      })}
      </div>
      </div>
    </div>
  );
};
