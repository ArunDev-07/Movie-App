import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Movielist } from '../Movielist'
import { Movieview } from '../Movieview'
import { Search } from '../Search'


const Allroutes = () => {
  return (
   <>
   <Routes>
 
   
    <Route path='/' element={<Movielist title="Your movie guide"   apipath="movie/now_playing"/>  } />
    <Route path='/moviespopular' element={<Movielist title="Your popular movies"  apipath="movie/popular"/>} />
    <Route path='/moviesupcoming' element={<Movielist title="Your upcoming movies"  apipath="movie/top_rated"/>} />
    <Route path='/toprated' element={<Movielist title="Your top rated movies"  apipath="movie/top_rated"/>} />
    <Route path='/movie/:id' element={<Movieview/>}/>
<Route path='/search' element={<Search  apipath="search/movie"/>}/>
    
    
   </Routes>
   </>
  )
}

export default Allroutes