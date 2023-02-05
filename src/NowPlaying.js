

import React,{useState,useEffect} from 'react'
import MoviePanel from './MoviePanel';




export default function NowPlaying() {

    /// 
    /// https://api.themoviedb.org/3/movie/now_playing?api_key=923fce3b23e579343be6040464e11b6b&language=en-US&page=1
  
  
  
  
    const [CurrentMovies,SetMovies]=useState(null);



    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=923fce3b23e579343be6040464e11b6b&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
            SetMovies(data.results);
            console.log(data.results)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);






    return (
      <MoviePanel State={CurrentMovies} rank={false}/>

      )
}
