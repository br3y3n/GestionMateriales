import { connection } from "../config/db.js"
import { LOGIN_ADMIN, LOGIN_ESTUDIANTE, LOGIN_GESTIONADOR } from "../query/login.query.js"
import { verified } from "../utils/bcrypt.js"
import { generateToken } from "../utils/jwt.js"

export const loginUser = async (req, res)=>{
    const {email,password, tipo} = req.body

    try {
        if(tipo == 'Administrador'){
        const [rows] =await connection.query(LOGIN_ADMIN, [email])
        console.log(rows)
        if(rows.length == 0){
            return res.send({
                msg:"administrador no encontrado"
            })
        } 
        console.log(password)
        console.log(rows[0].password)
        const passwordCorrect =await verified(password, rows[0].password)
        console.log(passwordCorrect)
        if(passwordCorrect != undefined){
            console.log("clg id rows"+rows.id)
            const token = generateToken(rows[0].id)
           return res.send({
                token:token,
                type:'Administrador'
            })}else{
              return  res.send({
                    msg:"contraseña incorrecta"
                })
            }
        }
        if(tipo == 'Gestionador'){
        const [rows] =await connection.query(LOGIN_GESTIONADOR, [email])
        if(rows.length == 0){
            return res.send({
                msg:"gestionador no encontrado"
            })
        } 
        const passwordCorrectG =await verified(password, rows[0].password)
        if(passwordCorrectG){
            const token = generateToken(rows[0].id)
          return res.send({
                token:token,
                type:'Gestionador'
            })
        }else{
           return res.send({
                msg:"contraseña Incorrecta"
            })
        }
    }
    if(tipo == 'Estudiante'){
        const [rows] =await connection.query(LOGIN_ESTUDIANTE, [email])
        if(rows.length == 0){
            return res.send({
                msg:"estudiante no encontrado"
            })
        }  
        const passwordCorrectE =await verified(password, rows[0].password)
        console.log(passwordCorrectE)
        if(passwordCorrectE ){
            const token = generateToken(rows[0].id)
          return  res.send({
                token:token,
                type:'Estudiante'
            })
        }else{
          return res.send({
                msg:"Contraseña Incorrecta"
            })
        }
    }
        
    } catch (error) {
        console.log(error)
    }
}