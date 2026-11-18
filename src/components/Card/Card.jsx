import * as SC from './card.stayled'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import films from '../../assets/films.avif'
export const Card=({movies})=>{
    return<SC.MovieList>
    {movies?.results.map(({id,title,poster_path,vote_average,release_date})=>
            <li key={id}>
                <img width='400px' height='600px' src={poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}`: films} alt={title}/>
                <h2>{title}</h2>
                <p> <FaRegStarHalfStroke /> {vote_average.toFixed(1)}</p>
                <p>  {release_date}</p>    {/*конвертировать дату */} 
            </li>
            )}
    </SC.MovieList>
}