
//importar router de express

const{Router} = require('express')

//instanciar la variable router
const router = Router()

const { renderAllPortafolios,
        renderPortafolio,
        renderPortafolioForm,
        createNewPortafolio,
        renderEditPortafolioForm,
        updatePortafolio,
        deletePortafolio
    } = require('../controllers/portafolio.controller.js')
//ruta para cargar la vista del fomulario
router.get('/portafolio/add', renderPortafolioForm)
///ruta para capturar los datos dle formulario
router.post('/portafolio/add', createNewPortafolio)
//ruta para presentar todos los p0rtafolios
router.get('/portafolios', renderAllPortafolios)
//ruta para presentar el detalle del portafolio
router.get('/portafolio/:id', renderPortafolio)
//ruta para cargar la vista del fromulario

router.get('/portafolio/edit/:id', renderEditPortafolioForm)
//ruta para capturar los datos del from y guardar en  BD
router.put('/portafolio/edit/:id', updatePortafolio)

//RUTA PARA ELIMINAR EL PORTAFOLIO
router.delete('/portafolio/delete/:id', deletePortafolio)
//EXPORTAR LA VARIABLE ROUTER
module.exports = router