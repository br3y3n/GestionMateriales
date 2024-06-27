import { connection } from "../config/db.js";

import { DELETE_MATERIALE_ESTUDIANTES,
     GET_ID_MATERIALE_ESTUDIANTES,
      GET_MATERIALE_ESTUDIANTES,
       POST_MATERIALE_ESTUDIANTES,
        UPDATE_MATERIALE_ESTUDIANTES } from "../query/material_estudiantes.js";

export const getMaterial_estudiantes = async (req, res)=>{
    try {
        const [rows] = await connection.query(GET_MATERIALE_ESTUDIANTES)
        res.json(rows)
    } catch (error) {
        console.log(error)
    }
}

export const getMaterial_estudiantesId = async (req, res)=>{
    try {     
        const {id} = req.params
        const [rows] = await connection.query(GET_ID_MATERIALE_ESTUDIANTES,[id])
        if(rows.length === 0 ){
            return res.status(400).json({
                msg: "estudiante no encontrado"
            })
        }
        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const postMaterial_estudiantes= async (req, res)=>{
    const {estudiante_id, material_id} = req.body
    try {
    
        const [rows] = await connection.query(POST_MATERIALE_ESTUDIANTES,[estudiante_id, material_id])

        res.send({
            id: rows.insertId,
            estudiante_id,
            material_id,
            msg:"Asignado correctamente"
        })
    } catch (error) {
        console.log(error)
    }
}

export const patchMaterial_estudiantes = async (req, res)=>{
    const {id} = req.params
    const {estudiante_id, material_id} = req.body 
    try {
        const [result] = await connection.query(UPDATE_MATERIALE_ESTUDIANTES,[estudiante_id, material_id, id])
        if (result.affectedRows === 0) return res.status(404).json({
            msg:"Estudiante no encontrado"
        })

        const [rows] = await connection.query(GET_ID_MATERIALE_ESTUDIANTES, [id])

        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const deleteMaterial_estudiantes = async (req, res)=>{
    const {id} = req.params
    try {
        const [result] = await connection.query(DELETE_MATERIALE_ESTUDIANTES, [id])

        if(result.affectedRows === 0) return res.status(404).json({
            msg:"Estudiante no encontrado"
        })
        res.status(200).json({
            msg:'Eliminado correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}