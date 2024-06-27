import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
export const DashEstudiante = () => {
  const token = Cookies.get('token')
  console.log(token)
  const [estudiante, setEstudiante] = useState()
  const [materialAsignado, setMaterialAsignado] = useState()
  const [msg, setMsg] = useState()
  useEffect(()=>{
   const obtenerEstudiante=async()=>{
    try {   
      const response = await axios.get('http://localhost:5555/estudiante/auth',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setEstudiante(response.data)

      if(response.data[0].id){
        const responseMaterialAsignado = await axios.get(`http://localhost:5555/estudiante/obtenermateriales/${response.data[0].id}`);
        setMsg(responseMaterialAsignado.data.msg)
        setMaterialAsignado(responseMaterialAsignado.data)
      }
    } catch (error) {
      console.error(error)
    }
   }
   obtenerEstudiante()
  },[])
  
  console.log(materialAsignado)
  console.log(estudiante)
  return (
  <article>
    <h1 className='text-5xl mt-10 font-bold ml-5'>Bienvenido</h1>
    <h2 className='mt-10 text-2xl ml-5 font-semibold'>Materiales asignados</h2>

    {
      msg && <h1>{msg}</h1>
    }
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Cantidad Materiales
                </th>
                <th scope="col" class="px-6 py-3">
                Materiales
                </th>
                <th scope="col" class="px-6 py-3">
                Telefono
                </th>
            </tr>
        </thead>
        <tbody>
            {materialAsignado && materialAsignado.map((material)=>(
            <tr key={material.id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {material.cantidad_material}
                </th>
                <td class="px-6 py-4">
                    {material.materiales}
                </td>
                <td class="px-6 py-4">
                    {material.telefono}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
  </article>
  )
}
