






const renderAllPortafolios = (req,res)=>{
    res.send('Listar todos los portafolios')
}

const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
}
const createNewPortafolio = (req,res)=>{
    console.log(req.body);
    res.send("Portafolio almacenado en la BDD")
}
//metodo para actualizar
const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
}
const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
}
//metodo para eliminar en la base de datos
const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
}

//exportacion commonjs nombrada 

module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
}
