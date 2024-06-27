import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
import { SideBar } from './SideBar'

export const DashGestionador = () => {
  const token = Cookies.get('token')
  const [data, setData] =useState()
  const [materiales, setMateriales] = useState()
  const [estudiantes, setEstudiantes] = useState()
  const [estudiante, setEstudiante] = useState()
  const [dialog, setDialog] = useState(false)
  const [idMaterial, setIdMaterial] = useState()
  const [materialAsignado, setMaterialAsignado] = useState()
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

  
  useEffect(()=>{
    const obtenerUsuario=async()=>{ 
        const responseEstudiantes = await axios.get('http://localhost:5555/estudiante',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setEstudiantes(responseEstudiantes.data)
    }
    obtenerUsuario()
},[])

  const serachEstudiante=async(id, email)=>{
    alert(`Estudiante Escodigo ${email}`)
    const responseEstudiantes = await axios.get(`http://localhost:5555/estudiante/${id}`,{
      headers:{
          Authorization: `Bearer ${token}`
      }
  })
  setDialog(false)
  setEstudiante(responseEstudiantes.data)
  console.log(materiales[idMaterial-1])
  const responseMaterial = await axios.patch(`http://localhost:5555/materiales/${idMaterial-1}`,{
             cantidad_material: materiales[idMaterial-1].cantidad_material,
             materiales: materiales[idMaterial-1].materiales,
             estado: "Asignado",
             codigo: materiales[idMaterial-1].codigo
          })
          console.log(responseMaterial.data)
  const guardarMaterialAsignado = await axios.post(`http://localhost:5555/materiales/estudiante`,{
      estudiante_id: id,
      material_id: idMaterial
  })
 alert(`${guardarMaterialAsignado.data.msg}`)

  }
  console.log(materiales)

  const openDialog=(id)=>{
    console.log(id)
    setIdMaterial(id)
    setDialog(true)
  }
  return (
   <article className='flex gap-4'>
     <SideBar/>
     <section className='w-full p-4'>
     <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
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
                <td onClick={()=>openDialog(material.id)} class="px-6 py-4 hover:cursor-pointer">
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
   {dialog&& (
    <dialog open={true} className='shadow-md p-6'>
      {estudiantes && estudiantes.map((estudiante)=>(
        <>
        <h1 className='font-bold mt-3'>Estudiante</h1>
        <h1 className='mt-3 '>Email: {estudiante.email}</h1>
        <h1>Telefono: {estudiante.telefono}</h1>
        <button className='font-bold'  onClick={()=> serachEstudiante(estudiante.id, estudiante.email)}>Escoger</button>
        </>
      ))}
      <button className='font-bold bg-black text-white p-3 rounded-md w-full mt-5' onClick={()=>setDialog(false)}>Cerrar </button>
    </dialog>
   )}
     </section>
   </article>
  )
}
