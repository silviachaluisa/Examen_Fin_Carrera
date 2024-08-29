import mongoose, { Schema,model } from "mongoose";
import bcrypt from "bcryptjs"

const reservaSchema = new Schema({
    codigo:{
        type:Number,
        require:true,
        trim:true,
        unique:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true,
    },
    cliente:{
        type:Schema.Types.ObjectId,
        ref:"Cliente",
        require:true,
        trim:true,
    },
    vehiculo:{
        type:Schema.Types.ObjectId,
        ref:"Vehiculo",
        require:true,
        trim:true,
    }   
  },{timestamps:true  
})

export default model('Reserva',reservaSchema)