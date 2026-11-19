import * as SC from './card.stayled'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import films from '../../assets/films.avif'
import { NavLink } from 'react-router-dom';
// ({ movies }) — деструктуризация props.
// Родительский компонент передаёт нам пропс movies.
// Мы сразу достаём его из объекта props.
export const Card=({movies})=>{
    return<SC.MovieList>
         {/* Тернарный оператор: условие ? да : нет Если poster_path существует,
          используем постер с сервера TMDB.Если poster_path отсутствует,показываем нашу запасную картинку films.*/}
    {movies?.results.map(({id,title,poster_path,vote_average,release_date})=>
            <li key={id}>
                <NavLink to={`/movie/${id}`}>
                <img width='400px' height='600px' src={poster_path ? `https://image.tmdb.org/t/p/w400/${poster_path}`: films} alt={title}/>
                <h2>{title}</h2>
         {/* toFixed(1) округляет число до одного знака после точки.*/}
                <p> <FaRegStarHalfStroke /> {vote_average.toFixed(1)}</p>
                <p>  {release_date}</p>    {/*конвертировать дату */} 
                </NavLink>
            </li>
            )}
    </SC.MovieList>
}