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

export {
  registrarReserva
};
