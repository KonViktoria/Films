import { NavLink } from "react-router-dom"
import mainNavigation from '../../data/navigation.json'
export const Navigation =()=>{
     return <nav>
     <ul>
      {mainNavigation.map(({id,text, href})=>
      //для каждой ли прописываем оптимизацию 

      //path='/faworite'  должен совподать с  to={href} 
   <li key ={id}>
    <NavLink to={href}>{text}</NavLink>
      </li>
    )}
     </ul>
     </nav>
}