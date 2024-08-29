import mongoose, { Schema,model } from "mongoose";
import bcrypt from "bcryptjs"

const vehiculoSchema=new Schema({

    marca:{
        type:String,
        require:true,
        trim:true
    },
    modelo:{
        type:String,
        require:true,
        trim:true,
    },
    aniofabricacion:{
        type:Number,
        require:true,
        trim:true,  
    },
    placa:{
        type:String,
        require:true,
        trim:true, 
        unique:true

    },
    color:{
        type:String,
        require:true,
        trim:true

    },
    tipo_vehiculo:{
        type:String,
        require:true,
        trim:true

    },
    kilometraje:{
        type:Number,
        require:true,
        trim:true 

    },
    descripcion:{
        type:String,
        require:true,
        trim:true

    }

},{timestamps:true
    
})

export default model('Vehiculo',vehiculoSchema)