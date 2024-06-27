import { Router } from "express";
import { deleteEstudiantes, getEstudianteAuth, getEstudiantes, getEstudiantesId, getMaterialesEstudiante, patchEstudiante, postEstudiante } from "../controller/estudiantes.js";
import checkJwt from "../middleware/session.js";

const router = Router()


router.get('/auth',checkJwt, getEstudianteAuth)
router.get('/obtenermateriales/:id', getMaterialesEstudiante)
router.get('/',getEstudiantes)
router.get('/:id', getEstudiantesId)
router.post('/',postEstudiante)
router.patch('/:id', patchEstudiante)
router.delete('/:id', deleteEstudiantes)
export default router