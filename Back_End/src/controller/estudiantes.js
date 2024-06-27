import { connection } from "../config/db.js";
import { DELETE_ESTUDIANTE, GET_ESTUDIANTE, GET_ID_ESTUDIANTE, GET_MATERIALES_ESTUDIANTE, POST_ESTUDIANTE, UPDATE_ESTUDIANTE } from "../query/estudiante.query.js";
import { encrypt } from "../utils/bcrypt.js";

export const getEstudiantes = async (req, res)=>{
    try {
        const [rows] = await connection.query(GET_ESTUDIANTE)
        res.json(rows)
    } catch (error) {
        console.log(error)
    }
}

export const getEstudianteAuth = async(req, res)=>{
    const {id} = req.user
    try {
        const [rows] = await connection.query(GET_ID_ESTUDIANTE,[id])
        res.json(rows)

    } catch (error) {
        console.log(error)
    }
} 
export const getMaterialesEstudiante = async (req, res)=>{
    const {id} = req.params
    try {
        const [rows] = await connection.query(GET_MATERIALES_ESTUDIANTE,[id])
        console.log(rows)
        if(rows.length == 0){
            res.send({
                msg:"No tienes materiales asiganados"
            })
        }else{
            res.send(rows)
        }
    } catch (error) {
        console.log(error)
    }
}
export const getEstudiantesId = async (req, res)=>{
    try {     
        const {id} = req.params
        const [rows] = await connection.query(GET_ID_ESTUDIANTE,[id])
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

export const postEstudiante= async (req, res)=>{
    const {email, password, telefono, carrera} = req.body
    try {
        const passHash = await encrypt(password)
        const [rows] = await connection.query(POST_ESTUDIANTE,[email, passHash, telefono, carrera])

        res.send({
            id: rows.insertId,
            email,
            password,
            telefono,
            carrera
        })
    } catch (error) {
        console.log(error)
    }
}

export const patchEstudiante = async (req, res)=>{
    const {id} = req.params
    const {email, password, telefono, carrera} = req.body 
    const passHash = await encrypt(password)
    try {
        const [result] = await connection.query(UPDATE_ESTUDIANTE,[email,passHash, telefono, carrera, id])
        if (result.affectedRows === 0) return res.status(404).json({
            msg:"Estudiante no encontrado"
        })

        const [rows] = await connection.query(GET_ID_ESTUDIANTE, [id])

        res.json(rows[0])
    } catch (error) {
        console.log(error)
    }
}

export const deleteEstudiantes = async (req, res)=>{
    const {id} = req.params
    try {
        const [result] = await connection.query(DELETE_ESTUDIANTE, [id])

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