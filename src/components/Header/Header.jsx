import { Navigation } from "../Navigation/Navigation"

export const Header=()=>{
    return <header>
         {/* Внутри HTML-тега header вызываем компонент Navigation.
            Именно он создаст ссылки для перехода между страницами. */}
       <Navigation/>
    </header>
}