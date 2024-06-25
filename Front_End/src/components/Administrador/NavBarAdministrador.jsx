import React from 'react'
import { Link } from 'react-router-dom'
export const NavBarAdministrador = () => {
  return (
<nav className='text-2xl flex justify-end font-bold gap-5 mt-10 pr-5'>
        <Link to={'/administrador'}>Materiales</Link>
        <Link to={'/gestionestudiantes'}>Estudiantes</Link>
        <Link to={'/gestiongestionadores'}>Gestionadores</Link>
    </nav>
  )
}
