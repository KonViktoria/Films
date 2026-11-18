// NavLink создаёт ссылки для перехода между страницами.
import { NavLink } from "react-router-dom"
import mainNavigation from '../../data/navigation.json'
export const Navigation =()=>{
     return <nav>
          {/* Перебираем массив mainNavigation методом map().
                Для каждого объекта создаём отдельный li. */}
     <ul>
      {mainNavigation.map(({id,text, href})=>
   <li key ={id}>

{/* NavLink создаёт ссылку.
                        to={href} — адрес перехода.
                        {text} — текст ссылки. */}
                        
    <NavLink to={href}>{text}</NavLink>
      </li>
    )}
     </ul>
     </nav>
}