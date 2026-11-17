import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout/Layout'
import {Home} from './pages/Home/Home'
import {Movie} from './pages/Movie/Movie'
import {Faworite} from './pages/Faworite/Faworite'

function App() {
  const [count, setCount] = useState(0)
//path='/'- это путь к URL,  element={<Layout/>}
//Outlet - это денамичиские 
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
         <Route path='/movie' element={<Movie/>}/>
         <Route path='/faworite' element={<Faworite/>}/>
      </Route>
    </Routes>
  )
}

export default App
