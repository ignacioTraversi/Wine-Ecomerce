module.exports = (sequelize,dataTypes) => {
    let alias = "user";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER(12),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type:dataTypes.STRING(30),
            allowNull: false,
        },
        surname: {
            type: dataTypes.STRING(15),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: { 
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        profile_img: {
            type: dataTypes.STRING(200),
            allowNull: true,
        },
        phone: {
            type: dataTypes.STRING(50),
            allowNull: true,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        admin: {
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
        },

    }


    let config = {
        tablename: "user",
        timestamps: false,
        underscored: true,
    }

    const User = sequelize.define(alias,cols, config);

    User.associate = function(models) {
        User.belongsToMany(models.wine, {
            through: 'user_wine ',
            timestamps: false,
            foreignKey: 'users_id',
            otherKey: 'wine_id',
        })
        User.hasOne(models.userstoken,{
            as: "user",
            foreignKey: "users_id"
        })
    
    }
    return Cliente;
}