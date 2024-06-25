import { Router } from "express";
import { deleteMaterial, getMaterial, getMaterialId, patchMaterial, postMaterial } from "../controller/materiales.js";
import checkJwt from "../middleware/session.js";


const router = Router()


router.get('/',checkJwt, getMaterial)
router.get('/:id', getMaterialId)
router.post('/',postMaterial)
router.patch('/:id', patchMaterial)
router.delete('/:id', deleteMaterial)

export default router