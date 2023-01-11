import React from 'react'
import { Navigate, Route, Routes} from "react-router-dom"
import { LoginPage } from '../auth/pages/LoginPage'
import { PasajerosRoutes } from '../pasajeros/routes/PasajerosRoutes'
import { Navbar } from '../pasajeros/components'

export const AppRouter = () => {
  return (
   <>
   
    <Routes>
        
       
        <Route path="login" element= {<LoginPage/>}/>
        <Route path="/*" element= {<PasajerosRoutes/>}/>
        

        
    </Routes>
   </>
  )
}
