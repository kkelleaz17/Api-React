import React from 'react'
import './TrendingStyles.css'

export default function MoviePanel(props) {
  return (
    <div className='TrendingBody'>
  {props.State === null ? (
    null
  ) : (
    <>
      {props.State.map((movie,index) => (
          <div key={movie.id} className='Items'>
 
           <h1 className='Type'>{(movie.media_type !== undefined)? movie.media_type : movie.original_language}</h1>
           <h1 className='Rank'>{(props.rank === false)? movie.release_date : index+1}</h1>



          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.name === undefined ? movie.title : movie.name}
            
          />
           <h1 className='Title'>{(movie.name === undefined) ? movie.title : movie.name}</h1>

           <div className='Description'>
              {movie.overview}
           </div>
           <div className='Effect'></div>



          </div>
      ))}
    </>
  )}
</div>
  )
}
