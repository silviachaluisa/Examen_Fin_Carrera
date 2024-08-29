import mongoose  from "mongoose";
import Reserva from "../models/Reserva.js";
import Vehiculo from '../models/Vehiculo.js';
import Cliente from '../models/Cliente.js';

// Registrar un nuevo vehículo
const registrarReserva = async (req, res) => {
    const { codigo, descripcion, cliente, vehiculo } = req.body;
  
    // Validar que todos los campos estén completos
    if(Object.values(req.body).includes("")) return res.status(404).json({msg:"Debes llenar todos los campos"})
  
    try {
      // Verificar si el cliente existe
      const clienteExiste = await Cliente.findById(cliente);
      if (!clienteExiste) {
        return res.status(404).json({ msg: "Cliente no encontrado" });
      }
  
      // Verificar si el vehículo existe
      const vehiculoExiste = await Vehiculo.findById(vehiculo);
      if (!vehiculoExiste) {
        return res.status(404).json({ msg: "Vehículo no encontrado" });
      }
  
      // Crear la nueva reserva
      const nuevaReserva = new Reserva({
        codigo,
        descripcion,
        cliente: clienteExiste._id,
        vehiculo: vehiculoExiste._id,
      });
  
      await nuevaReserva.save();
  
      res.status(201).json({ msg: "Reserva creada exitosamente", reserva: nuevaReserva });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error al crear la reserva", error });
    }
  };
  

  const listarReservas = async (req, res) =>{
    try {
        const reservas =await Reserva.findOne().populate('cliente vehiculo');
        res.status(200).json(reservas)
    }catch(error){
        console.log(error);
        res.status(400).json({msg:"Error al listar las reservas"})
    }
  }

  const detalleReservas = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findById(id).populate('cliente vehiculo');
        if (!reserva) {
            return res.status(404).json({ msg: "Reserva no encontrada" });
        }
        res.status(200).json(reserva);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al obtener los detalles de la reserva", error });
    }
};
const actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { codigo, descripcion, cliente, vehiculo } = req.body;

    try {
        // Validar que la reserva existe
        let reserva = await Reserva.findById(id);
        if (!reserva) {
            return res.status(404).json({ msg: "Reserva no encontrada" });
        }

        // Verificar si el cliente existe
        const clienteExiste = await Cliente.findById(cliente);
        if (!clienteExiste) {
            return res.status(404).json({ msg: "Cliente no encontrado" });
        }

        // Verificar si el vehículo existe
        const vehiculoExiste = await Vehiculo.findById(vehiculo);
        if (!vehiculoExiste) {
            return res.status(404).json({ msg: "Vehículo no encontrado" });
        }

        // Actualizar la reserva
        reserva.codigo = codigo || reserva.codigo;
        reserva.descripcion = descripcion || reserva.descripcion;
        reserva.cliente = clienteExiste._id;
        reserva.vehiculo = vehiculoExiste._id;

        const reservaActualizada = await reserva.save();
        res.status(200).json({ msg: "Reserva actualizada exitosamente", reserva: reservaActualizada });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la reserva", error });
    }
};
const eliminarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findById(id);
        if (!reserva) {
            return res.status(404).json({ msg: "Reserva no encontrada" });
        }

        await reserva.remove();
        res.status(200).json({ msg: "Reserva eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar la reserva", error });
    }
};




export {
  registrarReserva,
  listarReservas,
  detalleReservas,
  actualizarReserva,
  eliminarReserva

};
