import { connection } from "../config/db.js"
import { DELETE_GESTIONADOR, GET_GESTIONADOR, GET_ID_GESTIONADOR, POST_GESTIONADOR, UPDATE_GESTIONADOR } from "../query/gestionador.query.js"
import { encrypt } from "../utils/bcrypt.js"


export const getGestionador = async (req, res)=>{
    try {
        const [rows] = await connection.query(GET_GESTIONADOR)
        res.json(rows)
    } catch (error) {
        console.log(error)
    }
}

export const getGestionadorId = async (req, res)=>{
    try {     
        const {id} = req.params
        const [rows] = await connection.query(GET_ID_GESTIONADOR,[id])
        if(rows.length === 0 ){
            return res.status(400).json({
                msg: "gestionador no encontrado"
            })
        }
        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const postGestionador= async (req, res)=>{
    const {email,departamento, password, telefono, administrador_id} = req.body
    try {
        const passHash =await encrypt(password)
        const [rows] = await connection.query(POST_GESTIONADOR,[email,departamento, telefono, passHash, administrador_id])

        res.send({
            id: rows.insertId,
            email,
            departamento,
            password,
            telefono,
            administrador_id
            
        })
    } catch (error) {
        console.log(error)
    }
}

export const patchGestionador = async (req, res)=>{
    const {id} = req.params
    const {emial,departamento, password, telefono} = req.body 
    try {
        const [result] = await connection.query(UPDATE_GESTIONADOR,[emial,departamento,password, telefono, id])
        if (result.affectedRows === 0) return res.status(404).json({
            msg:"gestionador no encontrado"
        })

        const [rows] = await connection.query(GET_ID_GESTIONADOR, [id])

        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const deleteGestionador = async (req, res)=>{
    const {id} = req.params
    try {
        const [result] = await connection.query(DELETE_GESTIONADOR, [id])

        if(result.affectedRows === 0) return res.status(404).json({
            msg:"gestionador no encontrado"
        })
        res.status(200).json({
            msg:'Eliminado correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}