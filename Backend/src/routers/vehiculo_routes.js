import { Router } from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router=Router()

import{
    listarVehiculos,
    regitrarVehiculo,
    actualizarVehiculo,
    detalleVehiculo,
    eliminarVehiculo

}from "../controllers/vehiculo_controler.js"
import { actualizarCliente } from "../controllers/cliente_controller.js";

router.post("/vehiculos/registro",verificarAutenticacion,regitrarVehiculo);
router.get("/vehiculos",verificarAutenticacion,listarVehiculos);
router.get("/vehiculo/:id",verificarAutenticacion,detalleVehiculo);
router.get("/vehiculo/actualizar/:id",verificarAutenticacion,actualizarVehiculo);
router.get("/vehiculo/eliminar/:id",verificarAutenticacion,eliminarVehiculo);


export default router