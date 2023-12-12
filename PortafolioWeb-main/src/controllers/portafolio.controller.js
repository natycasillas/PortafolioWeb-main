
//imnportar el modelo
//Exportar el modelo 
const Portfolio = require('../models/Portfolio')




const createNewPortafolio =async (req,res)=>{
    //desectructurar los datos del REQ.BODY
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.json({newPortfolio})
}

 



const renderAllPortafolios = (req,res)=>{
    
    const portfolios=Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
}



const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
}
const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
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
