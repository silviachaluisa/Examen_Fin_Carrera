import Usuario from "../models/Usuario.js"

const login = async (req,res)=>{
    const{email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const usuarioBDD = await Usuario.findOne({email}).select("-status -__v -token -updatedAt -createdAt")
    if(!usuarioBDD) return res.status(400).json({msg:"Usuario ya se encuentra registrado"} )
    const verificarPassword = await usuarioBDD.matchPassword(password)
    if(!verificarPassword) return res.status(404).json({msg:"Contraseña Incorrecta"})
    const{nombre,apellido,_id}=usuarioBDD
    res.status(200).json({
        
        nombre,
        apellido,
        _id,

        email:usuarioBDD.email
    })
}
const registro= async (req,res)=>{
    const {email,password} = req.body 
    if(Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Usuario.findOne({email}) 
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoUsuario = new Usuario(req.body)  
    nuevoUsuario.password = await nuevoUsuario.encrypPassword(password) // Antes de guardar un nuevo usuario en la base de datos, su contraseña es convertida en un en caractareses encriptados
    await nuevoUsuario.save()
    


    



    res.status(200).json({res:'Registrarse'})
}

export{
    login,
    registro
}