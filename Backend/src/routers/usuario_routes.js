import {Router} from 'express'
//Importar todos los métodos del controlador
 import{
    login,
     registro
}from "../controllers/usuario_controller.js";

//Se crea una instancia de router
const router = Router()

router.post("/login",login);
router.post("/registro",registro);

export default router