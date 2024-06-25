import { Router } from "express"
import { deleteMaterial_estudiantes, getMaterial_estudiantes, getMaterial_estudiantesId, patchMaterial_estudiantes, postMaterial_estudiantes } from "../controller/materiales_estudiante.js"

const router = Router()


router.get('/', getMaterial_estudiantes)
router.get('/:id', getMaterial_estudiantesId)
router.post('/',postMaterial_estudiantes)
router.patch('/:id', patchMaterial_estudiantes)
router.delete('/:id', deleteMaterial_estudiantes)

export default router