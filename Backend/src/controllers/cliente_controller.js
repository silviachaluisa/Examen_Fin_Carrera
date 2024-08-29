import mongoose from "mongoose";
import Cliente from "../models/Cliente.js"

const registroCliente = async(req,res)=>{
const {email} =req.body
if(Object.values(req.body).includes(""))return res.status(400).json ({msg: "Lo sentimos debes llenar todos los campos"})
const verificarEmailBDD=await Cliente.findOne({email})
if(verificarEmailBDD) return res.status(404).json ({msg:"Lo sentimos el email ya se encuentra registrado"})
const nuevoCliente = new Cliente (req.body)
nuevoCliente.usuario=req.usuarioBDD._id
await nuevoCliente.save()
res.status(200).json({msg:"Cliente registrado con exito"})
    
}


const listarClientes = async (req,res)=>{
    const clientes= await Cliente.find({estado:true}).where('usuario').equals(req.usuarioBDD).select ("-createdAt -updatedAt -__v").populate('_id nombre apellido')
    res.status(200).json(clientes)
}
const detalleCliente=async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, no existe el cliente ${id}`})
    const cliente = await Cliente.findById(id).select("-createdAt -updatedAt -__v").populate('_id nombre apellido')
    res.status(200).json(cliente)
}
const actualizarCliente = async(req,res)=>{
    const {id} = req.params
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos todos los campos deben ser llenados"})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, no existe el cliente ${id}`}); 
    await Cliente.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({msg:"Actualización exitosa del cliente"})
}

const eliminarCliente = async(req,res)=>{
    const {id}=req.params
    if(Object.values(req.body).includes("")) return res.status(400).json({msg: "Lo sentimos, todos los campos  deben ser llenados"})
    if(!mongoose.Type.ObjectId.isValid(id)) return res.status(404).json({msg:`Lo sentimos, no existe ese Cliente`}) 
    await Cliente.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Cliente eliminado exitosamente"})

}

export{
    registroCliente,
    listarClientes,
    detalleCliente,
    actualizarCliente,
    eliminarCliente,
}