import React,{useState} from 'react'
import './Search.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MoviePanel from './MoviePanel';



export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

     const  [MoviesList,SetMoviesList]=useState(null)
 


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };



   const SearchStuff = async()=>{
       await fetch('https://api.themoviedb.org/3/search/movie?api_key=923fce3b23e579343be6040464e11b6b&query='+searchTerm)
       .then(res=>res.json()).then(res=>{SetMoviesList(res.results);console.log(res.results)});
   };


   
    





  return (

     <div className='BodySearch'>


     <div className='InputBox'>
    <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a movies"
        className='Inputs'
      />
            <FontAwesomeIcon icon={faSearch} className='icon' onClick={()=>{SearchStuff()}}/>
     </div> 

             


     

     <MoviePanel State={MoviesList} rank={false}/>












    </div>
  )
}
