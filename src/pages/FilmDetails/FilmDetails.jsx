import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {byId} from '../../services/services'
import *as SC from './filmDetails.styled'
//забирает динамическое значение с URL сторки 

export const FilmDetails =()=>{
const [movies, setMovies]=useState(null)
const {id}=useParams()

console.log(movies);

useEffect(()=>{
    byId(id).then((response)=>{
        setMovies(response.data)  
    })

},[id])
    return <SC.Wrapper>
 <SC.Img src= {`https://image.tmdb.org/t/p/original/${movies?.poster_path}`} alt={movies?.title}/>
   <div><h1>{movies?.title}</h1>
   <p>{movies?.overview}</p>
   <p>{movies?.release_date}</p>
   <p>{movies?.vote_average.toFixed(1)}</p>

 <ul>
    {movies?.genres.map((genre)=>
    <li key={genre.id}>
        {genre.name}
    </li>)}
 </ul>
 </div>
    </SC.Wrapper>
}