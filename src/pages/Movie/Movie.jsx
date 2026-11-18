import { useState, useRef} from "react"
import { getByName } from "../../services/services"
import {Card} from '../../components/Card/Card'
import {Form} from '../../components/Form/Form'

export const Movie = () =>{
const [name, setName]=useState('')
const [movies, setMovies]=useState(null)
const [page, setPage]=useState(1)
const ref= useRef()

const handelSubmit=(event)=>{
    event.preventDefault()
setPage(1)
getByName(name, 1).then((response)=>{
setMovies(response.data)
})
}

const handelInput=(event)=>{
    const {value}=event.target
    setName(value)
}

 const clearInut=()=>{
    setName('')
    ref.current.focus()
 }


    return<main>
        <Form handelSubmit={handelSubmit}
        name={name}
        handelInput={handelInput}
        clearInut={clearInut}
        ref={ref}
        />
    <Card movies={movies} />

    </main>
}