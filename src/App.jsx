import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout/Layout'
import {Home} from './pages/Home/Home'
import {Movie} from './pages/Movie/Movie'
import {Favorite} from './pages/Favorite/Favorite'
import { FilmDetails } from './pages/FilmDetails/FilmDetails'

function App() {
  const [count, setCount] = useState(0)
{/*path='/'- это путь к URL,  element={<Layout/>}
 Outlet - это денамичиские  */}
  return (
    <Routes>
        {/* Родительский маршрут.
          Layout содержит Header, Outlet и Footer. 
          :id  денамичиский маршут*/}
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
         <Route path='/movie' element={<Movie/>}/>
         <Route path='/favorite' element={<Favorite/>}/>
         <Route path='/movie/:id' element={<FilmDetails/>}/>    
         </Route>
    </Routes>
  )
}

export default App


// Routes — контейнер для маршрутов.
// Route — описание отдельного маршрута.