import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const PostMateriales = () => {
    const [cantidad_materiales, setCantidad_materiales] =useState()
    const [materiales, setMateriales] = useState()
    const [codigo, setCodigo] = useState()
    const {id} = useParams()
   const handleSubmit =async(e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:5555/materiales',
      {
        cantidad_material: cantidad_materiales,
        materiales:materiales,
        codigo:codigo,
        estado:"No Entregado",
        administrador_id: id
      })
      if(response.data.id){
          setCantidad_materiales('')
          setCodigo('')
          setMateriales('')
        return alert("Material agregado correctamente")
      }
   }

  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow-lg shadow-blue-200 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Ingresar Materiales
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad Materiales</label>
                    <input onChange={e=>setCantidad_materiales(e.target.value)}  type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Materiales</label>
                    <input onChange={e=>setMateriales(e.target.value)} type="text" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>

                </div>
                <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo</label>
                    <input onChange={e=>setCodigo(e.target.value)} type="text" name="confirm-password" id="confirm-password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                
                <button type="submit" className="border-2 w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                
            </form>
        </div>
    </div>
</div>
  )
}
