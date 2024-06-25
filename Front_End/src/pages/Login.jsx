import React, { useState } from 'react'
import { LoginEstudiante } from '../components/Estudiante/LoginEstudiante'
import { LoginAdministrador } from '../components/Administrador/LoginAdministrador'
import { LoginGestionador } from '../components/Gestionador/LoginGestionador'

export const Login = () => {
    const [login, setLogin]=useState('Estudiante')
    const comprobarLogin=(btnLogin)=>{
        if(btnLogin == 'Estudiante'){
            setLogin('Estudiante')
        }else if(btnLogin == 'Gestionador'){
            setLogin('Gestionador')
        }else if (btnLogin == 'Administrador'){
            setLogin('Administrador')
        }
    }
  return (

    <>
<nav className='flex justify-end font-bold gap-10 pr-10 text-2xl mt-8'>
    <button onClick={()=>comprobarLogin('Estudiante')}>Estudiante</button>
    <button onClick={()=>comprobarLogin('Gestionador')}>Gestionador</button>
    <button onClick={()=> comprobarLogin('Administrador')}>Administrador</button>
</nav>
    <section>
        {login == 'Estudiante'?
    <LoginEstudiante/>: login == 'Gestionador'?
    <LoginGestionador/>: login == 'Administrador'?
    <LoginAdministrador/>: 'Error Login'

  }
    </section>
    </>
  )
}
