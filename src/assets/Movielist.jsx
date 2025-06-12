import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import useFetch from '../../hooks/Usefetch';


export const Movielist = ({ title , apipath}) => {
const {data : movies} = useFetch(apipath);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const navigate = useNavigate();

  return (
    <main className="container pt-5">

      <h4
  className="text-center text-primary mb-4 fw-bold display-6"
  style={{
    marginTop: '40px',  
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '2rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }}
>
  {title}
</h4>


      <div className="border rounded p-4 bg-light text-center">
        {title === "Your movie guide" && (
          <h5>Explore Movieshunt — your guide to stream the best movies for free anytime.</h5>
        )}
        {title === "Your popular movies" && (
          <h5>Check out the most talked-about and trending movies of this year.</h5>
        )}
        {title === "Your upcoming movies" && (
          <h5>Stay tuned for the most awaited movies releasing soon.</h5>
        )}
        {title === "Your top rated movies" && (
          <h5>Browse the top-rated movies loved by critics and audiences alike.</h5>
        )}

        <button className="btn btn-primary px-4 mt-3" onClick={() => navigate('/moviesupcoming')}>
          Explore Now
        </button>
      </div>

      <h4
        className="text-center mt-7 fw-bold display-10 border-bottom py-4"
        style={{
          fontFamily: "'Bebas Neue', sans-serif", 
          fontSize: '1rem', 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          fontWeight: 'bold', 
        }}
      >
        {title}
      </h4>

      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {movies.map((movie)=>{
        return (
          <Card key={movie.id}  movie={movie}/>
        )
      })}
      </div>
    </main>
  );
};
