import React, { useEffect,useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

import './Search.css'
import MoviePanel from './MoviePanel';



export default function Random() {

    const [searchTerm, setSearchTerm] = useState("");

     const  [MoviesList,SetMoviesList]=useState(null)
    
    useEffect(()=>{
        ////fetch(`https://api.themoviedb.org/3/discover/movie?api_key=<YOUR_API_KEY>&sort_by=popularity.desc`)

    },[]);


    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
    
    
       const SearchStuff = async()=>{
        console.log(searchTerm);
        var searchTermEnd = '';


        if(searchTerm === 'Popularity'){
            searchTermEnd = 'popularity.desc'
        }else  if(searchTerm === 'Revenue'){
            searchTermEnd = 'revenue.desc'
        }else  if(searchTerm === 'Likes'){
            searchTermEnd = 'vote_count.desc'
        }else  if(searchTerm === 'Release Date'){
            searchTermEnd = 'primary_release_date.desc'
        }





           await fetch('https://api.themoviedb.org/3/discover/movie?api_key=923fce3b23e579343be6040464e11b6b&sort_by='+searchTermEnd)         
           .then(res=>res.json()).then(res=>{SetMoviesList(res.results);console.log(res.results)});
       };
    
    

  return (
    <div className='BodyForRandom'>
    <div className='InputBox'>


    <select  value={searchTerm}
        onChange={handleChange}
        placeholder="Sort by"
        className='OptionsBox'>
        <option>Popularity</option>
        <option>Revenue</option>
        <option>Likes</option>
        <option>Release Date</option>
    </select>




       <FontAwesomeIcon icon={faShuffle}  className='icon' onClick={()=>{SearchStuff()}} />
     </div> 



    <MoviePanel State={MoviesList} rank={false}/>

  </div>

  )
}
