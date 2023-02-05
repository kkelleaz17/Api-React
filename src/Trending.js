import React, { useEffect, useState } from 'react'


import MoviePanel from './MoviePanel';


export default function Trending() {
    const [TrendingMovies,SetMovies]=useState(null);



    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=923fce3b23e579343be6040464e11b6b')
        .then(response => response.json())
        .then(data => {
            SetMovies(data.results);
          
        })
        .catch(error => {
          console.error(error);
        });
    }, []);






    return (
      <MoviePanel State={TrendingMovies} rank={true}/>
      )
}
