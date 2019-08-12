module.exports = (sequelize, type) => {
    return sequelize.define('Dishs',{
        id: {
            file: 'Di_ID',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DT_ID:{
            type: type.INTEGER,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
       price: type.FLOAT,
       currency: type.STRING(10),
       description: type.STRING,
       image: type.STRING
    }, { timestamps: false })
 
}