// Это место для отображения вложенных страниц.
import { Outlet } from "react-router-dom"

import{Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
export const Layout =()=>{
    return <>
    <Header/>

      {/* Здесь будет отображаться текущая страница */}
    <Outlet/>

    
   <Footer/>
    </>
}