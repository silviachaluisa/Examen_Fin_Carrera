import mongoose from "mongoose";
import Vehiculo from "../models/Vehiculo.js";

const regitrarVehiculo= async(req,res)=>{
    const {placa}=req.body //Se realiza una desestructuracion para extraer el valor del campo "placa" del cuerpo de la solicitud, este valor es necesario para veriricar si el vehiculo ya esta registrado en la base de datos
    if(Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos,debes llenar todos lo campos"})
    const verificarPlacaBDD=await Vehiculo.findOne({placa}) //Se realiza una consulta a la base de datos usando el modelo "Vehiculo" para verificar si existe un vehiculo con la misma placa
    if(verificarPlacaBDD) return res.status(404).json ({msg:"Lo sentimos el vehiculo ya se encuentra registrado"}) //Verifica si ya existe un vehiculo con la misma placa en la BDD
    const nuevoVehiculo=new Vehiculo(req.body)
    nuevoVehiculo.usuario=req.usuarioBDD._id
    await nuevoVehiculo.save() //Guarda un nuevo vehiculo con la base de datos
    res.status(200).json({msg:"Vehiculo registrado con exito"})  //Respuesta que indica exito
}
const listarVehiculos=async(req,res)=>{
    const vehiculos=await Vehiculo.find({estado:true}).where('usuario').equals(req.usuarioBDD).select ("-createdAt -updatedAt -__v").populate('_id placa modelo marca')
    res.status(200).json(vehiculos)
}
const detalleVehiculo= async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, no existe el vehiculo ${id}`})
    const vehiculo=await Vehiculo.findById(id).select ("-createdAt -updatedAt -__v").populate('_id placa modelo marca') 
    res.status(200).json(vehiculo)
        
    }
const actualizarVehiculo= async(req,res)=>{
    const{id}=req.params
    if(Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos todos los campos deben ser llenados"})
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({msg:`Lo sentimos, no existe el vehiculo ${id}`}); 
    await Vehiculo.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualizacion exitosa del vehiculo"})
    
}

const eliminarVehiculo=async(req,res)=>{
    const{id}=req.params
    if(Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, todos los campos deben ser llenados"})
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:"Lo sentimos, no existe el vehiculo"})
    await Vehiculo.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"El vehiculo ha sido eliminado exitosamente"})    
     


}



export{
    regitrarVehiculo, // Exporta la funcion para que sea utilizada en otras partes de la aplicacion
    listarVehiculos,
    detalleVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
} 