import {Router} from 'express'
const router = Router()

router.post('/login',(req,res)=> res.send("Login"))
router.post('/registro',(req, res)=> res.send("Registro"))

export default router