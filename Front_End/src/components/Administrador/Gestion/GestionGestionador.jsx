import React, { useEffect, useState } from 'react'
import { NavBarAdministrador } from '../NavBarAdministrador'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
export const GestionGestionador = () => {
  const token = Cookies.get('token')
  const [data, setData] =useState()
  const [gestionador, setGestionador] = useState()
 
  useEffect(()=>{
      const obtenerUsuario=async()=>{
          const response = await axios.get('http://localhost:5555/administrador',{
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          const responseGestionador = await axios.get('http://localhost:5555/gestionador',{
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          setData(response.data) 
          setGestionador(responseGestionador.data)   
      }
      obtenerUsuario()
  },[gestionador])

  const deleteGestionador = async(id)=>{
    const responseEstudiantes = await axios.delete(`http://localhost:5555/gestionador/${id}`)

    if (responseEstudiantes.data.msg == 'Eliminado correctamente'){
      alert("Eliminado correctamente")
    }
}
  return (
    <>
      <NavBarAdministrador/>
    <section>
      <button className='bg-black text-white text-xl rounded-lg p-3 mb-6 mt-5'>{data &&<Link to={`/agregargestionador/${data.id}`}>Agregar Gestionador </Link>}</button>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Email
                </th>
                <th scope="col" class="px-6 py-3">
                Departamento
                </th>
                <th scope="col" class="px-6 py-3">
                Telefono
                </th>
                <th scope="col" class="px-6 py-3">
                    Editar
                </th>
                <th scope="col" class="px-6 py-3">
                    Borrar
                </th>
                
            </tr>
        </thead>
        <tbody>
            {gestionador && gestionador.map((gestion)=>(
            <tr key={gestion.id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {gestion.email}
                </th>
                <td class="px-6 py-4">
                    {gestion.departamento}
                </td>
                <td class="px-6 py-4">
                    {gestion.telefono}
                </td>
                <td class="px-6 py-4">
                    <Link to={`/actualizargestionador/${gestion.id}`}><img src="src/assets/update.png" className='w-10' alt="" /></Link>
                </td>
                <td class="px-6 py-4">
                <Link><img onClick={()=>deleteGestionador(gestion.id)} src="src/assets/delete.png" className='w-10' alt="" /></Link>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

    </section>
    </>
  )
}
