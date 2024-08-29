import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router=Router()

import{ 
    actualizarReserva,
    detalleReservas,
    eliminarReserva,
    listarReservas,
    registrarReserva

 }from "../controllers/reserva_controller.js";

router.post("/reserva/registro",verificarAutenticacion,registrarReserva)
router.get("/reservas/listar",verificarAutenticacion,listarReservas)
router.get("/reserva/:id",verificarAutenticacion,detalleReservas)
router.put("/reserva/actualizar",verificarAutenticacion,actualizarReserva)
router.delete("/reserva/eliminar",verificarAutenticacion,eliminarReserva)



export default router