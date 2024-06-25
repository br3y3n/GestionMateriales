import { Router } from "express";
import { deleteGestionador, getGestionador, getGestionadorId, patchGestionador, postGestionador } from "../controller/gestionador.js";

const router = Router()


router.get('/', getGestionador)
router.get('/:id', getGestionadorId)
router.post('/',postGestionador)
router.patch('/:id', patchGestionador)
router.delete('/:id', deleteGestionador)

export default router