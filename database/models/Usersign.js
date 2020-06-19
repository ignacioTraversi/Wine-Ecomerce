module.exports = (sequelize, dataTypes) => {
    let alias = 'usersign';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sign: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        users_id: {
            type: dataTypes.STRING(11),
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: 'usersign',
        timestamps: true,
        underscored: true,      
    }


    const Userstoken = sequelize.define(alias, cols, config);

    Usersign.associate = function(models) {
        Usersign.belongsTo(models.user, {
            foreignKey: 'users_id'
        })
    }



    return Userstoken
}