import mongoose, {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const clienteSchema = new Schema({

    cedula:{
        type:Number,
        require:true,
        trim:true,
        unique:true
    },
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    ciudad:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    
    direccion:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:String,
        require:true,
        trim:true
    },
    fecha_nacimiento:{
        type:Date,
        require:true,
        trim:true,
        default:Date.now()
    }
 },{
    timestamps:true   
})

export default model('Cliente',clienteSchema)