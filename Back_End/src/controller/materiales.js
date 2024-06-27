import { connection } from "../config/db.js";
import { DELETE_MATERIAL, GET_ID_MATERIAL, GET_MATERIAL, POST_MATERIAL, UPDATE_MATERIAL } from "../query/materiales.query.js";

export const getMaterial = async (req, res)=>{
    try {
        const [rows] = await connection.query(GET_MATERIAL)
        res.json(rows)
    } catch (error) {
        console.log(error)
    }
}

export const getMaterialId = async (req, res)=>{
    try {     
        const {id} = req.params
        const [rows] = await connection.query(GET_ID_MATERIAL,[id])
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

export const postMaterial= async (req, res)=>{
    const {cantidad_material, materiales, codigo, estado, administrador_id} = req.body
    parseInt(cantidad_material)
    parseInt(codigo)
    parseInt(administrador_id)
    try {
        
        const [rows] = await connection.query(POST_MATERIAL,[cantidad_material, materiales, codigo, estado, administrador_id])

        res.send({
            id: rows.insertId,
            cantidad_material,
            materiales,
            codigo,
            estado
        })
    } catch (error) {
        console.log(error)
    }
}

export const patchMaterial = async (req, res)=>{
    const {id} = req.params
    const {cantidad_material, materiales, codigo, estado} = req.body
    console.log(cantidad_material, materiales, codigo, estado) 
    try {
        const [result] = await connection.query(UPDATE_MATERIAL,[cantidad_material,materiales, codigo, estado, id])
        if (result.affectedRows === 0) return res.status(404).json({
            msg:"Estudiante no encontrado"
        })

        const [rows] = await connection.query(GET_ID_MATERIAL, [id])

        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const deleteMaterial = async (req, res)=>{
    const {id} = req.params
    try {
        const [result] = await connection.query(DELETE_MATERIAL, [id])

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