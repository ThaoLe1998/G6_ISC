module.exports = (sequelize, type) => {
    return sequelize.define('BillDetail', {
        Bill_ID: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        Di_ID: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        price: {
            type: type.FLOAT,
            allowNull: false
        },
        sale: type.FLOAT,

        amount: {
            type: type.FLOAT,
            allowNull: false
        },
        status: {
            type: type.INTEGER,
            allowNull: false
        }

    }, {
        timestamps: false
    })

}