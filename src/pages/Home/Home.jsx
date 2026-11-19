import { useEffect, useState } from "react"
import { getPopular } from "../../services/services"
import * as SC from './home.styled'
import {Card} from '../../components/Card/Card'

export const Home=()=>{
const [topMovies, setTopMovies]=useState(null)
const [page,setPage]=useState(1)
// Загружаем популярные фильмы после монтирования компонента
useEffect(()=>{
 // Отправляем запрос и получаем Promise
getPopular(page).then((response)=>{
// Сохраняем данные сервера в состояние
setTopMovies(response.data);
})
},[])

return <main>
{/* Передаём полученные фильмы в компонент Card */}
<Card movies={topMovies} />
</main>

}