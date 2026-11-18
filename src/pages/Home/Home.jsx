import { useEffect, useState } from "react"
import { getPopular } from "../../services/services"
import * as SC from './home.styled'
import {Card} from '../../components/Card/Card'

export const Home=()=>{
const [topMovies, setTopMovies]=useState(null)
const [page,setPage]=useState(1)

useEffect(()=>{
getPopular(page).then((response)=>{
setTopMovies(response.data);
})
},[])

return <main>
<Card movies={topMovies} />
</main>

}