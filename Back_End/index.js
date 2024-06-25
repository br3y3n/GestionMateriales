import express from 'express'
import cors from 'cors'
import routesEstudiante from './src/routes/estudiantes.js'
import routerAdministrador from './src/routes/admistrador.js'
import routerGestionador from './src/routes/gestionador.js'
import routerMateriales from './src/routes/materiales.js'
import routerLogin from './src/routes/login.js'
const app = express()
const PORT = 5555
app.use(express.json())
app.use(cors())
app.use('/administrador', routerAdministrador)
app.use('/gestionador', routerGestionador)
app.use('/estudiante', routesEstudiante)
app.use('/login', routerLogin)
app.use('/materiales', routerMateriales)

app.listen(PORT, ()=>{
    console.log("servidor funcionando correctamente")
})