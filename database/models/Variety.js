module.exports = (sequelize,dataTypes) => {
    let alias = "Variety";
    
    let cols = {
        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },        
    };

    let config = {
        tableName: "varieties",
        timestamps: false,
    };


    const Vino = sequelize.define(alias, cols, config);

    Variety.associate = function(models) {
        Variety.hasMany(models.Wine, {
            as: 'wines',
            foreignKey: 'varieties_id'
        })
    };

    return Variety;
}