import { useEffect, useState } from "react"
import { getPopular } from "../../services/services"
import {MovieList} from './home.styled'


export const Home=()=>{
const [topMovies, setTopMovies]=useState(null)
const [page,setPage]=useState(1)
console.log(topMovies);

useEffect(()=>{
getPopular(page).then((response)=>{
setTopMovies(response.data);

})


},[])
    return <>
<main>
    <MovieList>
        {topMovies?.results.map(({id,title,poster_path,vote_average,release_date})=>
        <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt={title}/>
            <h2>{title}</h2>
            <p>Average: {vote_average}</p>
            <p> Data: {release_date}</p>
        </li>
        )}
    </MovieList>
</main>
    </>
}