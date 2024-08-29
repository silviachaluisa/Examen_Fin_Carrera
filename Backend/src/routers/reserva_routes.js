import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router=Router()

import{ 
    registrarReserva

 }from "../controllers/reserva_controller.js";

router.post("/reserva/registro",verificarAutenticacion,registrarReserva)



export default router