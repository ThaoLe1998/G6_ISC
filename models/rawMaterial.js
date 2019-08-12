module.exports = (sequelize, type) => {
    return sequelize.define('RawMaterials', {
        id: {
            file: 'RM_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        price: {
            type: type.FLOAT,
            allowNull: false
        },

        unit: type.STRING,
        amount: {
            type: type.INTEGER,
            allowNull: false
        },

    }, {
        timestamps: false
    })

}