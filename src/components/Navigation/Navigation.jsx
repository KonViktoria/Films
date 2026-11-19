// NavLink создаёт ссылки для перехода между страницами.
import { NavLink } from "react-router-dom"
import mainNavigation from '../../data/navigation.json'
import *as SC from './navigation.styled'

export const Navigation =()=>{
     return <SC.Nav>
          {/* Перебираем массив mainNavigation методом map().
                Для каждого объекта создаём отдельный li. */}
     <SC.NavList>
      {mainNavigation.map(({id,text, href})=>
   <li key ={id}>

{/* NavLink создаёт ссылку.to={href} — адрес перехода.
{text} — текст ссылки. */}
                        
    <NavLink to={href}>{text}</NavLink>
      </li>
    )}
     </SC.NavList>
     </SC.Nav>
}