import { Navigation } from "../Navigation/Navigation"
import *as SC from './header.styled'
export const Header=()=>{
    return <SC.Header>
         {/* Внутри HTML-тега header вызываем компонент Navigation.
            Именно он создаст ссылки для перехода между страницами. */}
       <Navigation/>
    </SC.Header>
}