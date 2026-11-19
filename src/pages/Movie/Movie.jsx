import { useState, useRef} from "react"
import { getByName } from "../../services/services"
import {Card} from '../../components/Card/Card'
import {Form} from '../../components/Form/Form'

export const Movie = () =>{
const [name, setName]=useState('')
const [movies, setMovies]=useState(null)
const [page, setPage]=useState(1)
// Ссылка на DOM-элемент input
const ref= useRef()
// Обработчик отправки формы
const handelSubmit=(event)=>{
    event.preventDefault()
setPage(1)
// Запрашиваем фильмы по названию
getByName(name, 1).then((response)=>{
// Сохраняем весь объект data,потому что Card использует movies.results
setMovies(response.data)
})
}
// Получаем значение из input
const handelInput=(event)=>{
// Деструктуризация event.target
const {value}=event.target
// Обновляем состояние name
setName(value)
}
// Очищаем поле поиска
 const clearInut=()=>{
    setName('')
// Возвращаем фокус в input
    ref.current.focus()
 }
    return<main>
{/* Передаём обработчики и состояния в Form */}
        <Form handelSubmit={handelSubmit}
        name={name}
        handelInput={handelInput}
        clearInut={clearInut}
        ref={ref}
        />
    <Card movies={movies} />

    </main>
}