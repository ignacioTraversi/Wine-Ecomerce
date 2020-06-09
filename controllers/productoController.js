let productoController = {
    listado: function () {},
    detalle: function (req,res){
        res.send("Bienvenido al detalle del producto" + req.params.idProducto);
    },
    crear: function () {},
};

module.exports = productoController;