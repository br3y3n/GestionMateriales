import { Router } from "express";
import { deleteAdministrador, getAdministrador, getAdministradorId, patchAdministrador, postAdministrador } from "../controller/admistrador.js";
import checkJwt from "../middleware/session.js";


const router = Router()


router.get('/',checkJwt, getAdministrador )
router.get('/:id',checkJwt, getAdministradorId )
router.post('/', postAdministrador)
router.patch('/:id',patchAdministrador )
router.delete('/:id',deleteAdministrador )

export default router