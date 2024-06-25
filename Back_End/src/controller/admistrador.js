import { connection } from "../config/db.js"
import { DELETE_ADMISTRADOR, GET_ADMISTRADOR, GET_ID_ADMISTRADOR, POST_ADMISTRADOR, UPDATE_ADMISTRADOR } from "../query/administrador.query.js"
import { encrypt } from "../utils/bcrypt.js"


export const getAdministrador = async (req, res)=>{
    try {
        const {id} = req.user
        console.log(id)
        const [rows] = await connection.query(GET_ID_ADMISTRADOR,[id])
        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const getAdministradorId = async (req, res)=>{
    try {   
        
        const {id} = req.user
        console.log(id)
        const [rows] = await connection.query(GET_ID_ADMISTRADOR,[id])
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

export const postAdministrador= async (req, res)=>{
    const {email, password, telefono} = req.body
    try {
        const passHash =await encrypt(password)
        console.log(password)
        const [rows] = await connection.query(POST_ADMISTRADOR,[email,passHash, telefono])

        res.send({
            id: rows.insertId,
            email,
            password,
            telefono
        })
    } catch (error) {
        console.log(error)
    }
}

export const patchAdministrador = async ()=>{
    const {id} = req.params
    const {emial, password, telefono, carrera} = req.body 
    try {
        const [result] = await connection.query(UPDATE_ADMISTRADOR,[emial,password, telefono, carrera, id])
        if (result.affectedRows === 0) return res.status(404).json({
            msg:"Estudiante no encontrado"
        })

        const [rows] = await connection.query(GET_ID_ADMISTRADOR, [id])

        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const deleteAdministrador = async ()=>{
    const {id} = req.params
    try {
        const [result] = await connection.query(DELETE_ADMISTRADOR, [id])

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