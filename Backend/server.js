//Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

//Inicializaciones
const app=express()
dotenv.config()

//Configuraciones
app.set('port' ,process.env.port || 300)
app.use(cors())

//Middlewares
app.use(express.json())

// Rutas
app.get('/' ,(req,res)=>{
    res.send("Servidor On")

})

//Exportar la instancia de express por medio de app
export default app

