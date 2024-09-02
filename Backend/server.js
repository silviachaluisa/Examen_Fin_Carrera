//Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
//Importacion de la variable router usuario
import routerUsuarios from './src/routers/usuario_routes.js'
import routerClientes from './src/routers/cliente_routes.js'
import routerVehiculos from './src/routers/vehiculo_routes.js';
import routerReservas from './src/routers/reserva_routes.js'

//Inicializaciones
const app=express()
dotenv.config()

//Configuraciones
app.set('port' ,process.env.PORT || 3000)
app.use(cors())

//Middlewares
app.use(express.json())

// Rutas
app.get('/' ,(req,res)=>{
    res.send("Servidor On")
})
app.use('/api',routerUsuarios)
app.use('/api',routerClientes)
app.use('/api',routerVehiculos)
app.use('/api',routerReservas)


//Manejo de una ruta que no sea encontrada
app.use(( req,res) => res.status(404).send("Endpoint no encontrado - 404"))


//Exportar la instancia de express por medio de app
export default app

