let indexController = {
    home: function (req,res) {
        res.render('index', {title: 'Express'}); 
    },
};

module.exports = indexController;
