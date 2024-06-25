import { BrowserRouter, useRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { DashEstudiante } from "./components/Estudiante/DashEstudiante"
import { DashGestionador } from "./components/Gestionador/DashGestionador"
import { GestionMateriales } from "./components/Administrador/Gestion/GestionMateriales"
import { GestionEstudiantes } from "./components/Administrador/Gestion/GestionEstudiantes"
import { GestionGestionador } from "./components/Administrador/Gestion/GestionGestionador"
import { PostMateriales } from "./components/Administrador/POST/PostMateriales"
import { PostEstudiante } from "./components/Administrador/POST/PostEstudiante"
import { ActualizarEstudiante } from "./components/Administrador/PATCH/ActualizarEstudiante"
import { PostGestionador } from "./components/Administrador/POST/PostGestionador"
import { ActualizarGestionador } from "./components/Administrador/PATCH/ActualizarGestionador"

function App() {
 
  const AppRputer =()=>{
    const routes = useRoutes([
      {path:'/', element:<Login/>},
      {path:'/estudiante', element:<DashEstudiante/>},
      {path:'/gestionador', element:<DashGestionador/>},
      {path:'/administrador', element:<GestionMateriales/>},
      {path:'/gestionestudiantes', element:<GestionEstudiantes/>},
      {path:'/gestiongestionadores', element:<GestionGestionador/>},
      {path:'/ingresarmateriales/:id', element:<PostMateriales/>},
      {path:'/agregarestudiante', element:<PostEstudiante/>},
      {path:'/actualizarestudiante/:id', element:<ActualizarEstudiante/>},
      {path:'/agregargestionador/:id', element:<PostGestionador/>},
      {path:'/actualizargestionador/:id', element:<ActualizarGestionador/>}
    
    ])
    return routes
  }
  return (
    <>
    <BrowserRouter>
    <AppRputer/>
    </BrowserRouter>
    </>
  )
}

export default App
