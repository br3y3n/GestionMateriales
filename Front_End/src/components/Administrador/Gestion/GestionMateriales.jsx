import React, { useEffect, useState } from 'react'
import { NavBarAdministrador } from '../NavBarAdministrador'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
export const GestionMateriales = () => {
    const token = Cookies.get('token')
    const [data, setData] =useState()
    const [materiales, setMateriales] = useState()
   
    useEffect(()=>{
        const obtenerUsuario=async()=>{
            const response = await axios.get('http://localhost:5555/administrador',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            const responseMaterial = await axios.get('http://localhost:5555/materiales',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setData(response.data) 
            setMateriales(responseMaterial.data)   
        }
        obtenerUsuario()
    },[])
  return (
    <>
    <NavBarAdministrador/>
    <section>
      <button className='bg-black text-white text-xl rounded-lg p-3 mb-6 mt-5'>{data &&<Link to={`/ingresarmateriales/${data.id}`}>AgregarMateria </Link>}</button>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Cantidad Material
                </th>
                <th scope="col" class="px-6 py-3">
                Materiales
                </th>
                <th scope="col" class="px-6 py-3">
                estado
                </th>
                <th scope="col" class="px-6 py-3">
                    Codigo
                </th>
                
            </tr>
        </thead>
        <tbody>
            {materiales && materiales.map((material)=>(
            <tr key={material.id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {material.cantidad_material}
                </th>
                <td class="px-6 py-4">
                    {material.materiales}
                </td>
                <td class="px-6 py-4">
                    {material.estado}
                </td>
                <td class="px-6 py-4">
                    {material.codigo}
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
