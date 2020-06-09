let express = require('express');
let router = express.Router();
let productoController = require('../controllers/productoController') ;



router.get('/:idProducto', productoController.detalle);

module.exports = router;