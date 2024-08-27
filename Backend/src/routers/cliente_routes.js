import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js';
const router=Router()

import{
    actualizarCliente,
    detalleCliente,
    listarClientes,
    registroCliente
}from "../controllers/cliente_controller.js";


router.post("/cliente/registro",verificarAutenticacion,registroCliente);
router.get("/clientes",verificarAutenticacion,listarClientes);
router.get("/cliente/:id",verificarAutenticacion,detalleCliente);
router.get("/cliente/actualizar/:id",verificarAutenticacion,actualizarCliente);

export default router