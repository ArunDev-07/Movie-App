import React, { useState } from 'react';
import moviesdetails from '../../movies.json';
import { Link } from 'react-router-dom';

import './Card.css'

const Card = ({movie}) => {

  const [expand, Setexpand] = useState(true);

  const {poster_path,overview, vote_average ,id, vote_count,title} = movie;


  const image  = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : "";
  return (
    <>
    
        <div key={movie.id} className="col" title={title}>
          <div className="card shadow-sm ">
            <img
              src={image} // Use movie image if available
              alt={movie.first_name}
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title ">{movie.title}</h6>
              {/* Optional: Add more fields if needed */}
              {/* <p className="card-text">{movie.description}</p> */}
              <p className={`para-${expand ? 'expand' : ""}`}>{overview}</p>
              <div className='read'>
             <Link to={`/movie/${id}`} className='btn btn-sm btn-outline-primary stretched-link' onClick={()=>Setexpand(!expand)} >Read more</Link>
           <small className='gap'>
  <i className='bi bi-star-fill text-warning'></i> {vote_average.toFixed(1)} Stars | {vote_count} ratings
</small>

            
            </div>
            </div>
          
          </div>
        </div>
    
    </>
  );
};

export default Card;


