const login = (req,res)=>{
    res.status(200).json({res:'login del usuario'})

}
const registro=(req,res)=>{
    res.stattus(200).json({res:'registrar'})
}

export{
    login,
    registro
}