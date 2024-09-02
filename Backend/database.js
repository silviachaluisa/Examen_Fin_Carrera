import mongoose from 'mongoose'

// Pertimitir que solo los campos definidos en el Schema sean almacenados
// enn la BDD
mongoose.set('strictQuery', true)

// Crear una función llamada connection()
const connection = async()=>{
    try {
        // Establecer al conexión con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI_PRODUCTION)
        
        // Presentar la conexión en consola 
        console.log(`L base de datos esta conectada en ${connection.host} - ${connection.port}`)
    
    } catch (error) {
        // Capturar Error en la conexión
        console.log(error);
    }
}

const desconnection = async ()=>{
    try{
        //Cierra la coneccion
        await mongoose.disconnect();
        console.log("La base de datos ha sido desconectada");
    }catch(error){
        //Capturar Error en la desconeccion
        console.log(error)

    }

};


//Exportar la función
export {
    connection,
    desconnection   
} 

  


 
    