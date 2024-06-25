import { Router } from "express";
import { deleteEstudiantes, getEstudiantes, getEstudiantesId, patchEstudiante, postEstudiante } from "../controller/estudiantes.js";

const router = Router()


router.get('/', getEstudiantes)
router.get('/:id', getEstudiantesId)
router.post('/',postEstudiante)
router.patch('/:id', patchEstudiante)
router.delete('/:id', deleteEstudiantes)

export default router