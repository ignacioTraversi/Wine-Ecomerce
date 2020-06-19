module.exports = (sequelize,dataTypes) => {
    let alias = "Wine";
    
    let cols = {
        
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false,
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
            allowNull: false,
        },
        year:{
            type: dataTypes.INTEGER(4),
        },
        despription: {
            type: dataTypes.TEXT,
            allowNull: false,
        },
        stock: {
            type: dataTypes.INTEGER(11),
        },
        varieties_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    };
    let config = {
        tableName: "wines",
        timestamps: false,
    };

    const Wine = sequelize.define(alias, cols, config);

    Wine.associate = function(models){
        Wine.belongsTo(models.varieties,{
            as: "variety",
            foreignKey: "varieties_id"
        })
    };





    return Vino;
}